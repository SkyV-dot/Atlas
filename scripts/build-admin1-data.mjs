import { mkdir, writeFile, readFile, stat, readdir, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { topology } from 'topojson-server';
import { presimplify, simplify } from 'topojson-simplify';
import { feature, merge, neighbors } from 'topojson-client';
import { geoArea, geoCentroid } from 'd3-geo';
import polygonClipping from 'polygon-clipping';
import { execFileSync } from 'node:child_process';
import { getTargetCount, territoryPolicy } from './territory-policy.mjs';

const destination = 'public/maps/admin1';
const detailedDestination = join(destination, 'detailed');
const metroCache = 'scripts/data/capital-metros';
await mkdir(destination, { recursive: true });
await mkdir(detailedDestination, { recursive: true });
await mkdir(metroCache, { recursive: true });
const sourceUrls = [
  'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson',
  'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_1_states_provinces.geojson',
];
const grouped = new Map();
const localOnly = process.argv.includes('--local');
if (localOnly) {
  const localFiles = (await readdir(detailedDestination)).filter((file) => file.endsWith('.geojson') && file !== 'GIB.geojson');
  if (localFiles.length === 0) throw new Error('No hay mapas detallados locales para reagrupar.');
  for (const file of localFiles) {
    const iso3 = file.slice(0, -'.geojson'.length);
    const collection = JSON.parse(await readFile(join(detailedDestination, file), 'utf8'));
    for (const item of collection.features) addFeature(grouped, iso3, item);
  }
} else {
  for (const [index, url] of sourceUrls.entries()) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`No se pudo descargar la fuente ${index + 1}: ${response.status}`);
    const collection = await response.json();
    for (const item of collection.features) {
      const iso3 = item.properties?.adm0_a3;
      if (!iso3 || !item.geometry) continue;
      if (index === 0 && ['USA', 'CAN', 'FRA'].includes(iso3)) continue;
      if (index === 1 && !['USA', 'CAN'].includes(iso3)) continue;
      addFeature(grouped, iso3, item);
    }
  }

  // France uses its 13 regions; the UK keeps Natural Earth's administrative layer.
  for (const iso3 of ['FRA']) {
    const metadata = await (await fetch(`https://www.geoboundaries.org/api/current/gbOpen/${iso3}/ADM1/`)).json();
    const sourceUrl = new URL(metadata.simplifiedGeometryGeoJSON);
    sourceUrl.hostname = 'media.githubusercontent.com';
    sourceUrl.pathname = `/media/wmgeolab/geoBoundaries/${sourceUrl.pathname.slice('/wmgeolab/geoBoundaries/raw/'.length)}`;
    const source = await (await fetch(sourceUrl)).json();
    for (const item of source.features) addFeature(grouped, iso3, item);
  }
}

applyAdminTerritoryOverrides(grouped);
const capitalMetros = localOnly ? await readLocalMetroCache() : await buildCapitalMetroCache(grouped);

for (const [iso3, items] of grouped) {
  const collection = { type: 'FeatureCollection', features: items };
  const topo = topology({ regions: collection }, 1e6);
  const simplifiedTopology = simplify(presimplify(topo), 0.002);
  const simplified = feature(simplifiedTopology, simplifiedTopology.objects.regions);
  const detailedFeatures = simplified.features.map(normalizeFeature);
  preserveEnclaveGeometry(detailedFeatures, items);
  await writeFile(join(detailedDestination, `${iso3}.geojson`), JSON.stringify({ type: 'FeatureCollection', features: detailedFeatures }));

  const targetCount = getTargetCount(iso3, detailedFeatures.length);
  const metro = targetCount > 1 && targetCount <= 16 && detailedFeatures.length > 1 ? capitalMetros.get(iso3) : undefined;
  let playableFeatures;
  if (metro) {
    const clippedMetro = clipMetroToCountry(metro.geometry, detailedFeatures);
    if (clippedMetro) {
      const remaining = subtractMetroFromRegions(detailedFeatures, clippedMetro);
      const remainderTarget = Math.max(1, targetCount - 1);
      const remainderTopology = topology({ regions: { type: 'FeatureCollection', features: remaining } }, 1e6);
      const simplifiedRemainderTopology = simplify(presimplify(remainderTopology), 0.002);
      const simplifiedRemainder = feature(simplifiedRemainderTopology, simplifiedRemainderTopology.objects.regions).features.map(normalizeFeature);
      const groupedRemainder = simplifiedRemainder.length > remainderTarget
        ? iso3 === 'GBR'
          ? groupUnitedKingdomRegions(simplifiedRemainderTopology, simplifiedRemainder)
          : groupRegions(simplifiedRemainderTopology, simplifiedRemainder, remainderTarget)
        : simplifiedRemainder;
      const metroDisplayName = iso3 === 'GBR' ? 'Londres' : metro.name;
      playableFeatures = [...groupedRemainder, {
        type: 'Feature',
        properties: {
          shapeName: `Área metropolitana de ${metroDisplayName}`,
          shapeISO: `CAPITAL-${iso3}`,
          shapeID: `CAPITAL-${iso3}`,
          shapeMembers: [metro.name],
          regionType: 'capital-metropolitan-area',
        },
        geometry: clippedMetro,
      }];
      console.log(`${iso3}: metrópoli de ${metro.name} separada como región jugable.`);
    }
  }
  if (!playableFeatures) {
    playableFeatures = targetCount < detailedFeatures.length
      ? groupRegions(simplifiedTopology, detailedFeatures, targetCount)
      : detailedFeatures;
  }
  restoreEnclaveGeometry(playableFeatures, detailedFeatures);
  await writeFile(join(destination, `${iso3}.geojson`), JSON.stringify({ type: 'FeatureCollection', features: playableFeatures }));
  if (territoryPolicy[iso3]) console.log(`${iso3}: ${detailedFeatures.length} → ${playableFeatures.length} regiones jugables (objetivo ${targetCount}).`);
}

const files = await readdir(destination);
await unlink(join(destination, 'GIB.geojson')).catch(() => {});
let totalBytes = 0;
for (const file of files) if (file.endsWith('.geojson')) totalBytes += (await stat(join(destination, file))).size;
console.log(`Guardé los mapas jugables de ${grouped.size} países (${(totalBytes / 1024 / 1024).toFixed(2)} MB); el detalle original simplificado está en ${detailedDestination}.`);

function normalizeFeature(item) {
  const sourceName = item.properties?.shapeName ?? item.properties?.name_es ?? item.properties?.name_en ?? item.properties?.name ?? 'División administrativa';
  const shapeName = item.properties?.shapeID === 'KOS-5908' && sourceName.includes('Plužine') ? 'Prizren' : sourceName;
  return {
    type: 'Feature',
    properties: {
      shapeName,
      shapeISO: item.properties?.shapeISO ?? item.properties?.iso_3166_2 ?? '',
      shapeID: item.properties?.shapeID ?? item.properties?.adm1_code ?? '',
    },
    geometry: item.geometry,
  };
}

function preserveEnclaveGeometry(features, sourceFeatures) {
  const namesToKeep = new Set(['ceuta', 'melilla', 'gibraltar']);
  const rawGeometryByName = new Map(sourceFeatures.map((item) => [
    String(item.properties?.shapeName ?? '').toLocaleLowerCase('es'), item.geometry,
  ]));
  for (const item of features) {
    const key = String(item.properties.shapeName).toLocaleLowerCase('es');
    if (namesToKeep.has(key) && rawGeometryByName.has(key)) item.geometry = rawGeometryByName.get(key);
  }
}

function restoreEnclaveGeometry(playableFeatures, detailedFeatures) {
  const namesToKeep = new Set(['Ceuta', 'Melilla', 'Gibraltar']);
  const rawFeatures = new Map(detailedFeatures
    .filter((item) => namesToKeep.has(item.properties.shapeName))
    .map((item) => [item.properties.shapeName, item]));
  for (const item of playableFeatures) {
    const members = item.properties.shapeMembers ?? [item.properties.shapeName];
    const specialMembers = members.filter((name) => namesToKeep.has(name));
    for (const name of specialMembers) {
      const raw = rawFeatures.get(name);
      if (!raw) continue;
      if (members.length === 1) item.geometry = raw.geometry;
      else item.geometry = appendAsMultiPolygon(item.geometry, raw.geometry);
    }
  }
}

function appendAsMultiPolygon(base, addition) {
  const polygons = (geometry) => geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.type === 'MultiPolygon' ? geometry.coordinates : [];
  return { type: 'MultiPolygon', coordinates: [...polygons(base), ...polygons(addition)] };
}

function applyAdminTerritoryOverrides(grouped) {
  const spain = grouped.get('ESP') ?? [];
  const morocco = grouped.get('MAR') ?? [];
  const unitedKingdom = grouped.get('GBR') ?? [];
  const movedCities = new Set(['ceuta', 'melilla']);
  const remainingMorocco = [];
  for (const item of morocco) {
    const name = String(item.properties?.shapeName ?? '').toLocaleLowerCase('es');
    if (movedCities.has(name)) {
      item.properties.shapeISO = `ESP-${String(item.properties.shapeName).toUpperCase()}`;
      item.properties.shapeID = `ESP-${String(item.properties.shapeName).toUpperCase()}`;
      spain.push(item);
    } else {
      remainingMorocco.push(item);
    }
  }
  const existingGibraltar = spain.filter((item) => String(item.properties?.shapeName ?? '').toLocaleLowerCase('es') === 'gibraltar');
  const existingUkGibraltar = unitedKingdom.filter((item) => String(item.properties?.shapeName ?? '').toLocaleLowerCase('es') === 'gibraltar');
  const sourceGibraltar = grouped.get('GIB') ?? [];
  const gibraltar = sourceGibraltar.length ? sourceGibraltar : existingUkGibraltar.length ? existingUkGibraltar : existingGibraltar;
  const remainingSpain = spain.filter((item) => String(item.properties?.shapeName ?? '').toLocaleLowerCase('es') !== 'gibraltar');
  const remainingUnitedKingdom = unitedKingdom.filter((item) => String(item.properties?.shapeName ?? '').toLocaleLowerCase('es') !== 'gibraltar');
  for (const item of gibraltar) {
    item.properties.shapeName = 'Gibraltar';
    item.properties.shapeISO = 'GBR-GIB';
    item.properties.shapeID = 'GBR-GIB';
    remainingUnitedKingdom.push(item);
  }
  grouped.set('ESP', remainingSpain);
  grouped.set('MAR', remainingMorocco);
  grouped.set('GBR', remainingUnitedKingdom);
  grouped.delete('GIB');
  return gibraltar;
}

function groupRegions(topo, sourceFeatures, targetCount) {
  const geometries = topo.objects.regions.geometries;
  const adjacent = neighbors(geometries);
  let clusters = sourceFeatures.map((item, index) => ({
    members: [index],
    area: geoArea(item),
  }));

  while (clusters.length > targetCount) {
    const clusterByMember = new Map();
    clusters.forEach((cluster, clusterIndex) => cluster.members.forEach((member) => clusterByMember.set(member, clusterIndex)));
    const touchingPairs = new Set();
    for (let member = 0; member < adjacent.length; member++) {
      const left = clusterByMember.get(member);
      for (const neighbor of adjacent[member]) {
        const right = clusterByMember.get(neighbor);
        if (left !== right) touchingPairs.add(left < right ? `${left}:${right}` : `${right}:${left}`);
      }
    }

    // Prefer joining small neighboring regions, preserving larger recognizable areas.
    let bestPair;
    let bestScore = Infinity;
    for (const pair of touchingPairs) {
      const [left, right] = pair.split(':').map(Number);
      const score = clusters[left].area + clusters[right].area;
      if (score < bestScore) { bestScore = score; bestPair = [left, right]; }
    }
    // Some archipelagos have no shared borders. Still meet the stated cap by keeping
    // their components together as one playable region; the detailed file stays intact.
    if (!bestPair) {
      let smallest = [...clusters.keys()].sort((a, b) => clusters[a].area - clusters[b].area);
      bestPair = [smallest[0], smallest[1]];
    }

    const [left, right] = bestPair;
    const a = clusters[left];
    const b = clusters[right];
    clusters = clusters.filter((_, index) => index !== left && index !== right);
    clusters.push({ members: [...a.members, ...b.members], area: a.area + b.area });
  }

  return clusters.map((cluster) => {
    const members = cluster.members.map((index) => sourceFeatures[index]);
    const names = members.map((item) => item.properties.shapeName);
    const ids = cluster.members.map((index) => geometries[index]);
    return {
      type: 'Feature',
      properties: {
        shapeName: names.length === 1 ? names[0] : `${names[0]} y ${names.length - 1} regiones`,
        shapeMembers: names,
        shapeISO: members.map((item) => item.properties.shapeISO).filter(Boolean).join('|'),
        shapeID: members.map((item) => item.properties.shapeID).filter(Boolean).join('|'),
      },
      geometry: merge(topo, ids),
    };
  });
}

function groupUnitedKingdomRegions(topo, sourceFeatures) {
  const regions = [
    { code: 'GBR-SCT', name: 'Escocia', center: [-3.7, 56.8] },
    { code: 'GBR-NIR', name: 'Irlanda del Norte', center: [-6.1, 54.7] },
    { code: 'GBR-WLS', name: 'Gales', center: [-3.8, 52.3] },
    { code: 'GBR-NW', name: 'Noroeste de Inglaterra', center: [-2.6, 53.5] },
    { code: 'GBR-NE', name: 'Noreste de Inglaterra', center: [-1.5, 54.7] },
    { code: 'GBR-MID', name: 'Centro de Inglaterra', center: [-1.8, 52.4] },
    { code: 'GBR-E', name: 'Este de Inglaterra', center: [0.3, 52.4] },
    { code: 'GBR-SW', name: 'Suroeste de Inglaterra', center: [-3.5, 50.8] },
    { code: 'GBR-SE', name: 'Sureste de Inglaterra', center: [-0.9, 51.1] },
  ].map((region) => ({ ...region, members: [] }));
  const geometries = topo.objects.regions.geometries;

  for (const [index, item] of sourceFeatures.entries()) {
    const [longitude, latitude] = geoCentroid(item);
    const region = regions.reduce((best, candidate) => {
      const averageLatitude = (latitude + candidate.center[1]) / 2 * Math.PI / 180;
      const deltaX = (longitude - candidate.center[0]) * Math.cos(averageLatitude);
      const deltaY = latitude - candidate.center[1];
      const distance = deltaX * deltaX + deltaY * deltaY;
      return distance < best.distance ? { region: candidate, distance } : best;
    }, { region: regions[0], distance: Infinity }).region;
    region.members.push(index);
  }

  const emptyRegions = regions.filter((region) => region.members.length === 0);
  if (emptyRegions.length) throw new Error(`No pude crear las regiones británicas: ${emptyRegions.map((region) => region.name).join(', ')}.`);
  return regions.map((region) => ({
    type: 'Feature',
    properties: {
      shapeName: region.name,
      shapeMembers: region.members.map((index) => sourceFeatures[index].properties.shapeName),
      shapeISO: region.code,
      shapeID: region.code,
    },
    geometry: merge(topo, region.members.map((index) => geometries[index])),
  }));
}

async function readLocalMetroCache() {
  const cacheFiles = (await readdir(metroCache)).filter((file) => file.endsWith('.geojson'));
  const result = new Map();
  for (const file of cacheFiles) {
    const data = JSON.parse(await readFile(join(metroCache, file), 'utf8'));
    if (data.features?.[0]) result.set(file.slice(0, -'.geojson'.length), {
      name: data.features[0].properties.name,
      geometry: data.features[0].geometry,
    });
  }
  return result;
}

async function buildCapitalMetroCache(groupedCountries) {
  const countriesToProcess = [...groupedCountries]
    .filter(([iso3, items]) => {
      const target = getTargetCount(iso3, items.length);
      return target > 1 && target <= 16 && items.length > 1;
    })
    .map(([iso3]) => iso3);
  if (!countriesToProcess.length) return new Map();

  const zipPath = '/private/tmp/map-ghs-fua.zip';
  const dataDirectory = '/private/tmp/map-ghs-fua';
  const geopackage = join(dataDirectory, 'GHS_FUA_UCDB2015_GLOBE_R2019A_54009_1K_V1_0.gpkg');
  try {
    await stat(geopackage);
  } catch {
    const url = 'https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_FUA_UCDB2015_GLOBE_R2019A/V1-0/GHS_FUA_UCDB2015_GLOBE_R2019A_54009_1K_V1_0.zip';
    const response = await fetch(url);
    if (!response.ok) throw new Error(`No se pudo descargar el mapa de áreas metropolitanas: ${response.status}`);
    await writeFile(zipPath, new Uint8Array(await response.arrayBuffer()));
    await mkdir(dataDirectory, { recursive: true });
    execFileSync('unzip', ['-o', zipPath, '-d', dataDirectory], { stdio: 'ignore' });
  }

  const table = 'GHS_FUA_UCDB2015_GLOBE_R2019A_54009_1K_V1_0';
  const sqlCodes = [...new Set(countriesToProcess)].map((code) => `'${code.replaceAll("'", "''")}'`).join(',');
  const query = `SELECT eFUA_name, Cntry_ISO, hex(geom) AS geom FROM "${table}" WHERE Cntry_ISO IN (${sqlCodes});`;
  const rows = JSON.parse(execFileSync('sqlite3', ['-json', geopackage, query], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 }));
  const urbanAreas = rows.map((row) => ({
    name: row.eFUA_name,
    country: row.Cntry_ISO,
    geometry: parseGeoPackageGeometry(row.geom),
  }));

  const placesResponse = await fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_populated_places.geojson');
  if (!placesResponse.ok) throw new Error(`No se pudo descargar la lista de capitales: ${placesResponse.status}`);
  const places = await placesResponse.json();
  const eligible = new Set(countriesToProcess);
  const result = new Map();
  for (const capital of places.features) {
    const properties = capital.properties ?? {};
    const iso3 = properties.ADM0_A3;
    if (properties.ADM0CAP !== 1 || !eligible.has(iso3) || result.has(iso3)) continue;
    const [longitude, latitude] = capital.geometry.coordinates;
    const area = urbanAreas.find((candidate) => candidate.country === iso3 && geometryContainsPoint(candidate.geometry, longitude, latitude));
    if (!area) continue;
    const entry = {
      type: 'FeatureCollection',
      features: [{ type: 'Feature', properties: { name: area.name, country: iso3, source: 'GHS-FUA R2019A' }, geometry: area.geometry }],
    };
    await writeFile(join(metroCache, `${iso3}.geojson`), JSON.stringify(entry));
    result.set(iso3, { name: area.name, geometry: area.geometry });
  }
  console.log(`Encontré áreas metropolitanas para ${result.size} de ${countriesToProcess.length} países elegibles.`);
  return result;
}

function parseGeoPackageGeometry(hex) {
  const buffer = Buffer.from(hex, 'hex');
  const envelopeType = (buffer[3] >> 1) & 7;
  const envelopeDoubles = [0, 4, 6, 6, 8][envelopeType] ?? 0;
  const offset = 8 + envelopeDoubles * 8;
  const parsed = readWkb(buffer, offset);
  if (parsed.geometry.type === 'Polygon') return { type: 'MultiPolygon', coordinates: [parsed.geometry.coordinates] };
  return parsed.geometry;
}

function readWkb(buffer, offset) {
  const little = buffer[offset] === 1;
  const readUint32 = (position) => little ? buffer.readUInt32LE(position) : buffer.readUInt32BE(position);
  const readDouble = (position) => little ? buffer.readDoubleLE(position) : buffer.readDoubleBE(position);
  const type = readUint32(offset + 1) & 0xff;
  let cursor = offset + 5;
  if (type === 6) {
    const count = readUint32(cursor); cursor += 4;
    const polygons = [];
    for (let index = 0; index < count; index++) {
      const item = readWkb(buffer, cursor);
      polygons.push(item.geometry.coordinates);
      cursor = item.offset;
    }
    return { geometry: { type: 'MultiPolygon', coordinates: polygons }, offset: cursor };
  }
  if (type === 3) {
    const ringCount = readUint32(cursor); cursor += 4;
    const rings = [];
    for (let ring = 0; ring < ringCount; ring++) {
      const count = readUint32(cursor); cursor += 4;
      const points = [];
      for (let point = 0; point < count; point++) {
        points.push(mollweideToLonLat(readDouble(cursor), readDouble(cursor + 8)));
        cursor += 16;
      }
      rings.push(points);
    }
    return { geometry: { type: 'Polygon', coordinates: rings }, offset: cursor };
  }
  throw new Error(`Tipo de geometría inesperado en el conjunto metropolitano: ${type}`);
}

function mollweideToLonLat(x, y) {
  const radius = 6371007.181;
  const theta = Math.asin(Math.max(-1, Math.min(1, y / (Math.SQRT2 * radius))));
  const latitude = Math.asin(Math.max(-1, Math.min(1, (2 * theta + Math.sin(2 * theta)) / Math.PI)));
  const longitude = Math.PI * x / (2 * Math.SQRT2 * radius * Math.cos(theta));
  return [longitude * 180 / Math.PI, latitude * 180 / Math.PI];
}

function geometryContainsPoint(geometry, longitude, latitude) {
  return geometry.coordinates.some((polygon) => {
    if (!ringContainsPoint(polygon[0], longitude, latitude)) return false;
    return !polygon.slice(1).some((hole) => ringContainsPoint(hole, longitude, latitude));
  });
}

function ringContainsPoint(ring, x, y) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const crosses = (yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (crosses) inside = !inside;
  }
  return inside;
}

function asMultiPolygon(geometry) {
  return geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
}

function clipMetroToCountry(metroGeometry, regions) {
  const country = polygonClipping.union(...regions.map((region) => asMultiPolygon(region.geometry)));
  const clipped = polygonClipping.intersection(asMultiPolygon(metroGeometry), country);
  return clipped.length ? { type: 'MultiPolygon', coordinates: clipped } : null;
}

function subtractMetroFromRegions(regions, metroGeometry) {
  return regions.flatMap((region) => {
    if (!boundsIntersect(geometryBounds(region.geometry), geometryBounds(metroGeometry))) return [region];
    const difference = polygonClipping.difference(asMultiPolygon(region.geometry), asMultiPolygon(metroGeometry));
    return difference.length ? [{ ...region, geometry: { type: 'MultiPolygon', coordinates: difference } }] : [];
  });
}

function geometryBounds(geometry) {
  const bounds = [Infinity, Infinity, -Infinity, -Infinity];
  const visit = (value) => {
    if (!Array.isArray(value)) return;
    if (value.length >= 2 && typeof value[0] === 'number' && typeof value[1] === 'number') {
      bounds[0] = Math.min(bounds[0], value[0]);
      bounds[1] = Math.min(bounds[1], value[1]);
      bounds[2] = Math.max(bounds[2], value[0]);
      bounds[3] = Math.max(bounds[3], value[1]);
      return;
    }
    for (const child of value) visit(child);
  };
  visit(geometry.coordinates);
  return bounds;
}

function boundsIntersect(a, b) {
  return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
}

function addFeature(grouped, iso3, source) {
  const properties = source.properties ?? {};
  const feature = {
    type: 'Feature',
    properties: {
      shapeName: properties.shapeName ?? properties.name_es ?? properties.name_en ?? properties.name ?? 'División administrativa',
      shapeISO: properties.shapeISO ?? properties.iso_3166_2 ?? '',
      shapeID: properties.shapeID ?? properties.adm1_code ?? '',
    },
    geometry: source.geometry,
  };
  const items = grouped.get(iso3) ?? [];
  items.push(feature);
  grouped.set(iso3, items);
}
