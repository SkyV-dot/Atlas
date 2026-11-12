import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { feature, merge } from 'topojson-client';
import { topology } from 'topojson-server';
import countries from 'i18n-iso-countries';
import atlas from 'world-atlas/countries-50m.json' with { type: 'json' };

const adminDirectory = 'public/maps/admin1';
const detailedDirectory = `${adminDirectory}/detailed`;
const worldFeatures = feature(atlas, atlas.objects.countries).features;
const fallbackByIso3 = new Map(worldFeatures.map((item) => [iso3(item), item]));
const outlineByIso3 = new Map();
const detailedFiles = (await readdir(detailedDirectory)).filter((file) => file.endsWith('.geojson'));

for (const filename of detailedFiles) {
  const code = filename.slice(0, -'.geojson'.length);
  const collection = JSON.parse(await readFile(`${detailedDirectory}/${filename}`, 'utf8'));
  if (collection.features?.length) outlineByIso3.set(code, dissolve(collection.features));
}

const playableFiles = (await readdir(adminDirectory)).filter((file) => file.endsWith('.geojson'));
for (const filename of playableFiles) {
  const code = filename.slice(0, -'.geojson'.length);
  if (outlineByIso3.has(code) || code === 'GIB') continue;
  const collection = JSON.parse(await readFile(`${adminDirectory}/${filename}`, 'utf8'));
  if (collection.features?.length) outlineByIso3.set(code, dissolve(collection.features));
}

const unitedKingdom = outlineByIso3.get('GBR');
const malvinas = fallbackByIso3.get('FLK');
if (unitedKingdom && malvinas) outlineByIso3.set('GBR', dissolve([
  { type: 'Feature', properties: {}, geometry: unitedKingdom },
  { type: 'Feature', properties: {}, geometry: malvinas.geometry },
]));

const outlines = [...fallbackByIso3].map(([code, fallback]) => ({
  type: 'Feature',
  properties: { ISO_A3: code, name: fallback.properties?.name ?? countries.getName(countries.getAlpha2Code(code, 'en'), 'en') ?? code },
  geometry: outlineByIso3.get(code) ?? fallback.geometry,
}));
for (const [code, geometry] of outlineByIso3) {
  if (!fallbackByIso3.has(code)) outlines.push({ type: 'Feature', properties: { ISO_A3: code, name: code === 'GZA' ? 'Gaza' : code }, geometry });
}

await mkdir('public/maps', { recursive: true });
await writeFile('public/maps/country-outlines.geojson', JSON.stringify({ type: 'FeatureCollection', features: outlines }));
console.log(`Preparé contornos de ${outlines.length} países a partir de sus regiones administrativas locales.`);

function dissolve(features) {
  const topo = topology({ regions: { type: 'FeatureCollection', features } }, 1e6);
  return merge(topo, topo.objects.regions.geometries);
}

function iso3(item) {
  const code = item.properties?.ISO_A3 ?? countries.numericToAlpha3(String(item.id)) ?? countries.getAlpha3Code(item.properties?.name ?? '', 'en') ?? '';
  return code === 'XKK' || code === 'XKX' ? 'KOS' : code;
}
