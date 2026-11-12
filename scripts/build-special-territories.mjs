import { mkdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { feature } from 'topojson-client';
import countries from 'i18n-iso-countries';
import { geoContains } from 'd3-geo';
import polygonClipping from 'polygon-clipping';
import atlas from 'world-atlas/countries-50m.json' with { type: 'json' };
import world from 'world-atlas/countries-110m.json' with { type: 'json' };

const admin1 = 'public/maps/admin1';
const detailed = `${admin1}/detailed`;
const dataDirectory = 'src/data';
const atlasFeatures = feature(atlas, atlas.objects.countries).features;
const palestine = atlasFeatures.find((item) => iso3(item) === 'PSE');
if (!palestine) throw new Error('No encontré Palestina en la cartografía de países de 50m.');

const palestinePolygons = palestine.geometry.type === 'Polygon'
  ? [palestine.geometry.coordinates]
  : palestine.geometry.coordinates;
const gazaIndex = palestinePolygons.findIndex((polygon) => geoContains({ type: 'Polygon', coordinates: polygon }, [34.46, 31.50]));
if (gazaIndex < 0) throw new Error('No pude separar la franja de Gaza de la geometría de Palestina.');

const gazaGeometry = { type: 'MultiPolygon', coordinates: [palestinePolygons[gazaIndex]] };
const westBankPolygons = palestinePolygons.filter((_, index) => index !== gazaIndex);
const westBankGeometry = westBankPolygons.length === 1
  ? { type: 'Polygon', coordinates: westBankPolygons[0] }
  : { type: 'MultiPolygon', coordinates: westBankPolygons };

const gibraltarSource = JSON.parse(await readFile(`${detailed}/GBR.geojson`, 'utf8'));
const gibraltarFeature = gibraltarSource.features.find((item) => item.properties.shapeName === 'Gibraltar');
if (!gibraltarFeature?.geometry) throw new Error('No encontré la geometría detallada de Gibraltar.');
const spainSource = JSON.parse(await readFile(`${detailed}/ESP.geojson`, 'utf8'));
const enclaves = spainSource.features.filter((item) => ['ceuta', 'melilla'].includes(String(item.properties?.shapeName ?? '').toLocaleLowerCase('es')));
if (enclaves.length !== 2) throw new Error('No encontré las geometrías de Ceuta y Melilla para asignarlas a España.');
const smallCountryCodes = ['LIE', 'SGP', 'AND', 'MCO'];
const existingWorldCodes = new Set(feature(world, world.objects.countries).features.map(iso3));
const smallCountries = atlasFeatures.filter((item) => smallCountryCodes.includes(iso3(item)) && !existingWorldCodes.has(iso3(item)));
if (smallCountries.length !== 4) throw new Error('No encontré Andorra, Mónaco, Liechtenstein y Singapur en la cartografía de 50m.');

const worldFeatures = feature(world, world.objects.countries).features;
const spain = worldFeatures.find((item) => iso3(item) === 'ESP');
const unitedKingdom = worldFeatures.find((item) => iso3(item) === 'GBR');
const malvinas = worldFeatures.find((item) => iso3(item) === 'FLK');
const antarctica = worldFeatures.find((item) => iso3(item) === 'ATA');
if (!spain || !unitedKingdom || !malvinas || !antarctica) throw new Error('No encontré España, Reino Unido, Malvinas o Antártida en el mapa mundial.');
const ceuta = enclaves.find((item) => item.properties.shapeName.toLowerCase() === 'ceuta').geometry;
const melilla = enclaves.find((item) => item.properties.shapeName.toLowerCase() === 'melilla').geometry;
const spainWithEnclaves = polygonClipping.union(asMultiPolygon(spain.geometry), asMultiPolygon(ceuta), asMultiPolygon(melilla));
const spainGeometry = orientGeoJsonRings({ type: 'MultiPolygon', coordinates: polygonClipping.difference(spainWithEnclaves, asMultiPolygon(gibraltarFeature.geometry)) });
const ukGeometry = orientGeoJsonRings({ type: 'MultiPolygon', coordinates: polygonClipping.union(asMultiPolygon(unitedKingdom.geometry), asMultiPolygon(gibraltarFeature.geometry), asMultiPolygon(malvinas.geometry)) });

const claimSource = JSON.parse(await readFile('scripts/data/antarctic-claims-source.geojson', 'utf8'));
const claimants = claimSource.features.filter((item) => item.properties.type === 'Official');
const antarcticRegions = divideAntarctica(antarctica.geometry, claimants);

const overrides = {
  spain: spainGeometry,
  unitedKingdom: ukGeometry,
  gaza: gazaGeometry,
  westBank: westBankGeometry,
  smallCountries,
};
await mkdir(dataDirectory, { recursive: true });
await writeFile(`${dataDirectory}/mapTerritoryOverrides.json`, JSON.stringify(overrides));

await mkdir(`${admin1}/detailed`, { recursive: true });
await writeCollection(`${detailed}/PSE.geojson`, [makeFeature('Cisjordania', 'PSE-WB', westBankGeometry)]);
await writeCollection(`${detailed}/GZA.geojson`, [makeFeature('Gaza', 'GZA', gazaGeometry)]);
await writeCollection(`${admin1}/PSE.geojson`, [makeFeature('Cisjordania', 'PSE-WB', westBankGeometry)]);
await writeCollection(`${admin1}/GZA.geojson`, [makeFeature('Gaza', 'GZA', gazaGeometry)]);
await writeCollection(`${detailed}/ATA.geojson`, antarcticRegions);
await writeCollection(`${admin1}/ATA.geojson`, antarcticRegions);
await unlink(`${admin1}/GIB.geojson`).catch(() => {});

console.log(`Preparé Gaza por separado, devolví Ceuta y Melilla a España, asigné Gibraltar y Malvinas al Reino Unido y dividí Antártida en ${antarcticRegions.length} zonas de reclamación y territorio no reclamado.`);

function iso3(item) {
  return countries.numericToAlpha3(String(item.id)) ?? countries.getAlpha3Code(item.properties?.name ?? '', 'en') ?? '';
}

function makeFeature(shapeName, shapeID, geometry) {
  return {
    type: 'Feature',
    properties: { shapeName, shapeISO: shapeID, shapeID },
    geometry,
  };
}

async function writeCollection(path, features) {
  await writeFile(path, JSON.stringify({ type: 'FeatureCollection', features }));
}

function asMultiPolygon(geometry) {
  return geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
}

function orientGeoJsonRings(geometry) {
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  const coordinates = polygons.map((polygon) => polygon.map((ring, ringIndex) => {
    let area = 0;
    for (let index = 0; index < ring.length - 1; index += 1) {
      area += ring[index][0] * ring[index + 1][1] - ring[index + 1][0] * ring[index][1];
    }
    const shouldBeClockwise = ringIndex === 0;
    const isClockwise = area < 0;
    return shouldBeClockwise === isClockwise ? ring : [...ring].reverse();
  }));
  return { type: 'MultiPolygon', coordinates };
}

function divideAntarctica(antarcticaGeometry, claims) {
  const land = asMultiPolygon(antarcticaGeometry);
  const clippedClaims = claims.map((item) => ({
    name: item.properties.name,
    country: item.properties.sovereignt,
    geometry: polygonClipping.intersection(asMultiPolygon(item.geometry), land),
  })).filter((item) => item.geometry.length > 0);
  const allClaims = polygonClipping.union(...clippedClaims.map((item) => item.geometry));
  const disputingClaimants = new Set();
  for (let left = 0; left < clippedClaims.length; left += 1) {
    for (let right = left + 1; right < clippedClaims.length; right += 1) {
      if (polygonClipping.intersection(clippedClaims[left].geometry, clippedClaims[right].geometry).length) {
        disputingClaimants.add(clippedClaims[left].country);
        disputingClaimants.add(clippedClaims[right].country);
      }
    }
  }
  const regions = clippedClaims.map((claim) => {
    const others = clippedClaims.filter((item) => item !== claim);
    const otherUnion = polygonClipping.union(...others.map((item) => item.geometry));
    return { ...claim, geometry: polygonClipping.difference(claim.geometry, otherUnion) };
  }).filter((item) => item.geometry.length > 0);
  const exclusiveUnion = polygonClipping.union(...regions.map((item) => item.geometry));
  const disputed = polygonClipping.difference(allClaims, exclusiveUnion);
  const unclaimed = polygonClipping.difference(land, allClaims);
  const features = regions.map((region) => makeFeature(antarcticClaimName(region), `ATA-${claimantCode(region.country)}`, { type: 'MultiPolygon', coordinates: region.geometry }));
  if (disputed.length) {
    const names = [...disputingClaimants].map(antarcticClaimName).join(', ');
    features.push({
      ...makeFeature(`Zona disputada: ${names}`, 'ATA-DIS', { type: 'MultiPolygon', coordinates: disputed }),
      properties: { shapeName: `Zona disputada: ${names}`, shapeISO: 'ATA-DIS', shapeID: 'ATA-DIS', shapeMembers: [...disputingClaimants].map(antarcticClaimName) },
    });
  }
  if (unclaimed.length) features.push(makeFeature('Territorio antártico no reclamado', 'ATA-UNC', { type: 'MultiPolygon', coordinates: unclaimed }));
  return features;
}

function claimantCode(country) {
  return ({ Argentine: 'ARG', Australia: 'AUS', Chile: 'CHL', France: 'FRA', 'New Zealand': 'NZL', Norway: 'NOR', 'United Kingdom': 'GBR' })[country] ?? country;
}

function antarcticClaimName(region) {
  const code = claimantCode(typeof region === 'string' ? region : region.country);
  return ({
    ARG: 'Antártida Argentina',
    AUS: 'Territorio Antártico Australiano',
    CHL: 'Antártida Chilena',
    FRA: 'Tierra Adelia (Francia)',
    NZL: 'Dependencia Ross (Nueva Zelanda)',
    NOR: 'Tierra de la Reina Maud (Noruega)',
    GBR: 'Territorio Antártico Británico',
  })[code] ?? (typeof region === 'string' ? region : region.name);
}
