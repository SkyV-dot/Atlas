import { mkdir, writeFile } from 'node:fs/promises';
import { feature } from 'topojson-client';
import { topology as createTopology } from 'topojson-server';
import { presimplify, simplify } from 'topojson-simplify';

const source = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson';
const output = 'public/maps/physical/features.geojson';
const features = [];

const rivers = await load('ne_50m_rivers_lake_centerlines.geojson');
for (const item of rivers.features) {
  if (Number(item.properties.min_zoom) > 4) continue;
  features.push(normalize(item, 'river', item.properties.name_es ?? item.properties.name));
}

const lakes = await load('ne_50m_lakes.geojson');
for (const item of lakes.features) {
  if (Number(item.properties.min_zoom) > 4) continue;
  features.push(normalize(item, 'lake', item.properties.name_es ?? item.properties.name));
}

const landforms = await load('ne_50m_geography_regions_polys.geojson');
const landformTypes = new Set(['Range/mtn', 'Plain', 'Basin', 'Tundra', 'Desert', 'Plateau', 'Valley', 'Foothills', 'Delta', 'Wetlands', 'Lowland', 'Gorge']);
for (const item of landforms.features) {
  if (!landformTypes.has(item.properties.FEATURECLA) || Number(item.properties.MIN_LABEL) > 3.7) continue;
  features.push(normalize(item, 'landform', item.properties.NAME_ES ?? item.properties.NAME));
}

const elevations = await load('ne_50m_geography_regions_elevation_points.geojson');
for (const item of elevations.features) {
  if (item.properties.featurecla !== 'mountain' || Number(item.properties.min_zoom) > 5) continue;
  features.push(normalize(item, 'mountain', item.properties.name_es ?? item.properties.name));
}

const sourceCollection = { type: 'FeatureCollection', features };
const sourceTopology = createTopology({ features: sourceCollection }, 1e6);
const reducedTopology = simplify(presimplify(sourceTopology), 0.002);
const reduced = feature(reducedTopology, reducedTopology.objects.features);
await mkdir('public/maps/physical', { recursive: true });
await writeFile(output, JSON.stringify(reduced));
console.log(`Preparé ${reduced.features.length} elementos geográficos simplificados en ${output}.`);

async function load(filename) {
  const response = await fetch(`${source}/${filename}`);
  if (!response.ok) throw new Error(`No se pudo descargar ${filename}: ${response.status}`);
  return response.json();
}

function normalize(item, kind, name) {
  return {
    type: 'Feature',
    properties: { kind, name: name ?? '' },
    geometry: item.geometry,
  };
}
