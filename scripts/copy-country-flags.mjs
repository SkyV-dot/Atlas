import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { feature } from 'topojson-client';
import countries from 'i18n-iso-countries';
import atlas from 'world-atlas/countries-110m.json' with { type: 'json' };

const source = fileURLToPath(new URL('../node_modules/flag-icons/flags/1x1', import.meta.url));
const destination = 'public/flags';
const available = new Set(await readdir(source));
const iso3Codes = new Set(['AND', 'MCO', 'LIE', 'SGP', 'GZA', 'KOS']);
for (const item of feature(atlas, atlas.objects.countries).features) {
  const id = String(item.id ?? item.properties?.ISO_A3 ?? item.properties?.name ?? '');
  const name = item.properties?.name ?? item.properties?.NAME ?? item.properties?.name_long ?? '';
  const code = item.properties?.ISO_A3 ?? countries.numericToAlpha3(id) ?? countries.getAlpha3Code(name, 'en') ?? '';
  if (code) iso3Codes.add(code === 'XKK' || code === 'XKX' ? 'KOS' : code);
}

await mkdir(destination, { recursive: true });
for (const iso3 of iso3Codes) {
  const alpha2 = iso3 === 'KOS' ? 'xk' : iso3 === 'GZA' ? 'ps' : iso3 === 'ATA' ? 'aq' : countries.alpha3ToAlpha2(iso3)?.toLowerCase();
  const filename = `${alpha2 && /^[a-z]{2}$/.test(alpha2) ? alpha2 : 'xx'}.svg`;
  if (available.has(filename)) await copyFile(join(source, filename), join(destination, filename));
}
console.log(`Copié ${new Set([...iso3Codes].map((iso3) => iso3 === 'KOS' ? 'xk' : iso3 === 'GZA' ? 'ps' : iso3 === 'ATA' ? 'aq' : countries.alpha3ToAlpha2(iso3)?.toLowerCase()).filter(Boolean)).size} banderas SVG locales.`);
