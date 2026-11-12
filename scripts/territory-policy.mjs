// Number of selectable regions used by the strategy layer.
// Detailed administrative borders are preserved separately under public/maps/admin1/detailed.
export const territoryPolicy = {
  USA: { kind: 'maximum', value: 50 },
  CHN: { kind: 'maximum', value: 50 },
  RUS: { kind: 'maximum', value: 50 },
  IND: { kind: 'maximum', value: 50 },
  BRA: { kind: 'maximum', value: 50 },
  COD: { kind: 'maximum', value: 20 },
  UKR: { kind: 'maximum', value: 20 },
  DZA: { kind: 'maximum', value: 20 },
  ESP: { kind: 'maximum', value: 16 },
  FRA: { kind: 'maximum', value: 16 },
  DEU: { kind: 'maximum', value: 16 },
  JPN: { kind: 'exact', value: 10 },
  GBR: { kind: 'exact', value: 10 },
  IRL: { kind: 'exact', value: 10 },
  ITA: { kind: 'exact', value: 10 },
  BEL: { kind: 'range', min: 3, max: 5 },
  NLD: { kind: 'range', min: 3, max: 5 },
  DNK: { kind: 'range', min: 3, max: 5 },
  CHE: { kind: 'range', min: 3, max: 5 },
  LIE: { kind: 'exact', value: 1 },
  SVN: { kind: 'maximum', value: 5 },
  HRV: { kind: 'maximum', value: 10 },
  SGP: { kind: 'exact', value: 1 },
  MCO: { kind: 'exact', value: 1 },
  BOL: { kind: 'maximum', value: 9 },
  ATA: { kind: 'exact', value: 1 },
  PSE: { kind: 'exact', value: 1 },
  GZA: { kind: 'exact', value: 1 },
  LUX: { kind: 'exact', value: 1 },
  AND: { kind: 'exact', value: 1 },
  SMR: { kind: 'exact', value: 1 },
};

export function getTargetCount(iso3, count) {
  const policy = territoryPolicy[iso3];
  if (count < 2) return count;
  // For countries without an explicit category, use their current ADM1 count
  // to infer the closest category the user defined. Countries already under
  // that category's cap keep all their existing regions.
  // The range boundaries are >50, >20, >16, >10, and >5 respectively.
  if (!policy) {
    if (count > 50) return 50;
    if (count > 20) return 20;
    if (count > 16) return 16;
    if (count > 10) return 10;
    if (count > 5) return 5;
    return count;
  }
  if (policy.kind === 'maximum') return Math.min(count, policy.value);
  if (policy.kind === 'exact') return Math.min(count, policy.value);
  if (policy.kind === 'range') return Math.min(count, Math.max(policy.min, Math.min(policy.max, count)));
  return count;
}
