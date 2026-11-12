import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { topology as createTopology } from 'topojson-server';
import { presimplify, simplify } from 'topojson-simplify';
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import es from 'i18n-iso-countries/langs/es.json';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import type { GeometryCollection, Topology } from 'topojson-specification';
import territoryOverrides from '../../data/mapTerritoryOverrides.json';

countries.registerLocale(en);
countries.registerLocale(es);

type CountryProperties = { name?: string; NAME?: string; name_long?: string; ISO_A3?: string };
type CountryFeature = Feature<Geometry, CountryProperties>;
type AdminProperties = { shapeName?: string; NAME_1?: string; name?: string; shapeISO?: string; shapeID?: string };
type PhysicalProperties = { kind?: 'river' | 'lake' | 'landform' | 'mountain'; name?: string };
type Country = { id: string; name: string; iso3: string };
type MapView = 'orographic' | 'regional' | 'global';
type AdminFeature = Feature<Geometry, AdminProperties>;
type AdminCollection = FeatureCollection<Geometry, AdminProperties>;
type MapOptions = {
  onSelect: (country: Country) => void;
  onCountriesReady?: (countries: Country[], selectCountry: (iso3: string) => void) => void;
  onMapReady?: (controls: { startCountry: () => void; startNewGame: () => void; setView: (view: MapView) => void }) => void;
  onGameStarted?: (country: Country) => void;
  onViewModeChange?: (view: MapView, regionalAvailable: boolean) => void;
  onRegionSelectionChange?: (country: Country, selectedCount: number, totalCount: number, selectedRegionName?: string) => void;
  onAdminStatus?: (country: Country, status: 'loading' | 'ready' | 'error', regionCount?: number, errorMessage?: string) => void;
  onDeselect?: () => void;
};
type AdminMetadata = { gjDownloadURL?: string; simplifiedGeometryGeoJSON?: string };

const SVG_WIDTH = 1200;
const SVG_HEIGHT = 620;
const WORLD_WIDTH = 24;
const WORLD_HEIGHT = SVG_HEIGHT / (SVG_WIDTH / WORLD_WIDTH);
const BASE_DEPTH = 0.1;
const ADMIN_LAYER_LIFT = 0.72;
const ADMIN_CACHE = new Map<string, Promise<AdminCollection>>();
export async function startWorldMap(container: HTMLElement, options: MapOptions): Promise<void> {
  const response = await fetch('/maps/country-outlines.geojson');
  if (!response.ok) throw new Error(`No se pudieron leer los contornos detallados (${response.status}).`);
  const countryOutlines = await response.json() as FeatureCollection<Geometry, CountryProperties>;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.replaceChildren(renderer.domElement);
  renderer.domElement.className = 'map-canvas';
  renderer.domElement.setAttribute('aria-label', 'Mapa mundial: selecciona un país para ver sus divisiones');

  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 1.15));
  const keyLight = new THREE.DirectionalLight(0xffe2bd, 2.1);
  keyLight.position.set(-9, -8, 18);
  scene.add(keyLight);
  const camera = new THREE.OrthographicCamera(-12, 12, WORLD_HEIGHT / 2, -WORLD_HEIGHT / 2, 0.1, 100);
  const defaultCameraPosition = new THREE.Vector3(0, -11, 30);
  camera.position.copy(defaultCameraPosition);
  camera.lookAt(0, 0, 0);

  const map = new THREE.Group();
  map.scale.set(WORLD_WIDTH / SVG_WIDTH, -WORLD_WIDTH / SVG_WIDTH, 1);
  map.position.set(-WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 0);
  scene.add(map);
  const ocean = new THREE.Mesh(
    new THREE.PlaneGeometry(SVG_WIDTH, SVG_HEIGHT),
    new THREE.MeshBasicMaterial({ color: 0x173a4e }),
  );
  ocean.position.set(SVG_WIDTH / 2, SVG_HEIGHT / 2, -0.08);
  map.add(ocean);
  const physicalLayer = new THREE.Group();
  physicalLayer.name = 'physical-features';
  map.add(physicalLayer);

  const collection = applyCountryOverrides(countryOutlines);
  const projection = geoNaturalEarth1().fitSize([SVG_WIDTH, SVG_HEIGHT], collection);
  const pathGenerator = geoPath(projection).digits(1);
  const loader = new SVGLoader();
  const countryMeshes: THREE.Mesh[] = [];
  const adminMeshes: THREE.Mesh[] = [];
  const adminMeshesByRegion = new Map<string, THREE.Mesh[]>();
  const adminRegionNames = new Map<string, string>();
  const selectedAdminRegions = new Set<string>();
  const countriesById = new Map<string, Country>();
  const meshesByCountry = new Map<string, THREE.Mesh[]>();
  let selectedCountryMesh: THREE.Mesh | null = null;
  let selectedCountry: Country | null = null;
  let hoveredMesh: THREE.Mesh | null = null;
  let hoveredCountryIso3: string | null = null;
  let hoveredAdminRegion: string | null = null;
  let currentMapView: MapView = 'orographic';
  let countryStarted = false;
  let totalAdminRegions = 0;
  let adminBuildId = 0;
  let activeAdminLayer: THREE.Group | null = null;
  let layerTransition: { startedAt: number; countryMeshes: THREE.Mesh[]; layer: THREE.Group; materials: THREE.Material[] } | null = null;

  const hoverMaterial = new THREE.MeshStandardMaterial({ color: 0x8bd9e2, roughness: 0.55, metalness: 0.03, side: THREE.DoubleSide });
  const adminHoverMaterial = new THREE.MeshStandardMaterial({ color: 0xd5f89a, roughness: 0.48, side: THREE.DoubleSide });
  const adminSelectMaterial = new THREE.MeshStandardMaterial({ color: 0xa8f000, roughness: 0.48, side: THREE.DoubleSide });
  const countryBorders = new THREE.LineBasicMaterial({ color: 0x101b24, transparent: true, opacity: 0.95 });
  const adminBorders = new THREE.LineBasicMaterial({ color: 0x17242c, transparent: true, opacity: 1 });
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const defaultCamera = camera.position.clone();
  const cameraFocus = new THREE.Vector3(0, 0, 0);
  let cameraTransition: { startedAt: number; fromPosition: THREE.Vector3; toPosition: THREE.Vector3; fromFocus: THREE.Vector3; toFocus: THREE.Vector3; fromZoom: number; toZoom: number } | null = null;

  void loadPhysicalFeatures();

  for (const item of collection.features as CountryFeature[]) {
    const d = pathGenerator(orientAdminFeature(item as unknown as AdminFeature));
    if (!d) continue;
    const country = countryFromFeature(item);
    if (!country.iso3) continue;
    countriesById.set(country.id, country);
    const svgPaths = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${d}"/></svg>`).paths;
    for (const svgPath of svgPaths) {
      for (const shape of SVGLoader.createShapes(svgPath)) {
        const baseMaterial = new THREE.MeshStandardMaterial({ color: countryColor(country.iso3), roughness: 0.8, side: THREE.DoubleSide });
        const mesh = makeRaisedMesh(shape, baseMaterial, BASE_DEPTH);
        mesh.userData.country = country;
        mesh.userData.baseMaterial = baseMaterial;
        mesh.userData.baseZ = 0.02;
        mesh.position.z = 0.02;
        map.add(mesh);
        countryMeshes.push(mesh);
        const countryParts = meshesByCountry.get(country.iso3) ?? [];
        countryParts.push(mesh);
        meshesByCountry.set(country.iso3, countryParts);
        addShapeLines(map, shape, countryBorders, 0.13);
      }
    }
  }

  options.onCountriesReady?.([...countriesById.values()].sort((a, b) => a.name.localeCompare(b.name, 'es')), (iso3) => {
    const country = [...countriesById.values()].find((item) => item.iso3 === iso3);
    const mesh = meshesByCountry.get(iso3)?.[0];
    if (country && mesh) selectCountry(country, mesh);
  });

  // Small territories are hard to point at at world scale. These invisible targets
  // widen only the pointer area; the country geometry and borders remain unchanged.
  for (const [iso3, longitude, latitude] of [
    ['AND', 1.57, 42.55], ['MCO', 7.42, 43.74], ['LIE', 9.55, 47.14], ['SGP', 103.82, 1.35],
    ['GBR', -5.35, 36.13], ['GBR', -58.6, -51.7],
  ] as const) {
    const country = [...countriesById.values()].find((item) => item.iso3 === iso3);
    if (!country || !meshesByCountry.has(iso3)) continue;
    const point = projection([longitude, latitude]);
    if (!point) continue;
    const geometry = new THREE.CircleGeometry(7, 20);
    const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, colorWrite: false, depthWrite: false, side: THREE.DoubleSide });
    const target = new THREE.Mesh(geometry, material);
    target.position.set(point[0], point[1], 0.14);
    target.userData.country = country;
    map.add(target);
    countryMeshes.push(target);
  }

  const setPointerFromEvent = (event: PointerEvent) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
  };

  renderer.domElement.addEventListener('pointermove', (event) => {
    setPointerFromEvent(event);
    if (countryStarted && currentMapView === 'regional') {
      if (layerTransition) {
        renderer.domElement.style.cursor = 'grab';
        return;
      }
      const hitRegion = raycaster.intersectObjects(adminMeshes, false)[0]?.object as THREE.Mesh | undefined;
      const nextRegion = hitRegion?.userData.adminRegionKey as string | undefined ?? null;
      if (nextRegion !== hoveredAdminRegion) {
        if (hoveredAdminRegion) setAdminRegionAppearance(hoveredAdminRegion);
        hoveredAdminRegion = nextRegion;
        if (hoveredAdminRegion) setAdminRegionAppearance(hoveredAdminRegion, true);
      }
      renderer.domElement.style.cursor = hitRegion ? 'pointer' : 'grab';
      return;
    }
    if (countryStarted) {
      if (hoveredCountryIso3) setCountryHover(hoveredCountryIso3, false);
      hoveredCountryIso3 = null;
      renderer.domElement.style.cursor = 'grab';
      return;
    }
    if (hoveredAdminRegion) {
      setAdminRegionAppearance(hoveredAdminRegion);
      hoveredAdminRegion = null;
    }
    const hit = raycaster.intersectObjects(countryMeshes, false)
      .map((intersection) => intersection.object as THREE.Mesh)
      .find((mesh) => (mesh.userData.country as Country).iso3 !== selectedCountry?.iso3);
    const nextIso3 = hit ? (hit.userData.country as Country).iso3 : null;
    if (nextIso3 !== hoveredCountryIso3) {
      if (hoveredCountryIso3) setCountryHover(hoveredCountryIso3, false);
      hoveredCountryIso3 = nextIso3;
      if (hoveredCountryIso3) setCountryHover(hoveredCountryIso3, true);
    }
    hoveredMesh = hit ?? null;
    renderer.domElement.style.cursor = hit ? 'pointer' : 'grab';
  });

  renderer.domElement.addEventListener('click', (event) => {
    if (renderer.domElement.dataset.dragged === 'true') return;
    setPointerFromEvent(event);
    if (countryStarted && currentMapView === 'regional') {
      if (layerTransition) finishLayerTransition();
      const regionHit = raycaster.intersectObjects(adminMeshes, false)[0]?.object as THREE.Mesh | undefined;
      const regionKey = regionHit?.userData.adminRegionKey as string | undefined;
      if (regionKey) toggleAdminRegion(regionKey);
      return;
    }
    if (countryStarted) return;
    const hit = raycaster.intersectObjects(countryMeshes, false)[0]?.object as THREE.Mesh | undefined;
    if (!hit) { if (selectedCountry) clearSelection(); return; }

    selectCountry(hit.userData.country as Country, hit);
  });

  function selectCountry(country: Country, hit: THREE.Mesh): void {
    if (countryStarted) return;
    if (hoveredCountryIso3) setCountryHover(hoveredCountryIso3, false);
    hoveredCountryIso3 = null;
    if (selectedCountry?.iso3 === country.iso3) {
      clearSelection();
      return;
    }
    clearAdminLayer();
    if (selectedCountry) setCountryAppearance(selectedCountry.iso3, false);
    countryStarted = false;
    selectedAdminRegions.clear();
    selectedCountry = country;
    selectedCountryMesh = hit;
    setCountryAppearance(country.iso3, true);
    options.onSelect(country);
    if (currentMapView === 'regional') setViewMode('orographic');
    options.onViewModeChange?.(currentMapView, false);
  }


  function setCountryHover(iso3: string, hovered: boolean): void {
    if (iso3 === selectedCountry?.iso3) return;
    for (const mesh of meshesByCountry.get(iso3) ?? []) {
      mesh.material = hovered ? hoverMaterial : mesh.userData.baseMaterial as THREE.Material;
      mesh.userData.targetLift = hovered ? 0.72 : 0;
    }
  }

  function setCountryAppearance(iso3: string, selected: boolean): void {
    for (const mesh of meshesByCountry.get(iso3) ?? []) {
      mesh.visible = true;
      mesh.material = mesh.userData.baseMaterial as THREE.Material;
      mesh.userData.targetLift = selected ? 0.82 : 0;
    }
  }

  function hideCountryModel(iso3: string): void {
    for (const mesh of meshesByCountry.get(iso3) ?? []) {
      mesh.visible = false;
      mesh.userData.targetLift = 0;
      mesh.position.z = mesh.userData.baseZ as number;
    }
  }

  function clearSelection(): void {
    clearAdminLayer();
    if (selectedCountry) setCountryAppearance(selectedCountry.iso3, false);
    countryStarted = false;
    selectedAdminRegions.clear();
    selectedCountryMesh = null;
    selectedCountry = null;
    hoveredMesh = null;
    if (hoveredCountryIso3) setCountryHover(hoveredCountryIso3, false);
    hoveredCountryIso3 = null;
    currentMapView = 'orographic';
    resetCameraView();
    physicalLayer.visible = true;
    options.onViewModeChange?.(currentMapView, false);
    options.onDeselect?.();
  }

  function clearAdminLayer(): void {
    adminBuildId += 1;
    if (layerTransition) finishLayerTransition();
    if (activeAdminLayer) map.remove(activeAdminLayer);
    activeAdminLayer = null;
    adminMeshes.length = 0;
    adminMeshesByRegion.clear();
    adminRegionNames.clear();
    hoveredAdminRegion = null;
  }

  function setAdminRegionAppearance(key: string, hovered = false): void {
    for (const mesh of adminMeshesByRegion.get(key) ?? []) {
      mesh.material = selectedAdminRegions.has(key)
        ? adminSelectMaterial
        : hovered ? adminHoverMaterial : mesh.userData.baseMaterial as THREE.Material;
    }
  }

  function toggleAdminRegion(key: string): void {
    const wasSelected = selectedAdminRegions.has(key);
    for (const previousKey of selectedAdminRegions) {
      selectedAdminRegions.delete(previousKey);
      setAdminRegionAppearance(previousKey);
    }
    if (!wasSelected) selectedAdminRegions.add(key);
    setAdminRegionAppearance(key, hoveredAdminRegion === key);
    if (selectedCountry) {
      const selectedKey = [...selectedAdminRegions][0];
      const selectedName = selectedKey ? adminRegionNames.get(selectedKey) : undefined;
      options.onRegionSelectionChange?.(selectedCountry, selectedAdminRegions.size, totalAdminRegions, selectedName);
    }
  }

  function startSelectedCountry(): void {
    if (!selectedCountry) return;
    countryStarted = true;
    selectedAdminRegions.clear();
    options.onGameStarted?.(selectedCountry);
    setViewMode('regional');
  }

  function startNewGame(): void {
    clearSelection();
  }

  function setViewMode(view: MapView): void {
    if (view === 'regional' && (!selectedCountry || !countryStarted)) {
      options.onViewModeChange?.(currentMapView, false);
      return;
    }
    currentMapView = view;
    if (view === 'regional' && selectedCountry) {
      physicalLayer.visible = false;
      zoomToCountry(selectedCountry.iso3);
      void showAdminLayer(selectedCountry);
    } else {
      clearAdminLayer();
      if (selectedCountry) setCountryAppearance(selectedCountry.iso3, false);
      physicalLayer.visible = view === 'orographic';
      if (view === 'global') resetCameraView();
      else if (selectedCountry && countryStarted) zoomToCountry(selectedCountry.iso3);
      else if (view === 'orographic') resetCameraView();
    }
    options.onViewModeChange?.(view, Boolean(selectedCountry && countryStarted));
  }

  function zoomToCountry(iso3: string): void {
    const countryFeature = (collection.features as CountryFeature[]).find((item) => countryFromFeature(item).iso3 === iso3);
    if (!countryFeature) return;
    const [[minX, minY], [maxX, maxY]] = pathGenerator.bounds(countryFeature);
    const svgScale = WORLD_WIDTH / SVG_WIDTH;
    const centerX = (minX + maxX) * 0.5 * svgScale - WORLD_WIDTH / 2;
    const centerY = WORLD_HEIGHT / 2 - (minY + maxY) * 0.5 * svgScale;
    const width = Math.max((maxX - minX) * svgScale, 0.2);
    const height = Math.max((maxY - minY) * svgScale, 0.2);
    const zoom = THREE.MathUtils.clamp(Math.min((camera.right - camera.left) * 0.72 / width, (camera.top - camera.bottom) * 0.72 / height), 1, 18);
    cameraTransition = {
      startedAt: performance.now(),
      fromPosition: camera.position.clone(),
      toPosition: new THREE.Vector3(centerX, centerY, defaultCamera.z),
      fromFocus: cameraFocus.clone(),
      toFocus: new THREE.Vector3(centerX, centerY, 0),
      fromZoom: camera.zoom,
      toZoom: zoom,
    };
  }

  function resetCameraView(): void {
    cameraTransition = null;
    camera.position.copy(defaultCamera);
    cameraFocus.set(0, 0, 0);
    camera.lookAt(cameraFocus);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
  }

  async function showAdminLayer(country: Country): Promise<void> {
    clearAdminLayer();
    const buildId = adminBuildId;
    physicalLayer.visible = false;
    options.onAdminStatus?.(country, 'loading');
    try {
      const data = await fetchAdminRegions(country);
      if (buildId !== adminBuildId || selectedCountry?.iso3 !== country.iso3 || currentMapView !== 'regional') return;
      const layer = new THREE.Group();
      const transitionMaterials: THREE.Material[] = [];
      activeAdminLayer = layer;
      totalAdminRegions = data.features.length;
      for (const [index, region] of data.features.entries()) {
        if (buildId !== adminBuildId || selectedCountry?.iso3 !== country.iso3 || currentMapView !== 'regional') return;
        const path = pathGenerator(orientAdminFeature(region));
        if (!path) continue;
        const paths = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${path}"/></svg>`).paths;
        for (const svgPath of paths) {
          const regionKey = region.properties.shapeID || `${country.iso3}-${index}`;
          for (const shape of SVGLoader.createShapes(svgPath)) {
            const material = new THREE.MeshStandardMaterial({ color: adminColor(region), roughness: 0.72, side: THREE.DoubleSide, transparent: true, opacity: 0 });
            transitionMaterials.push(material);
            const mesh = makeRaisedMesh(shape, material, BASE_DEPTH);
            mesh.userData.country = country;
            mesh.userData.baseMaterial = material;
            mesh.userData.baseZ = 0.02;
            mesh.userData.adminRegionKey = regionKey;
            mesh.position.z = 0.02;
            layer.add(mesh);
            adminMeshes.push(mesh);
            const regionMeshes = adminMeshesByRegion.get(regionKey) ?? [];
            regionMeshes.push(mesh);
            adminMeshesByRegion.set(regionKey, regionMeshes);
            adminRegionNames.set(regionKey, adminName(region));
            const layerBorders = new THREE.LineBasicMaterial({ color: 0x17242c, transparent: true, opacity: 0 });
            transitionMaterials.push(layerBorders);
            addShapeLines(layer, shape, layerBorders, 0.13);
          }
        }
        if (index % 4 === 3) await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      }
      if (buildId !== adminBuildId || selectedCountry?.iso3 !== country.iso3 || currentMapView !== 'regional') return;
      for (const key of selectedAdminRegions) setAdminRegionAppearance(key);
      layer.position.z = 0;
      map.add(layer);
      const countryParts = meshesByCountry.get(country.iso3) ?? [];
      for (const mesh of countryParts) mesh.userData.targetLift = 0;
      layerTransition = { startedAt: performance.now(), countryMeshes: countryParts, layer, materials: transitionMaterials };
      options.onAdminStatus?.(country, 'ready', data.features.length);
      const selectedKey = [...selectedAdminRegions][0];
      options.onRegionSelectionChange?.(country, selectedAdminRegions.size, data.features.length, selectedKey ? adminRegionNames.get(selectedKey) : undefined);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`No se pudieron dibujar las divisiones de ${country.name}:`, error);
      if (buildId === adminBuildId && selectedCountry?.iso3 === country.iso3 && currentMapView === 'regional') {
        physicalLayer.visible = false;
        setCountryAppearance(country.iso3, true);
        options.onAdminStatus?.(country, 'error', undefined, message);
      }
    }
  }

  async function loadPhysicalFeatures(): Promise<void> {
    try {
      const response = await fetch('/maps/physical/features.geojson');
      if (!response.ok) throw new Error(`No se pudo leer la capa física (${response.status}).`);
      const data = await response.json() as FeatureCollection<Geometry, PhysicalProperties>;
      const water = new THREE.Color(0x59c9e6);
      const earth = new THREE.Color(0x98734f);
      const riverMaterial = new THREE.LineBasicMaterial({ color: water, transparent: true, opacity: 0.9 });
      const waterFill = new THREE.MeshBasicMaterial({ color: water, transparent: true, opacity: 0.82, depthWrite: false, side: THREE.DoubleSide });
      const earthFill = new THREE.MeshBasicMaterial({ color: earth, transparent: true, opacity: 0.2, depthWrite: false, side: THREE.DoubleSide });
      const earthLine = new THREE.LineBasicMaterial({ color: earth, transparent: true, opacity: 0.78 });
      const mountainMarker = new THREE.MeshBasicMaterial({ color: earth, side: THREE.DoubleSide });

      for (const item of data.features) {
        const kind = item.properties?.kind;
        if (kind === 'mountain' && item.geometry.type === 'Point') {
          const point = projection(item.geometry.coordinates as [number, number]);
          if (!point) continue;
          const marker = new THREE.Mesh(new THREE.CircleGeometry(2.4, 12), mountainMarker);
          marker.position.set(point[0], point[1], 0.16);
          physicalLayer.add(marker);
          continue;
        }

        const path = pathGenerator(item as Feature<Geometry, CountryProperties>);
        if (!path) continue;
        const svgPaths = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${path}"/></svg>`).paths;
        for (const svgPath of svgPaths) {
          if (kind === 'river') {
            for (const subPath of svgPath.subPaths) {
              const points = subPath.getPoints(2);
              if (points.length < 2) continue;
              const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), riverMaterial);
              line.position.z = 0.15;
              physicalLayer.add(line);
            }
            continue;
          }
          for (const shape of SVGLoader.createShapes(svgPath)) {
            const fill = new THREE.Mesh(new THREE.ShapeGeometry(shape), kind === 'lake' ? waterFill : earthFill);
            fill.position.z = 0.14;
            physicalLayer.add(fill);
            addShapeLines(physicalLayer, shape, kind === 'lake' ? riverMaterial : earthLine, 0.15);
          }
        }
      }
    } catch (error) {
      console.error('No se pudo cargar la capa de ríos, lagos y relieve:', error);
    }
  }


  function finishLayerTransition(): void {
    if (!layerTransition) return;
    for (const mesh of layerTransition.countryMeshes) {
      const material = mesh.userData.baseMaterial as THREE.Material;
      material.opacity = 1;
      material.transparent = false;
      mesh.visible = false;
      mesh.userData.targetLift = 0;
      mesh.position.z = mesh.userData.baseZ as number;
    }
    for (const material of layerTransition.materials) material.opacity = 1;
    layerTransition.layer.position.z = ADMIN_LAYER_LIFT;
    layerTransition = null;
  }

  let dragStart: { x: number; y: number; cameraX: number; cameraY: number; focusX: number; focusY: number } | null = null;
  let moved = false;
  renderer.domElement.addEventListener('pointerdown', (event) => {
    cameraTransition = null;
    dragStart = { x: event.clientX, y: event.clientY, cameraX: camera.position.x, cameraY: camera.position.y, focusX: cameraFocus.x, focusY: cameraFocus.y };
    moved = false;
    renderer.domElement.dataset.dragged = 'false';
    renderer.domElement.setPointerCapture(event.pointerId);
  });
  renderer.domElement.addEventListener('pointermove', (event) => {
    if (!dragStart) return;
    const dx = event.clientX - dragStart.x;
    const dy = event.clientY - dragStart.y;
    if (Math.hypot(dx, dy) > 4) moved = true;
    if (moved) {
      renderer.domElement.dataset.dragged = 'true';
      const worldPerPixel = (camera.top - camera.bottom) / (renderer.domElement.clientHeight * camera.zoom);
      camera.position.x = dragStart.cameraX - dx * worldPerPixel;
      camera.position.y = dragStart.cameraY + dy * worldPerPixel;
      cameraFocus.x = dragStart.focusX - dx * worldPerPixel;
      cameraFocus.y = dragStart.focusY + dy * worldPerPixel;
      camera.lookAt(cameraFocus);
    }
  });
  renderer.domElement.addEventListener('pointerup', () => { dragStart = null; window.setTimeout(() => { renderer.domElement.dataset.dragged = 'false'; }, 0); });
  renderer.domElement.addEventListener('wheel', (event) => {
    event.preventDefault();
    cameraTransition = null;
    const factor = event.deltaY > 0 ? 1.08 : 0.92;
    camera.zoom = THREE.MathUtils.clamp(camera.zoom / factor, 0.8, 18);
    camera.updateProjectionMatrix();
  }, { passive: false });
  window.addEventListener('atlas:reset-view', () => {
    resetCameraView();
  });

  const resizeObserver = new ResizeObserver(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height);
    const aspect = width / height;
    const halfHeight = Math.max(WORLD_HEIGHT / 2, WORLD_WIDTH / (aspect * 2));
    const halfWidth = halfHeight * aspect;
    camera.left = -halfWidth;
    camera.right = halfWidth;
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.updateProjectionMatrix();
  });
  resizeObserver.observe(container);
  options.onMapReady?.({ startCountry: startSelectedCountry, startNewGame, setView: setViewMode });
  options.onViewModeChange?.(currentMapView, false);

  const animate = (now: number) => {
    if (cameraTransition) {
      const progress = THREE.MathUtils.clamp((now - cameraTransition.startedAt) / 1050, 0, 1);
      const eased = progress * progress * (3 - 2 * progress);
      camera.position.lerpVectors(cameraTransition.fromPosition, cameraTransition.toPosition, eased);
      cameraFocus.lerpVectors(cameraTransition.fromFocus, cameraTransition.toFocus, eased);
      camera.lookAt(cameraFocus);
      camera.zoom = THREE.MathUtils.lerp(cameraTransition.fromZoom, cameraTransition.toZoom, eased);
      camera.updateProjectionMatrix();
      if (progress >= 1) cameraTransition = null;
    }
    if (layerTransition) {
      const progress = THREE.MathUtils.clamp((now - layerTransition.startedAt) / 560, 0, 1);
      layerTransition.layer.position.z = ADMIN_LAYER_LIFT * progress;
      for (const material of layerTransition.materials) material.opacity = progress;
      for (const mesh of layerTransition.countryMeshes) {
        const material = mesh.userData.baseMaterial as THREE.Material;
        material.transparent = true;
        material.opacity = 1 - progress;
      }
      if (progress >= 1) finishLayerTransition();
    }
    for (const mesh of [...countryMeshes, ...adminMeshes]) {
      const target = mesh.userData.targetLift as number | undefined ?? 0;
      const base = mesh.userData.baseZ as number;
      const lift = THREE.MathUtils.lerp(mesh.userData.lift as number ?? 0, target, 0.18);
      mesh.userData.lift = lift;
      mesh.position.z = base + lift;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}

function toDirectRawUrl(sourceUrl: string): string {
  const url = new URL(sourceUrl);
  const githubRawPrefix = '/wmgeolab/geoBoundaries/raw/';
  if (url.hostname === 'github.com' && url.pathname.startsWith(githubRawPrefix)) {
    url.hostname = 'media.githubusercontent.com';
    url.pathname = `/media/wmgeolab/geoBoundaries/${url.pathname.slice('/wmgeolab/geoBoundaries/raw/'.length)}`;
    return url.toString();
  }
  return sourceUrl;
}

async function fetchAdminRegions(country: Country): Promise<AdminCollection> {
  const cacheKey = `${country.iso3}:ADM1`;
  let cached = ADMIN_CACHE.get(cacheKey);
  if (!cached) {
    cached = (async () => {
      const localResponse = await fetch(`/maps/admin1/${country.iso3}.geojson`);
      if (localResponse.ok) return await localResponse.json() as AdminCollection;
      if (localResponse.status !== 404) throw new Error(`No se pudieron leer las divisiones locales (${localResponse.status}).`);

      // Rare countries absent from Natural Earth fall back to geoBoundaries on demand.
      const metadataResponse = await fetch(`https://www.geoboundaries.org/api/current/gbOpen/${country.iso3}/ADM1/`);
      if (!metadataResponse.ok) throw new Error('No se encontraron divisiones ADM1 para este país.');
      const metadata = await metadataResponse.json() as AdminMetadata;
      const dataUrl = metadata.simplifiedGeometryGeoJSON ?? metadata.gjDownloadURL;
      if (!dataUrl) throw new Error('La fuente no proporcionó el mapa de divisiones.');
      const dataResponse = await fetch(toDirectRawUrl(dataUrl));
      if (!dataResponse.ok) throw new Error(`No se pudo descargar el mapa de divisiones (${dataResponse.status}).`);
      const data = await dataResponse.json() as AdminCollection;
      if (!Array.isArray(data.features)) throw new Error('El archivo no contiene divisiones administrativas.');
      const topo = createTopology({ regions: data }, 1e6) as unknown as Topology<{ regions: GeometryCollection<AdminProperties> }>;
      const reduced = simplify(presimplify(topo), 0.002);
      return feature(reduced, reduced.objects.regions) as AdminCollection;
    })();
    ADMIN_CACHE.set(cacheKey, cached);
    void cached.catch(() => { ADMIN_CACHE.delete(cacheKey); });
  }
  return cached;
}

function countryFromFeature(item: CountryFeature): Country {
  const id = String(item.id ?? item.properties?.ISO_A3 ?? item.properties?.name ?? '');
  const rawName = item.properties?.name ?? item.properties?.NAME ?? item.properties?.name_long ?? `País ${id}`;
  const resolvedIso3 = item.properties?.ISO_A3 ?? countries.numericToAlpha3(id) ?? countries.getAlpha3Code(rawName, 'en') ?? '';
  const iso3 = resolvedIso3 === 'XKK' || resolvedIso3 === 'XKX' ? 'KOS' : resolvedIso3;
  const alpha2 = countries.numericToAlpha2(id) ?? countries.getAlpha2Code(rawName, 'en');
  const name = (alpha2 && countries.getName(alpha2, 'es')) || rawName;
  return { id, name, iso3 };
}

function applyCountryOverrides(collection: FeatureCollection<Geometry, CountryProperties>): FeatureCollection<Geometry, CountryProperties> {
  const baseFeatures = collection.features as CountryFeature[];
  const presentCodes = new Set(baseFeatures.map((item) => countryFromFeature(item).iso3));
  const missingSmallCountries = (territoryOverrides.smallCountries as unknown as CountryFeature[]).filter((item) => !presentCodes.has(countryFromFeature(item).iso3));
  const features = [...baseFeatures, ...missingSmallCountries] as CountryFeature[];
  const gaza: CountryFeature = {
    type: 'Feature',
    id: 'GZA',
    properties: { name: 'Gaza', ISO_A3: 'GZA' },
    geometry: territoryOverrides.gaza as Geometry,
  };
  return { ...collection, features: [...features.filter((item) => countryFromFeature(item).iso3 !== 'FLK'), gaza] };
}

function makeRaisedMesh(shape: THREE.Shape, material: THREE.Material, depth: number): THREE.Mesh {
  const geometry = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 4 });
  return new THREE.Mesh(geometry, material);
}

function addShapeLines(group: THREE.Group, shape: THREE.Shape, material: THREE.LineBasicMaterial, z: number): void {
  const points = shape.getPoints(2);
  if (points.length >= 3) group.add(makeLine(points, material, z));
  for (const hole of shape.holes) {
    const holePoints = hole.getPoints(2);
    if (holePoints.length >= 3) group.add(makeLine(holePoints, material, z));
  }
}

function makeLine(points: THREE.Vector2[], material: THREE.LineBasicMaterial, z: number): THREE.Line {
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([...points, points[0]!]), material);
  line.position.z = z;
  return line;
}



function orientAdminFeature(region: AdminFeature): AdminFeature {
  const orientPolygon = (rings: number[][][]): number[][][] => rings.map((ring, ringIndex) => {
    const points = ring.slice(0, -1);
    let signedArea = 0;
    for (let index = 0; index < points.length; index += 1) {
      const current = points[index]!;
      const next = points[(index + 1) % points.length]!;
      signedArea += current[0]! * next[1]! - next[0]! * current[1]!;
    }
    const shouldBeClockwise = ringIndex === 0;
    const isClockwise = signedArea < 0;
    if (shouldBeClockwise === isClockwise) return ring;
    const reversed = [...points].reverse();
    return [...reversed, reversed[0]!];
  });

  const geometry = region.geometry;
  if (geometry.type === 'Polygon') {
    return { ...region, geometry: { ...geometry, coordinates: orientPolygon(geometry.coordinates) } };
  }
  if (geometry.type === 'MultiPolygon') {
    return { ...region, geometry: { ...geometry, coordinates: geometry.coordinates.map(orientPolygon) } };
  }
  return region;
}

function adminName(region: AdminFeature): string {
  return region.properties?.shapeName ?? region.properties?.NAME_1 ?? region.properties?.name ?? 'División administrativa';
}

function adminColor(region: AdminFeature): number {
  const name = region.properties?.shapeISO ?? region.properties?.shapeID ?? adminName(region);
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  const palette = [0xb66d39, 0xc47b3d, 0xd08c49, 0xe0a04f, 0xa85f36, 0xc77742, 0xd8954c, 0xe8a45c];
  return palette[hash % palette.length]!;
}

function countryColor(id: string): number {
  let hash = 2166136261;
  for (const char of id) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619) >>> 0;
  const allowedHueLength = 0.045 + (0.44 - 0.17) + (1 - 0.63);
  const position = (hash / 0xffffffff) * allowedHueLength;
  const hue = position < 0.045
    ? position
    : position < 0.315
      ? 0.17 + position - 0.045
      : 0.63 + position - 0.315;
  const saturation = 0.4 + ((hash >>> 8) & 0xff) / 255 * 0.22;
  const lightness = 0.38 + ((hash >>> 16) & 0xff) / 255 * 0.15;
  return new THREE.Color().setHSL(hue, saturation, lightness).getHex();
}
