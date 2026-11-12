import './style.css';
import { startWorldMap } from './rendering/map/worldMap';
import countries from 'i18n-iso-countries';
import governmentData from './data/countryGovernmentTypes.json';

const root = document.querySelector<HTMLDivElement>('#map-root');
const panel = document.querySelector<HTMLElement>('#country-panel');
const countryPicker = document.querySelector<HTMLInputElement>('#country-picker');
const countryOptions = document.querySelector<HTMLDivElement>('#country-options');
const mapViewPicker = document.querySelector<HTMLSelectElement>('#map-view');

if (!root || !panel) throw new Error('No se encontró el contenedor del mapa.');

let selectedCountryName = '';
let selectCountryByIso3: ((iso3: string) => void) | undefined;
let startSelectedCountry: (() => void) | undefined;
let startNewGame: (() => void) | undefined;
let setMapView: ((view: 'orographic' | 'regional' | 'global') => void) | undefined;
let gameStarted = false;
let availableCountries: { name: string; iso3: string }[] = [];
type Metric = { value: number; year?: string; refreshedAt?: string };
type BudgetStats = { annualRevenue?: number; annualSpending?: number; perTurnRevenue?: number; perTurnSpending?: number; perTurnBalance?: number; perTurnInterest?: number; policyRatePct?: number; netInterestPctOfGdp?: number };
type CurrencyStats = { code: string; name: string; usdRate?: number; rateDate?: string };
type CountryStats = { population?: Metric; gdp?: Metric; debt?: Metric; debtRatio?: Metric; inflation?: Metric; weeklyInflation?: number; area?: Metric; democracyIndex?: Metric; militarySpend?: Metric; militaryBaseline?: Metric; budget?: BudgetStats; governmentType?: string; currency?: CurrencyStats };
type StatsState = { status: 'loading' | 'ready' | 'error'; stats?: CountryStats };
const statsCache = new Map<string, Promise<CountryStats>>();
let usMilitaryBaseline: Promise<Metric | undefined> | undefined;
let worldFactbookIndex: Promise<WorldFactbookSummary[]> | undefined;
let vdemIndex: Promise<Map<string, Metric>> | undefined;
let fxRatesRequest: Promise<Map<string, { rate: number; date: string }>> | undefined;
let fxRatesLoadedAt = 0;
const SECONDS_PER_YEAR = 31_536_000;
let activeStatsIso3 = '';
let activeStatsState: StatsState = { status: 'loading' };
const governmentByCountryName = new Map(governmentData.countries.map(({ country, government }) => [normalizeSearch(country), government]));
const governmentNameAliases: Record<string, string> = {
  BOL: 'Bolivia', CPV: 'Cape Verde', CIV: 'Ivory Coast', COD: 'The Democratic Republic of Congo', COG: 'Congo',
  CZE: 'Czech Republic', TLS: 'East Timor', FSM: 'Micronesia, Federated States of', KOR: 'South Korea',
  PRK: 'North Korea', LAO: 'Laos', RUS: 'Russia', TUR: 'Turkey', VEN: 'Venezuela', VNM: 'Vietnam',
  PSE: 'Palestine', GZA: 'Palestine', FLK: 'Falkland Islands', ATA: 'Antarctica', USA: 'United States',
  TZA: 'Tanzania', SYR: 'Syria', CUW: 'Curacao', MDA: 'Moldova', MKD: 'North Macedonia', IRN: 'Iran',
  GMB: 'Gambia', FJI: 'Fiji Islands', CHN: 'China', BRN: 'Brunei',
};
const governmentTypeOverrides: Record<string, string> = {
  TWN: 'República semipresidencial', MNE: 'República parlamentaria', KOS: 'República parlamentaria',
  JEY: 'Dependencia de la Corona británica', GGY: 'Dependencia de la Corona británica', IMN: 'Dependencia de la Corona británica',
  MAF: 'Colectividad francesa de ultramar', BLM: 'Colectividad francesa de ultramar', ATF: 'Territorio francés de ultramar',
  ALA: 'Región autónoma de Finlandia', SXM: 'País constituyente del Reino de los Países Bajos',
};
const worldFactbookNameAliases: Record<string, string> = {
  USA: 'United States', COD: 'DR Congo', COG: 'Republic of the Congo', CIV: 'Ivory Coast', CZE: 'Czechia',
  CPV: 'Cape Verde', TLS: 'Timor-Leste', KOR: 'South Korea', PRK: 'North Korea', LAO: 'Laos', RUS: 'Russia',
  TUR: 'Turkey', PSE: 'Palestine', GZA: 'Palestine', KOS: 'Kosovo', FLK: 'Falkland Islands', ATA: 'Antarctica',
  ATF: 'French Southern and Antarctic Lands', TZA: 'Tanzania', GMB: 'Gambia', FJI: 'Fiji',
};
const worldFactbookSlugAliases: Record<string, string> = { CHN: 'china' };

type WorldFactbookSummary = { name: string; slug: string };
type WorldFactbookProfile = {
  population?: string | number;
  gdp?: number | null;
  gdpGrowth?: number | null;
  publicDebt?: number | null;
  inflation?: number | null;
  area?: number | null;
  democracyScore?: number | null;
  dataUpdatedAt?: string;
  geography?: Record<string, unknown>;
  economy?: Record<string, unknown>;
  government?: Record<string, { text?: string } | undefined>;
  military?: Record<string, { text?: string } | Record<string, { text?: string } | undefined> | undefined>;
};

void startWorldMap(root, {
  onCountriesReady(countries, selectCountry) {
    selectCountryByIso3 = selectCountry;
    availableCountries = countries;
  },
  onMapReady(controls) {
    startSelectedCountry = controls.startCountry;
    startNewGame = controls.startNewGame;
    setMapView = controls.setView;
  },
  onGameStarted() {
    gameStarted = true;
    if (countryPicker) countryPicker.disabled = true;
    panel.innerHTML = regionPanel(selectedCountryName, undefined, 'Cargando las divisiones del país…', true);
  },
  onViewModeChange(view, regionalAvailable) {
    if (mapViewPicker) {
      mapViewPicker.value = view;
      const regionalOption = mapViewPicker.querySelector<HTMLOptionElement>('option[value="regional"]');
      if (regionalOption) regionalOption.disabled = !regionalAvailable;
    }
  },
  onSelect(country) {
    selectedCountryName = country.name;
    gameStarted = false;
    if (countryPicker) countryPicker.value = country.name;
    closeCountryOptions();
    activeStatsIso3 = country.iso3;
    activeStatsState = { status: 'loading' };
    panel.innerHTML = countryPanel(country.name, country.iso3, 'Elige este país para iniciar la partida y después podrás seleccionar sus provincias.', true, undefined, false, activeStatsState);
    panel.querySelector<HTMLElement>('.panel-body')?.scrollTo(0, 0);
    void loadCountryStats(country.iso3).then((stats) => {
      if (activeStatsIso3 !== country.iso3 || gameStarted) return;
      activeStatsState = { status: 'ready', stats };
      panel.innerHTML = countryPanel(country.name, country.iso3, 'Elige este país para iniciar la partida y después podrás seleccionar sus provincias.', true, undefined, false, activeStatsState);
    }).catch(() => {
      if (activeStatsIso3 !== country.iso3 || gameStarted) return;
      activeStatsState = { status: 'error' };
      panel.innerHTML = countryPanel(country.name, country.iso3, 'Elige este país para iniciar la partida y después podrás seleccionar sus provincias.', true, undefined, false, activeStatsState);
    });
  },
  onAdminStatus(country, status, regionCount, errorMessage) {
    if (country.name !== selectedCountryName) return;
    const message = status === 'loading'
      ? '<span class="loading-inline">Cargando divisiones del país…</span>'
      : status === 'error'
        ? `<span class="admin-error">No se pudieron cargar las divisiones. Detalle: ${escapeHtml(errorMessage ?? 'error desconocido')}</span>`
        : `Mapa regional listo. Haz clic en las provincias para seleccionarlas. 0 de ${regionCount} seleccionadas.`;
    panel.innerHTML = regionPanel(country.name, undefined, message, gameStarted);
  },
  onRegionSelectionChange(country, selectedCount, totalCount, selectedRegionName) {
    if (country.name !== selectedCountryName) return;
    const message = selectedCount === 0
      ? `Haz clic en las provincias para seleccionarlas. 0 de ${totalCount} seleccionadas.`
      : `${selectedRegionName ?? 'Provincia'} seleccionada.`;
    panel.innerHTML = regionPanel(country.name, selectedRegionName, message, gameStarted);
  },
  onDeselect() {
    selectedCountryName = '';
    activeStatsIso3 = '';
    gameStarted = false;
    if (countryPicker) countryPicker.value = '';
    if (countryPicker) countryPicker.disabled = false;
    closeCountryOptions();
    panel.innerHTML = `
      <div class="empty-state"><div class="globe-icon">◎</div><p class="eyebrow">ELIGE TU PRIMER TERRITORIO</p><h2>¿A dónde<br/>vamos primero?</h2><p class="empty-copy">Haz clic en cualquier país del mapa para ver sus divisiones internas.</p></div>`;
  },
}).catch((error) => {
  console.error('No se pudo iniciar el mapa:', error);
  root.innerHTML = '<div class="loading">No se pudo preparar el mapa. Intenta recargar la página.</div>';
});

panel.addEventListener('click', (event) => {
  const target = (event.target as HTMLElement).closest<HTMLButtonElement>('#start-country, #new-game');
  if (target?.id === 'start-country') startSelectedCountry?.();
  if (target?.id === 'new-game') startNewGame?.();
});

mapViewPicker?.addEventListener('change', () => {
  setMapView?.(mapViewPicker.value as 'orographic' | 'regional' | 'global');
});

countryPicker?.addEventListener('focus', () => renderCountryOptions(countryPicker.value));
countryPicker?.addEventListener('input', () => renderCountryOptions(countryPicker.value));
countryPicker?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeCountryOptions();
  if (event.key === 'ArrowDown' && countryOptions && !countryOptions.hidden) {
    event.preventDefault();
    countryOptions.querySelector<HTMLButtonElement>('.country-option')?.focus();
  }
});
countryOptions?.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-iso3]');
  if (!button) return;
  selectCountryByIso3?.(button.dataset.iso3 ?? '');
});
document.addEventListener('pointerdown', (event) => {
  if (!(event.target instanceof Node) || (!countryPicker?.contains(event.target) && !countryOptions?.contains(event.target))) closeCountryOptions();
});

document.querySelector<HTMLButtonElement>('#reset-view')?.addEventListener('click', () => {
  window.dispatchEvent(new CustomEvent('atlas:reset-view'));
});

function renderCountryOptions(query: string): void {
  if (!countryOptions || !countryPicker) return;
  const normalizedQuery = normalizeSearch(query);
  const results = availableCountries.filter((country) => normalizeSearch(country.name).includes(normalizedQuery)).slice(0, 100);
  countryOptions.replaceChildren(...results.map((country) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'country-option';
    option.setAttribute('role', 'option');
    option.dataset.iso3 = country.iso3;
    const flag = document.createElement('img');
    flag.className = 'country-flag';
    flag.src = flagPath(country.iso3);
    flag.alt = '';
    const name = document.createElement('span');
    name.textContent = country.name;
    option.append(flag, name);
    option.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        (option.nextElementSibling as HTMLButtonElement | null)?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (option.previousElementSibling) (option.previousElementSibling as HTMLButtonElement).focus();
        else countryPicker.focus();
      }
    });
    return option;
  }));
  countryOptions.hidden = false;
  countryPicker.setAttribute('aria-expanded', 'true');
}

function closeCountryOptions(): void {
  if (countryOptions) countryOptions.hidden = true;
  countryPicker?.setAttribute('aria-expanded', 'false');
}

function normalizeSearch(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
}

function flagPath(iso3: string): string {
  if (iso3 === 'ATA') return '/flags/aq.svg';
  if (iso3 === 'GZA') return '/flags/ps.svg';
  const alpha2 = iso3 === 'KOS' ? 'xk' : countries.alpha3ToAlpha2(iso3)?.toLowerCase();
  return `/flags/${alpha2 && /^[a-z]{2}$/.test(alpha2) ? alpha2 : 'xx'}.svg`;
}

async function loadCountryStats(iso3: string): Promise<CountryStats> {
  let request = statsCache.get(iso3);
  if (!request) {
    request = (async () => {
      const worldBankCode = iso3 === 'KOS' ? 'XKX' : iso3 === 'GZA' ? 'PSE' : iso3;
      const getMetric = (countryCode: string, indicatorCode: string): Promise<Metric | undefined> => fetchWorldBankMetric(countryCode, indicatorCode);
      usMilitaryBaseline ??= getMetric('USA', 'MS.MIL.XPND.CD');
      const alpha2 = iso3 === 'KOS' ? 'XK' : iso3 === 'GZA' ? 'PS' : countries.alpha3ToAlpha2(iso3);
      const [populationFallback, gdpFallback, cpiInflation, gdpDeflatorInflation, publicExpenseShare, publicRevenueShare, fiscalBalanceShare, militarySpend, militaryBaseline, factbook, debtClock, realDebt, democracyIndex] = await Promise.all([
        getMetric(worldBankCode, 'SP.POP.TOTL'),
        getMetric(worldBankCode, 'NY.GDP.MKTP.CD'),
        getMetric(worldBankCode, 'FP.CPI.TOTL.ZG'),
        getMetric(worldBankCode, 'NY.GDP.DEFL.KD.ZG'),
        getMetric(worldBankCode, 'GC.XPN.TOTL.GD.ZS'),
        getMetric(worldBankCode, 'GC.REV.XGRT.GD.ZS'),
        getMetric(worldBankCode, 'GC.NLD.TOTL.GD.ZS'),
        getMetric(worldBankCode, 'MS.MIL.XPND.CD'),
        usMilitaryBaseline,
        fetchWorldFactbookProfile(iso3),
        alpha2 ? fetchGlobalDebt(alpha2) : Promise.resolve(undefined),
        iso3 === 'KOR' ? fetchWorldRealDebt() : Promise.resolve(undefined),
        fetchVdemScore(iso3),
      ]);
      const refreshedAt = factbook?.dataUpdatedAt;
      const numeric = (value: number | string | null | undefined): Metric | undefined => {
        const parsed = typeof value === 'string' ? Number(value) : value;
        return typeof parsed === 'number' && Number.isFinite(parsed) ? { value: parsed, refreshedAt } : undefined;
      };
      const factbookPopulation = numeric(factbook?.population);
      const factbookGdp = numeric(factbook?.gdp);
      if (factbookGdp) factbookGdp.value *= 1e9;
      const factbookDebtRatio = numeric(factbook?.publicDebt);
      const factbookInflation = numeric(factbook?.inflation);
      const factbookArea = numeric(factbook?.area) ?? readFactbookArea(factbook?.geography) ?? (iso3 === 'CHN' ? { value: 9706961, refreshedAt } : undefined);
      const inflation = factbookInflation ?? cpiInflation ?? gdpDeflatorInflation;
      const realGdpGrowth = numeric(factbook?.gdpGrowth)?.value;
      const nominalGrowthRate = estimateNominalGrowth(realGdpGrowth, inflation?.value);
      const weeklyInflation = inflation && inflation.value > -100
        ? (Math.pow(1 + inflation.value / 100, 1 / 52) - 1) * 100
        : undefined;
      const factbookMilitaryRatio = latestMilitaryExpenditureRatio(factbook?.military);
      const factbookMilitarySpend = factbookMilitaryRatio && factbookGdp
        ? { value: factbookGdp.value * factbookMilitaryRatio / 100, refreshedAt }
        : undefined;
      const factbookGovernmentType = readGovernmentType(factbook?.government);
      const factbookBudget = readFactbookBudget(factbook?.economy);
      const currency = await fetchCountryCurrency(iso3, factbook?.economy, realDebt?.exchangeRate);
      const realDebtConversion = realDebt?.exchangeRate && realDebt.exchangeRate > 0 ? realDebt.exchangeRate : undefined;
      const realDebtUsd = realDebt && realDebtConversion ? realDebt.values.nationalDebt / realDebtConversion : undefined;
      const realDebtRevenue = realDebt?.values.governmentRevenue !== undefined && realDebtConversion
        ? realDebt.values.governmentRevenue / realDebtConversion
        : undefined;
      const realDebtSpending = realDebt?.values.governmentSpending !== undefined && realDebtConversion
        ? realDebt.values.governmentSpending / realDebtConversion
        : undefined;
      const annualRevenue = realDebtRevenue
        ?? projectAnnualValue(factbookBudget?.revenue, nominalGrowthRate)
        ?? (factbookGdp && publicRevenueShare ? projectAnnualValue(factbookGdp.value * publicRevenueShare.value / 100, nominalGrowthRate, publicRevenueShare.year) : undefined);
      const annualSpending = realDebtSpending
        ?? projectAnnualValue(factbookBudget?.spending, nominalGrowthRate)
        ?? (factbookGdp && publicExpenseShare ? projectAnnualValue(factbookGdp.value * publicExpenseShare.value / 100, nominalGrowthRate, publicExpenseShare.year) : undefined);
      const fiscalBalanceAnnual = realDebt?.values.derived.fiscalBalance !== undefined && realDebtConversion
        ? realDebt.values.derived.fiscalBalance / realDebtConversion
        : fiscalBalanceShare && factbookGdp
          ? projectAnnualValue(factbookGdp.value * fiscalBalanceShare.value / 100, nominalGrowthRate, fiscalBalanceShare.year)
          : annualRevenue !== undefined && annualSpending !== undefined ? annualRevenue - annualSpending : undefined;
      const netInterestAnnual = debtClock?.fiscal?.netInterestUsd !== undefined && debtClock.fiscal.netInterestUsd !== null
        ? projectAnnualValue(debtClock.fiscal.netInterestUsd, nominalGrowthRate, String(debtClock.fiscal.year))
        : undefined;
      const policyRatePct = realDebt?.values.interestRate !== undefined ? realDebt.values.interestRate * 100 : undefined;
      const budget = deriveWeeklyBudget(
        annualRevenue,
        annualSpending,
        fiscalBalanceAnnual,
        netInterestAnnual,
        policyRatePct,
        debtClock?.fiscal?.netInterestPctOfGdp ?? undefined,
      );
      const projectedGlobalDebt = projectGlobalDebt(debtClock);
      const stats = {
        population: factbookPopulation ?? populationFallback,
        gdp: factbookGdp ?? gdpFallback,
        debt: realDebtUsd !== undefined ? { value: realDebtUsd } : projectedGlobalDebt !== undefined ? { value: projectedGlobalDebt } : undefined,
        debtRatio: realDebt?.values.derived.debtToGdpRatio !== undefined
          ? { value: realDebt.values.derived.debtToGdpRatio * 100 }
          : debtClock?.gdpPct !== undefined ? { value: debtClock.gdpPct, year: debtClock.baseDate } : factbookDebtRatio,
        inflation,
        weeklyInflation,
        area: factbookArea,
        democracyIndex,
        budget,
        currency,
        militarySpend: militarySpend ?? factbookMilitarySpend,
        militaryBaseline: militaryBaseline ?? (iso3 === 'USA' ? factbookMilitarySpend : undefined),
        governmentType: factbookGovernmentType,
      };
      if (![stats.population, stats.gdp, stats.debt, stats.debtRatio, stats.inflation, stats.area, stats.democracyIndex, stats.militarySpend, stats.governmentType, stats.budget].some(Boolean)) throw new Error('No hay indicadores disponibles para este territorio.');
      return stats;
    })();
    statsCache.set(iso3, request);
    void request.catch(() => statsCache.delete(iso3));
  }
  return request;
}

function deriveWeeklyBudget(annualRevenue?: number, annualSpending?: number, fiscalBalanceAnnual?: number, annualInterest?: number, policyRatePct?: number, netInterestPctOfGdp?: number | null): BudgetStats | undefined {
  if (annualRevenue === undefined && annualSpending === undefined && fiscalBalanceAnnual === undefined && annualInterest === undefined) return undefined;
  const perTurnRevenue = annualRevenue !== undefined ? annualRevenue / 52 : undefined;
  const perTurnSpending = annualSpending !== undefined ? annualSpending / 52 : undefined;
  return {
    annualRevenue,
    annualSpending,
    perTurnRevenue,
    perTurnSpending,
    perTurnBalance: fiscalBalanceAnnual !== undefined
      ? fiscalBalanceAnnual / 52
      : perTurnRevenue !== undefined && perTurnSpending !== undefined ? perTurnRevenue - perTurnSpending : undefined,
    perTurnInterest: annualInterest !== undefined ? annualInterest / 52 : undefined,
    policyRatePct,
    netInterestPctOfGdp: netInterestPctOfGdp ?? undefined,
  };
}

function readFactbookArea(geography: WorldFactbookProfile['geography']): Metric | undefined {
  const area = geography?.Area;
  if (!area || typeof area !== 'object') return undefined;
  const record = area as Record<string, unknown>;
  const total = record.total ?? record['total '];
  const text = total && typeof total === 'object' && 'text' in total ? String((total as { text?: unknown }).text ?? '') : '';
  const value = Number(text.replace(/,/g, '').match(/[\d.]+/)?.[0]);
  return Number.isFinite(value) && value > 0 ? { value } : undefined;
}

function readFactbookBudget(economy: WorldFactbookProfile['economy']): { revenue?: Metric; spending?: Metric } | undefined {
  const rawBudget = economy?.Budget;
  if (!rawBudget || typeof rawBudget !== 'object') return undefined;
  const budget = rawBudget as Record<string, unknown>;
  const parseAmount = (raw: unknown): Metric | undefined => {
    const text = typeof raw === 'string' ? raw : raw && typeof raw === 'object' && 'text' in raw ? String((raw as { text?: unknown }).text ?? '') : '';
    const amountMatch = text.match(/\$?\s*([\d,.]+)\s*(trillion|billion|million|thousand)?/i);
    if (!amountMatch) return undefined;
    const amount = Number(amountMatch[1].replace(/,/g, ''));
    if (!Number.isFinite(amount)) return undefined;
    const unit = (amountMatch[2] ?? '').toLowerCase();
    const multiplier = unit === 'trillion' ? 1e12 : unit === 'billion' ? 1e9 : unit === 'million' ? 1e6 : unit === 'thousand' ? 1e3 : 1;
    const year = text.match(/\b(19|20)\d{2}\b/)?.[0];
    return { value: amount * multiplier, year };
  };
  const revenue = parseAmount(budget.revenues);
  const spending = parseAmount(budget.expenditures);
  return revenue || spending ? { revenue, spending } : undefined;
}

function readFactbookCurrency(iso3: string, economy: WorldFactbookProfile['economy']): { code: string; name: string } | undefined {
  const exchangeSection = economy?.['Exchange rates'];
  if (!exchangeSection || typeof exchangeSection !== 'object') return undefined;
  const rawCurrency = (exchangeSection as Record<string, unknown>).Currency;
  const description = rawCurrency && typeof rawCurrency === 'object' && 'text' in rawCurrency
    ? String((rawCurrency as { text?: unknown }).text ?? '')
    : typeof rawCurrency === 'string' ? rawCurrency : '';
  const codeMatch = description.match(/\(([A-Z]{3})\)/);
  if (!codeMatch) return undefined;
  const aliases: Record<string, string> = { RMB: 'CNY' };
  const code = aliases[codeMatch[1]] ?? codeMatch[1];
  const rawName = description.split('(')[0].replace(/\s+per US dollar.*$/i, '').trim();
  let name = rawName || code;
  try { name = new Intl.DisplayNames(['es'], { type: 'currency' }).of(code) ?? name; } catch { /* Browser lacks localized currency names. */ }
  return { code, name };
}

async function fetchCountryCurrency(iso3: string, economy: WorldFactbookProfile['economy'], fallbackUsdKrw?: number): Promise<CurrencyStats | undefined> {
  const local = readFactbookCurrency(iso3, economy);
  if (!local) return undefined;
  if (local.code === 'USD') return { ...local, usdRate: 1, rateDate: new Date().toISOString().slice(0, 10) };
  const rates = await fetchUsdRates();
  const quote = rates?.get(local.code);
  if (quote) return { ...local, usdRate: quote.rate, rateDate: quote.date };
  if (iso3 === 'KOR' && fallbackUsdKrw) return { ...local, usdRate: fallbackUsdKrw, rateDate: new Date().toISOString().slice(0, 10) };
  return local;
}

async function fetchUsdRates(): Promise<Map<string, { rate: number; date: string }> | undefined> {
  if (!fxRatesRequest || Date.now() - fxRatesLoadedAt > 60 * 60 * 1000) {
    const request = (async () => {
      const response = await fetch('https://api.frankfurter.dev/v2/rates?base=USD', { signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error(`Frankfurter respondió ${response.status}`);
      const rows = await response.json() as Array<{ quote: string; rate: number; date: string }>;
      return new Map(rows.filter((row) => /^[A-Z]{3}$/.test(row.quote) && Number.isFinite(row.rate)).map((row) => [row.quote, { rate: row.rate, date: row.date }]));
    })();
    fxRatesLoadedAt = Date.now();
    fxRatesRequest = request.catch((error) => { fxRatesRequest = undefined; throw error; });
  }
  try { return await fxRatesRequest; }
  catch (error) { console.warn('No se pudieron cargar las cotizaciones de divisas:', error); return undefined; }
}

function estimateNominalGrowth(realGrowthPct?: number, inflationPct?: number): number | undefined {
  const real = realGrowthPct !== undefined && realGrowthPct > -100 ? realGrowthPct / 100 : undefined;
  const inflation = inflationPct !== undefined && inflationPct > -100 ? inflationPct / 100 : undefined;
  if (real === undefined && inflation === undefined) return undefined;
  if (real === undefined) return inflation;
  if (inflation === undefined) return real;
  return (1 + real) * (1 + inflation) - 1;
}

function compoundFromBase(value: number, annualGrowthRate: number, baseTimestamp: number, now = Date.now()): number | undefined {
  if (!Number.isFinite(value) || !Number.isFinite(annualGrowthRate) || annualGrowthRate <= -1 || !Number.isFinite(baseTimestamp)) return undefined;
  const elapsedYears = (now - baseTimestamp) / (SECONDS_PER_YEAR * 1000);
  return elapsedYears < 0 ? value : value * Math.pow(1 + annualGrowthRate, elapsedYears);
}

function projectAnnualValue(value: number | Metric | undefined, annualGrowthRate?: number, year?: string): number | undefined {
  if (value === undefined) return undefined;
  const amount = typeof value === 'number' ? value : value.value;
  const baseYear = Number(year ?? (typeof value === 'number' ? undefined : value.year));
  if (annualGrowthRate === undefined || !Number.isInteger(baseYear) || baseYear < 1900) return amount;
  const baseDate = Date.UTC(baseYear, 11, 31);
  return compoundFromBase(amount, annualGrowthRate, baseDate) ?? amount;
}

function projectGlobalDebt(debt: GlobalDebtRecord | undefined): number | undefined {
  if (!debt) return undefined;
  const base = debt.baseDebt;
  const rate = debt.rate;
  const baseTime = debt.baseDate ? Date.parse(`${debt.baseDate}T00:00:00Z`) : NaN;
  if (base !== undefined && base > 0 && rate !== undefined && Number.isFinite(baseTime)) {
    const annualGrowth = rate * SECONDS_PER_YEAR / base;
    const projected = compoundFromBase(base, annualGrowth, baseTime);
    if (projected !== undefined) return projected;
  }
  return debt.debt;
}

type GlobalDebtRecord = { debt?: number; baseDebt?: number; rate?: number; gdpPct?: number; baseDate?: string; fiscal?: GlobalDebtFiscalRecord };
type GlobalDebtFiscalRecord = { year?: number; netInterestPctOfGdp?: number | null; netInterestUsd?: number | null; netInterestPctOfRevenue?: number | null };
type WorldRealDebtRecord = {
  exchangeRate: number;
  values: {
    nationalDebt: number;
    governmentSpending: number;
    governmentRevenue: number;
    interestRate: number;
    derived: { fiscalBalance: number; debtToGdpRatio: number };
  };
};
async function fetchGlobalDebt(alpha2: string): Promise<GlobalDebtRecord | undefined> {
  try {
    const response = await fetch(`https://www.global-debt-clock.com/api/debt?c=${encodeURIComponent(alpha2.toLowerCase())}`, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return undefined;
    return await response.json() as GlobalDebtRecord;
  } catch (error) {
    console.warn('Global Debt Clock no respondió para este territorio:', error);
    return undefined;
  }
}

async function fetchWorldRealDebt(): Promise<WorldRealDebtRecord | undefined> {
  try {
    const response = await fetch('https://worldrealdebt.com/api/live.json', { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return undefined;
    return await response.json() as WorldRealDebtRecord;
  } catch (error) {
    console.warn('WorldRealDebt no respondió para Corea del Sur:', error);
    return undefined;
  }
}

async function fetchVdemScore(iso3: string): Promise<Metric | undefined> {
  try {
    vdemIndex ??= (async () => {
      const response = await fetch('https://ourworldindata.org/grapher/liberal-democracy-index.csv?time=2025&csvType=full&useColumnShortNames=false', { signal: AbortSignal.timeout(12000) });
      if (!response.ok) throw new Error(`V-Dem data responded ${response.status}`);
      const csv = await response.text();
      const rows = csv.split(/\r?\n/).filter(Boolean).slice(1);
      const scores = new Map<string, Metric>();
      for (const row of rows) {
        const columns = parseCsvRow(row);
        if (columns.length < 4) continue;
        const [name, code, year, rawScore] = columns;
        const score = Number(rawScore);
        if (!Number.isFinite(score)) continue;
        const value = { value: score * 100, year };
        if (code) scores.set(code.toUpperCase(), value);
        scores.set(`name:${normalizeSearch(name)}`, value);
      }
      return scores;
    })();
    const scores = await vdemIndex;
    const byCode = scores.get(iso3);
    if (byCode) return byCode;
    const alpha2 = countries.alpha3ToAlpha2(iso3);
    const name = worldFactbookNameAliases[iso3] ?? (alpha2 ? countries.getName(alpha2, 'en') : undefined);
    return name ? scores.get(`name:${normalizeSearch(name)}`) : undefined;
  } catch (error) {
    console.warn('No se pudieron cargar los datos V-Dem:', error);
    return undefined;
  }
}

function parseCsvRow(row: string): string[] {
  const columns: string[] = [];
  let value = '';
  let quoted = false;
  for (let index = 0; index < row.length; index += 1) {
    const character = row[index];
    if (character === '"' && row[index + 1] === '"' && quoted) { value += '"'; index += 1; }
    else if (character === '"') quoted = !quoted;
    else if (character === ',' && !quoted) { columns.push(value); value = ''; }
    else value += character;
  }
  columns.push(value);
  return columns;
}

async function fetchWorldBankMetric(countryCode: string, indicatorCode: string): Promise<Metric | undefined> {
  const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicatorCode}?format=json&mrnev=1&per_page=5`;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!response.ok) {
        if (response.status >= 500 && attempt < 2) {
          await new Promise((resolve) => window.setTimeout(resolve, 450 * (attempt + 1)));
          continue;
        }
        return undefined;
      }
      const payload = await response.json() as [unknown, Array<{ date?: string; value?: number | null }> | null];
      const row = payload[1]?.find((item) => item.value !== null && item.value !== undefined);
      return row ? { value: Number(row.value), year: row.date ?? '' } : undefined;
    } catch {
      if (attempt === 2) return undefined;
      await new Promise((resolve) => window.setTimeout(resolve, 450 * (attempt + 1)));
    }
  }
  return undefined;
}

async function fetchWorldFactbookProfile(iso3: string): Promise<WorldFactbookProfile | undefined> {
  try {
    let slug: string | undefined = worldFactbookSlugAliases[iso3];
    if (!slug) {
      worldFactbookIndex ??= (async () => {
        const response = await fetch('https://worldfactbook.io/api/v1/countries/', { signal: AbortSignal.timeout(8000) });
        if (!response.ok) throw new Error(`WorldFactbook.io responded ${response.status}`);
        return await response.json() as WorldFactbookSummary[];
      })().catch((error) => { worldFactbookIndex = undefined; throw error; });
      const countriesList = await worldFactbookIndex;
      const alpha2 = countries.alpha3ToAlpha2(iso3);
      const englishName = worldFactbookNameAliases[iso3] ?? (alpha2 ? countries.getName(alpha2, 'en') : undefined);
      if (!englishName) return undefined;
      slug = countriesList.find((item) => normalizeSearch(item.name) === normalizeSearch(englishName))?.slug;
    }
    if (!slug) return undefined;
    const response = await fetch(`https://worldfactbook.io/api/v1/countries/${encodeURIComponent(slug)}/`, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return undefined;
    return await response.json() as WorldFactbookProfile;
  } catch (error) {
    console.warn('WorldFactbook.io no pudo complementar la ficha del país:', error);
    return undefined;
  }
}

function readGovernmentType(government: WorldFactbookProfile['government']): string | undefined {
  const value = government?.['Government type']?.text?.trim();
  return value || undefined;
}

function latestMilitaryExpenditureRatio(military: WorldFactbookProfile['military']): number | undefined {
  const section = military?.['Military expenditures'];
  if (!section || typeof section !== 'object') return undefined;
  const entries = Object.entries(section).sort(([a], [b]) => b.localeCompare(a));
  for (const [, raw] of entries) {
    const text = typeof raw === 'object' && raw && 'text' in raw ? raw.text : undefined;
    const match = text?.match(/([\d.]+)\s*%\s*of GDP/i);
    if (match) return Number(match[1]);
  }
  return undefined;
}

function countryPanel(countryName: string, iso3: string, message: string, showStartButton = false, selectedRegionName?: string, showNewGameButton = false, statsState: StatsState = { status: 'loading' }): string {
  const heading = selectedRegionName ?? countryName;
  const stats = statsState.stats;
  const metric = (value: Metric | undefined, format: (number: number) => string) => {
    if (!value) return 'Sin dato';
    return format(value.value);
  };
  const compact = (value: number) => new Intl.NumberFormat('es-BO', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
  const militaryScore = stats?.militarySpend?.value !== undefined && stats.militaryBaseline?.value
    ? (iso3 === 'USA' ? 100 : iso3 === 'CRI' ? 1 : Math.max(1, Math.min(100, Math.round(1 + 99 * Math.sqrt(stats.militarySpend.value / stats.militaryBaseline.value)))) )
    : undefined;
  const governmentType = localizeGovernmentType(stats?.governmentType) ?? governmentTypeForCountry(iso3);
  const currencyMarkup = stats?.currency ? `<div class="stat-item"><span>MONEDA LOCAL</span><b>${escapeHtml(stats.currency.name)} · ${escapeHtml(stats.currency.code)}</b>${stats.currency.usdRate !== undefined ? `<small>1 USD = ${new Intl.NumberFormat('es-BO', { maximumSignificantDigits: 6 }).format(stats.currency.usdRate)} ${escapeHtml(stats.currency.code)} · referencia ${escapeHtml(stats.currency.rateDate ?? '')}</small>` : '<small>Cotización no disponible</small>'}</div>` : '';
  const indicatorMarkup = statsState.status === 'loading'
    ? '<p class="stats-state">Cargando indicadores económicos y demográficos…</p>'
    : statsState.status === 'error'
      ? '<p class="stats-state">Los indicadores numéricos no están disponibles ahora. Vuelve a seleccionar el país para reintentar.</p>'
      : `
          <div class="stat-item"><span>POBLACIÓN</span><b>${metric(stats?.population, compact)}</b></div>
          <div class="stat-item"><span>PIB · USD</span><b>${metric(stats?.gdp, compact)}</b></div>
          <div class="stat-item"><span>PIB POR PERSONA</span><b>${stats?.gdp && stats?.population?.value ? `${compact(stats.gdp.value / stats.population.value)} USD` : 'Sin dato'}</b></div>
          <div class="stat-item"><span>DEUDA PÚBLICA · USD</span><b>${metric(stats?.debt, compact)}</b></div>
          <div class="stat-item"><span>DEUDA PÚBLICA · % PIB</span><b>${metric(stats?.debtRatio, (value) => `${value.toFixed(1)}%`)}</b></div>
          <div class="stat-item"><span>INFLACIÓN · ANUAL</span><b>${metric(stats?.inflation, (value) => `${value.toFixed(1)}%`)}</b></div>
          <div class="stat-item"><span>INFLACIÓN · TURNO SEMANAL</span><b>${stats?.weeklyInflation !== undefined ? `${stats.weeklyInflation.toFixed(3)}%` : 'Sin dato'}</b></div>
          <div class="stat-item"><span>SUPERFICIE</span><b>${metric(stats?.area, (value) => `${compact(value)} km²`)}</b></div>
          ${currencyMarkup}
          <div class="stat-item"><span>ÍNDICE DE DEMOCRACIA</span><b>${metric(stats?.democracyIndex, (value) => `${value.toFixed(0)} / 100`)}</b></div>
          <div class="stat-item"><span>ÍNDICE MILITAR · 1–100</span><b>${militaryScore ?? 'Sin dato'}</b></div>
        `;
  const budgetAmount = (value: number | undefined) => value === undefined
    ? 'Sin dato'
    : `${value < 0 ? '−' : ''}${compact(Math.abs(value))} USD`;
  const budgetMarkup = stats?.budget ? `<section class="budget-section" aria-label="Presupuesto estimado por turno">
      <h3 class="budget-heading">PRESUPUESTO · TURNO DE 1 SEMANA</h3>
      <div class="budget-grid">
        <div class="stat-item"><span>INGRESOS ESTIMADOS / TURNO</span><b>${budgetAmount(stats.budget.perTurnRevenue)}</b></div>
        <div class="stat-item"><span>GASTOS ESTIMADOS / TURNO</span><b>${budgetAmount(stats.budget.perTurnSpending)}</b></div>
        <div class="stat-item"><span>BALANCE / TURNO</span><b>${budgetAmount(stats.budget.perTurnBalance)}</b></div>
        <div class="stat-item"><span>INTERESES DE DEUDA / TURNO</span><b>${budgetAmount(stats.budget.perTurnInterest)}</b></div>
        ${stats.budget.policyRatePct !== undefined
          ? `<div class="stat-item"><span>TASA DE POLÍTICA MONETARIA</span><b>${stats.budget.policyRatePct.toFixed(2)}%</b></div>`
          : ''}
        ${stats.budget.netInterestPctOfGdp !== undefined
          ? `<div class="stat-item"><span>INTERESES NETOS · % PIB</span><b>${stats.budget.netInterestPctOfGdp.toFixed(2)}%</b></div>`
          : ''}
      </div>
      <p class="budget-method">Proyección compuesta desde la última base anual disponible; g nominal aproximado y 52 turnos por año.</p>
    </section>` : '';
  const statsMarkup = `<div class="country-stats">
      <div class="stat-item"><span>TIPO DE GOBIERNO</span><b>${escapeHtml(governmentType ?? 'Sin clasificación')}</b></div>
      ${indicatorMarkup}
    </div>${budgetMarkup}`;
  return `
    <div class="country-card">
      <span class="eyebrow">${selectedRegionName ? 'PROVINCIA SELECCIONADA' : 'TERRITORIO SELECCIONADO'}</span>
      <div class="country-symbol" role="img" aria-label="Bandera de ${escapeHtml(countryName)}"><img src="${flagPath(iso3)}" alt="" /></div>
      <h2>${escapeHtml(heading)}</h2>
      <div class="country-rule"></div>
      <div class="country-detail"><span>${selectedRegionName ? 'PAÍS' : 'RESUMEN DEL PAÍS'}</span><b>${escapeHtml(countryName)}</b></div>
      ${statsMarkup}
      <p class="country-note">${message}</p>
      ${showStartButton ? '<button id="start-country" class="select-country-button" type="button">Seleccionar país</button>' : ''}
      ${showNewGameButton ? '<button id="new-game" class="new-game-button" type="button">Iniciar otra partida</button>' : ''}
    </div>`;
}

function regionPanel(countryName: string, regionName: string | undefined, message: string, showNewGameButton: boolean): string {
  return `<div class="country-card region-card">
    <span class="eyebrow">${regionName ? 'DIVISIÓN SELECCIONADA' : 'MAPA REGIONAL'}</span>
    <div class="region-symbol" aria-hidden="true">▦</div>
    <h2>${escapeHtml(regionName ?? 'Selecciona una región')}</h2>
    <div class="country-rule"></div>
    <div class="country-detail"><span>PAÍS</span><b>${escapeHtml(countryName)}</b></div>
    <p class="country-note">${message}</p>
    ${showNewGameButton ? '<button id="new-game" class="new-game-button" type="button">Iniciar otra partida</button>' : ''}
  </div>`;
}

function governmentTypeForCountry(iso3: string): string | null {
  if (governmentTypeOverrides[iso3]) return governmentTypeOverrides[iso3];
  const alias = governmentNameAliases[iso3];
  if (alias) return governmentByCountryName.get(normalizeSearch(alias)) ?? null;
  const alpha2 = countries.alpha3ToAlpha2(iso3);
  const englishName = alpha2 ? countries.getName(alpha2, 'en') : undefined;
  return englishName ? governmentByCountryName.get(normalizeSearch(englishName)) ?? null : null;
}

function localizeGovernmentType(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const normalized = normalizeSearch(value);
  const translations: Record<string, string> = {
    'federal parliamentary republic': 'República parlamentaria federal',
    'parliamentary republic': 'República parlamentaria',
    'presidential republic': 'República presidencialista',
    'semi-presidential republic': 'República semipresidencial',
    'federal republic': 'República federal',
    'constitutional monarchy': 'Monarquía constitucional',
    'parliamentary constitutional monarchy': 'Monarquía parlamentaria constitucional',
    'absolute monarchy': 'Monarquía absoluta',
    'islamic republic': 'República islámica',
    'one-party state': 'Estado de partido único',
    'communist state': 'Estado comunista',
    'military junta': 'Junta militar',
    'theocracy': 'Teocracia',
    'republic': 'República',
  };
  return translations[normalized] ?? value;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char);
}
