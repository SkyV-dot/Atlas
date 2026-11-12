# Juego de mesa web

Base inicial para un juego de mesa web con un mapa mundial interactivo dividido por países y fichas con apariencia 3D.

## Enfoque inicial

La vista es 2.5D: el mapa es una superficie plana con fronteras y países seleccionables; las fichas se representarán como objetos 3D. El mapa mundial usa una proyección Natural Earth y límites de países Natural Earth empaquetados en `world-atlas`.

La simulación y las reglas no deben depender del motor gráfico. ECS organiza las entidades y sistemas del juego; la capa de representación traduce ese estado a lo que se dibuja. Para la primera etapa, el estado vive localmente en el navegador. La carpeta `network` queda reservada para una futura sincronización P2P, sin implementar todavía una arquitectura de red.

## Carpetas

```text
src/
  app/                 Inicio y composición de la aplicación
  game/
    ecs/               Mundo ECS, entidades, componentes y sistemas
    world/             Países, fronteras, conexiones y estado del mapa
    rules/             Reglas y turnos; lógica independiente de la pantalla
  rendering/
    map/               Dibujo del mapa, fronteras y selección visual
    pieces/            Modelos y representación de fichas
  input/               Teclado, ratón/táctil y conversión de acciones a comandos
  ui/                  Interfaz: menús, paneles y estado visible
  assets/maps/         Datos geográficos del mapa y recursos relacionados
  network/             Futuro transporte P2P y protocolo de mensajes

docs/                  Decisiones y notas de diseño
```

## Orden sugerido de trabajo

1. Cargar el mapa mundial y permitir seleccionar un país.
2. Añadir navegación con arrastre, zoom y restablecer vista.
3. Definir las primeras entidades y componentes ECS que el prototipo necesite.
4. Añadir una ficha 3D y hacer que su posición dependa del estado del juego.
5. Incorporar reglas de turnos y movimientos.
6. Diseñar la sincronización multijugador cuando las reglas locales estén claras.

## Decisiones aún abiertas

- Motor visual para combinar el mapa plano con fichas 3D.
- Fuente y licencia de los datos de fronteras.
- Alcance del primer prototipo y reglas iniciales.

La fuente de fronteras ya elegida es el conjunto 1:110m de Natural Earth distribuido por `world-atlas`; el proyecto del paquete describe esos límites como derivados de Admin 0 de Natural Earth. Revisa los términos de uso originales antes de publicar el juego: [world-atlas](https://github.com/topojson/world-atlas) y [Natural Earth](https://www.naturalearthdata.com/).

### Límites administrativos y rendimiento

Las divisiones administrativas se cargan solo al seleccionar un país. `scripts/build-admin1-data.mjs` prepara límites ADM1 simplificados conservando la topología: se generaron 4.508 divisiones para 251 países en unos 8.3 MB en total, distribuidas como archivos individuales en `public/maps/admin1/`. Canadá y EE. UU. usan el conjunto Natural Earth 1:50m; Canadá tiene 10 provincias y 3 territorios. Francia usa sus 13 regiones ADM1. Los países ausentes del conjunto tienen una alternativa geoBoundaries bajo demanda. Natural Earth publica sus datos como dominio público.
