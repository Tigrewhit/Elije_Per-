# Objetivos y funcionalidades extraídas de las imágenes (imagen 1)

Fecha análisis: 2025-11-15

---

## 1) Transcripción / contenido principal (Imagen 1)

La imagen muestra un slide titulado **Contenido** con dos secciones principales:

1. Calendario Electoral
   a. Fechas de elecciones
   b. Fechas relevantes vinculadas a los procesos electorales
   c. Fechas relevantes para los miembros de mesa

2. Información sobre agrupaciones Políticas
   a. Elecciones Generales
      i. Planchas Presidenciales
      ii. Planes de gobierno de las agrupaciones políticas (acceso por sectores)
      iii. Candidaturas a la Cámara de Diputados
      iv. Candidaturas a la Cámara de Senadores
         1. Nacional
         2. Regional
      v. Candidatos al parlamento Andino
      vi. Datos de los candidatos
      vii. Hojas de vida
      viii. Información sobre sus actividades
      ix. Noticias referidas a las elecciones generales
      x. Propuestas de candidatos

---

## 2) Interpretación y objetivos funcionales

La imagen plantea claramente que la aplicación debe ofrecer dos grandes bloques funcionales:

- Un **Calendario Electoral** completo y consultable, que permita a los usuarios ver y filtrar fechas clave (votación, plazos, eventos para miembros de mesa).
- Un módulo de **Información sobre agrupaciones políticas y candidatos**, incluyendo perfiles completos, planes de gobierno, propuestas por sector, noticias relacionadas y materiales (hojas de vida, actividades).

Objetivo general extraído: Construir una plataforma informativa y fiable donde ciudadanos puedan consultar fechas electorales y obtener información detallada sobre candidaturas y propuestas, pensada tanto para votantes como para actores involucrados (ej. miembros de mesa).
las de mas cositas y van esta mas abajo esyto solo es temporal.
---

## 3) Requisitos funcionales sugeridos (lista priorizada)

Prioridad - MVP (imprescincible para demo/hackathon):

1. Calendario Electoral
   - Listado de eventos con: fecha, título, descripción, tipo (elección, plazo, capacitación), etiqueta para miembros de mesa.
   - Filtrado por periodo, tipo de evento y rol (ej. miembro de mesa).
   - Vista calendario y vista lista.

2. Listado de Candidatos y Agrupaciones
   - Listar candidatos con nombre, partido/agrupación, cargo (presidente, diputado, senador, parlamento andino), fotografía y short bio.
   - Búsqueda y filtros por partido, cargo, región y sector.

3. Perfil de Candidato 
   - Datos personales básicos y afiliación.
   - Hojas de vida / curriculum (descargable).
   - Propuestas por sector (acceso por sectores), planes de gobierno.
   - Actividades y cronología (eventos recientes, apariciones públicas).

4. Noticias y Actualizaciones
   - Feed de noticias filtradas por elecciones generales.
   - Posibilidad de marcar noticias como leídas o favoritas.

5. PWA / Offline
   - Soporte PWA: instalar en dispositivo, cache offline de datos críticos (calendar, perfiles básicos, manifest). Mostrar fallback `offline.html`.


Funcionalidades adicionales (post-MVP):

- Comparador de candidatos/propuestas por sector.
- Notificaciones push para fechas críticas (ej. inicio campaña, fecha de votación, plazos para miembros de mesa).
- Acceso a documentos oficiales y verificados.

---

## 4) Esquema de datos sugerido (tablas principales)

- `events` (id, title, date, type, description, target_roles, created_at)
- `parties` (id, name, abbreviation, description, logo_url)
- `candidates` (id, name, party_id, photo_url, bio, region, role, cv_url)
- `candidate_proposals` (id, candidate_id, sector, title, description)
- `candidate_activities` (id, candidate_id, date, title, description, location)
- `news` (id, title, body, source, published_at, related_candidate_id?)

Notas:
- Los `sector` para propuestas permiten agrupar planes por temas (economía, salud, educación, etc.).

---

## 5) API endpoints propuestos (mínimos)

- `GET /electoral/calendar` → lista de eventos (con filtros por rango/ tipo / rol).
- `GET /candidates` → lista de candidatos (filtros: party, role, region, search).
- `GET /candidates/:id` → perfil completo del candidato (incluye propuestas y actividades).
- `GET /parties` → lista de agrupaciones políticas.
- `GET /news` → feed de noticias (paginado).

---

## 6) UX / UI notes (según la imagen y objetivo)

- Estructura de navegación clara: Inicio, Calendario, Candidatos, Noticias, Tutorial/FAQ.
- En la lista de candidatos mostrar resumen y filtros rápidos; al entrar a perfil, mostrar pestañas (Resumen, Propuestas, Actividades, Documentos).
- En Calendario ofrecer vista mes/lista y posibilidad de marcar eventos importantes o recordatorios (PWA push o notificaciones locales).

---

## 7) PWA – consideraciones específicas

- Cachear rutas críticas: `/electoral/calendar`, `/candidates` y perfiles visitados.
- Incluir `offline.html` (ya añadido) y fallback para datos estáticos.
- Asegurar que `manifest.json` contiene iconos y `display: standalone` (ya presente).

---

## 8) Prioridad de implementación recomendada

1. Backend: migraciones + seeds para `events`, `parties`, `candidates`.
2. API read-only para `calendar` y `candidates` con paginación/ filtros.
3. Frontend: páginas `Calendar` y `Candidates` con manejo de carga/errores y perfiles básicos.
4. PWA: cache y offline básico (ya parcialmente implementado). Probar instalación y offline.

---

## 9) Siguientes pasos y opciones

- ¿Deseas que guarde esta imagen en el repo bajo `docs/assets/`? (responde sí/no)
- Puedo ahora analizar la segunda imagen cuando la subas y añadir más requisitos al documento.

***

Archivo generado automáticamente: `docs/project_goals_from_images.md` (imagen 1)

---

## Análisis de la Imagen 2

### 1) Transcripción / contenido principal (Imagen 2)

La segunda imagen continúa el índice de contenido y presenta dos bloques centrados en los electores y en los miembros de mesa:

3. Información para los electores
   a. Ubicación con apoyo de geolocalización del lugar de votación
   b. Ubicación de la mesa dentro del centro de votación
   c. Instrucciones sobre la cédula de sufragio
   d. Recomendaciones de seguridad
   e. Marco legal

4. Información para miembros de mesa
   a. Calendario de actividades de los miembros de mesa
   b. Instrucciones sobre sus deberes
      i. Instalación
      ii. Sufragio
      iii. Otros

### 2) Interpretación y objetivos funcionales (Imagen 2)

Esta imagen añade requisitos orientados a la usabilidad en el lugar de votación y al soporte operativo de quienes organizan y administran las mesas. Los objetivos son:

- Facilitar que un votante encuentre su lugar de votación mediante geolocalización y mapas.
- Guiar al votante dentro del centro de votación hasta su mesa asignada (instrucciones precisas).
- Proveer guías claras sobre la cédula de sufragio (cómo marcar, qué casillas corresponden, ejemplos visuales).
- Entregar recomendaciones de seguridad y el marco legal aplicable (derechos, prohibiciones, qué hacer en incidencias).
- Dar a los miembros de mesa un dashboard con calendario de actividades y pasos/ checklist para instalación, proceso de votación y otras tareas.

### 3) Requisitos funcionales sugeridos (priorizados)

MVP (alto impacto inmediato):

1. Localizador de mesa y centro de votación
   - Endpoint y dataset de `polling_stations` con coordenadas y direcciones.
   - Página/mapa en frontend que use geolocalización del navegador para mostrar la ruta al centro.
   - Visualización dentro del centro: un plano/simple layout que permita localizar la mesa (o instrucciones alfanuméricas).

2. Guía de la cédula de sufragio (voters guide)
   - Página con imágenes de ejemplo de la cédula y explicación paso a paso.
   - Posibilidad de descargar/guardar la cédula de ejemplo.

3. Información legal y seguridad
   - Sección con preguntas frecuentes, recomendaciones y texto legal referencial.
   - Contactos de emergencia / enlaces a organismos oficiales.

4. Dashboard para miembros de mesa
   - Calendario de actividades asignadas (instalación, jornada de votación, cierre, etc.).
   - Checklist paso a paso (instalación de mesa, verificación de material, control de sufragio, cierre y reporte).
   - Documentos y manuales descargables (hojas de procedimiento, formatos de acta).

Post-MVP (opcional):

- Integración con mapas offline o tiles cacheados para zonas con baja conectividad.
- Capacitación interactiva para miembros de mesa (tutoriales, preguntas de prueba).
- Soporte para reporte de incidencias en sitio (formularios con foto, geolocalización y adjuntos).

### 4) Consideraciones técnicas y de seguridad

- Geolocalización: requiere HTTPS y permiso del usuario; en desarrollo funciona en `localhost` y en producción necesita dominio seguro.
- Mapas: usar servicios como Leaflet + OpenStreetMap para evitar costos, pero considerar licencias y uso de tiles; cachear tiles localmente es complejo.
- Privacidad: datos sensibles (asignación de mesa por elector) deben manejarse con cuidado; no almacenar información personal sin consentimiento y proteger endpoints.
- Offline: mostrar instrucciones y cédula de ejemplo en cache del SW; para mapas, ofrecer fallback textual si no hay tiles.

### 5) Endpoints y datos sugeridos (adiciones)

- `GET /polling-stations?address=...` → buscar centros por dirección/ubicación.
- `GET /polling-stations/:id/mesas` → lista de mesas dentro del centro (con localización interna si se dispone).
- `GET /voter-guides/ballot` → recurso con imagen/esquema de la cédula y explicación.
- `GET /members/calendar/:memberId` → calendario y actividades asignadas para miembro de mesa (si el sistema maneja autenticación asignada).
- `POST /incidents` → reporte de incidencias (incluye foto, ubicación, descripción).

---

He añadido este análisis al documento. ¿Quieres que guarde la imagen 2 en `docs/assets/` (sí/no) y continúe con la tercera imagen ahora? 

Archivo actualizado automáticamente: `docs/project_goals_from_images.md` (incluye imagen 2)

---

## Análisis de la Imagen 3

### 1) Transcripción / contenido principal (Imagen 3)

La tercera imagen está titulada **Características funcionales** y lista los puntos principales del servicio:

- Función principal: Concentrar la información que el ciudadano necesita con miras al proceso electoral
- Información utilitaria para participar en el proceso electoral como elector o miembro de mesa
- Información para un voto informado
- Información en línea proveniente de los organismos electorales y de la cobertura del diario El Comercio
- Tutorial para usar la aplicación
- Funcionalidad online y offline.

### 2) Interpretación y objetivos funcionales (Imagen 3)

La diapositiva resume la misión y las características clave que debe ofrecer la plataforma. Subraya la importancia de:

- Ser el punto único (single source) de información electoral confiable y verificada.
- Proporcionar contenido práctico para la participación (votantes y miembros de mesa).
- Priorizar datos y contenido que permitan un voto informado: propuestas, hojas de vida, comparadores.
- Consumir y mostrar información oficial (organismos electorales) y cobertura periodística confiable (El Comercio), lo que sugiere integrar fuentes externas via feeds o APIs.
- Ofrecer un tutorial integrado para facilitar el uso de la app a usuarios no técnicos.
- Mantener funcionamiento offline para escenarios de conectividad limitada.

### 3) Requisitos funcionales sugeridos (con foco en esta imagen)

1. Agregación de fuentes verificadas
   - Integración por lotes con APIs o feeds (RSS/JSON) de organismos electorales y medios autorizados.
   - Mecanismo de verificación/etiquetado de fuentes en el frontend.

2. Tutorial interactivo
   - Tutorial paso a paso dentro de la app (widgets, tips, onboarding modal) para nuevos usuarios.

3. Offline-first y UX
   - Estrategia de cache para contenido crítico (calendar, perfiles, guías) y UI que explique el estado de conexión.

4. Contenido para voto informado
   - Páginas de propuestas estructuradas por sector y comparador simple entre candidatos.

### 4) Consideraciones de implementación

- Federation/ingest: crear jobs/sync para traer feeds oficiales (y guardarlos con timestamps y metadatos de origen).
- UX: onboarding breve la primera vez que el usuario abre la app; acceso rápido a tutorial desde el menú.
- Offline: diseñar la UX para mostrar claramente qué contenido está en cache y qué requiere conexión.

---

## Conclusión consolidada (tres imágenes)

Tras analizar las tres imágenes, el objetivo del proyecto queda claro: construir una aplicación PWA que centralice información electoral verificada, ofrezca herramientas prácticas para votantes y miembros de mesa (localización, guía de la cédula, calendario, perfiles y propuestas) y funcione tanto online como offline. El alcance propuesto en `docs/project_goals_from_images.md` contiene un MVP alcanzable para hackathon y una serie de mejoras posteriores que aumentan la robustez y la utilidad.

filtrado de candidatos
   https://infogob.jne.gob.pe/Politico

---

¿Quieres que guarde las tres imágenes en `docs/assets/` y que añada referencias visuales en este documento (sí/no)?

¿Cuál de las prioridades quieres que implemente ahora? (por ejemplo: A. generar seeds + endpoint `GET /candidates/:id`, B. crear `README.md` raíz, C. Docker Compose para demo)

---

## Contenido y funcionalidades adicionales (falta en el documento original)

Aquí se listan contenidos, endpoints y UX que conviene añadir al documento para que el producto sea completo, demostrable en hackathon y tenga calidad institucional:

- Guía de la cédula:
   - Imágenes de la papeleta en alta resolución y versión PDF imprimible.
   - Explicaciones paso a paso (texto + imágenes) sobre cómo marcar la papeleta y ejemplos de votos válidos, nulos y blancos.
   - Descargables para votante y miembro de mesa.

- Polling stations (estaciones de votación):
   - Nueva tabla `polling_stations` (id, name, address, lat, lng, district, province, region, hours, accessibility, contact).
   - Endpoints: `GET /polling-stations`, `GET /polling-stations/:id`, búsqueda por `q`, `lat/lng`.
   - Frontend: mapa con geolocalización (Leaflet + OSM), detalle del local y cómo llegar, plano interno opcional.

- Candidate profiles (fichas de candidato) ampliadas:
   - Campos: foto, CV (descargable), propuestas por sector (economía, salud, educación, seguridad, ambiente, digital), actividades, redes, links a debates.
   - Endpoint: `GET /candidates/:id` incluye propuestas y actividades.
   - Feature: comparador de propuestas por sector (selección de 2-3 candidatos).

- News / ingestion:
   - Etiquetas de fuente y verificación: `official`, `trusted_media`, `third_party`, `unverified`.
   - Mostrar `proveniencia_id` y `parsed_hash` cuando la noticia provenga de ingest automatizado.
   - Endpoint: `GET /news?source=...&verified=...&page=...`.

- Provenance & audit UI:
   - Endpoint público: `GET /proveniencia/:id` (raw payload, parsed_hash, fuente, fetched_at).
   - Endpoint auditoría: `GET /auditoria?resource_type=&resource_id=` que devuelve historial de cambios con timestamps y notas.
   - En las fichas (evento, candidato, noticia) mostrar un modal "Ver procedencia" que abra raw payload y versión corta del hash.

- Admin / ingest:
   - Panel para añadir/editar `fuentes`, ejecutar ingests manuales y ver logs.
   - Scheduler para ingests (cron), estado de la última ejecución, errores y tamaño de payload.
   - Función de preview antes de aplicar cambios y posibilidad de rollback.

- Incidentes y reportes in-situ:
   - Endpoint: `POST /incidents` con foto, lat/lng, description; utile para reportar problemas en jornada electoral.
   - Cola en SW para enviar reportes cuando vuelva la conexión (si se permite subir desde PWA).

- Accesibilidad y localización:
   - WCAG 2.1 AA (contraste, focus, labels, roles ARIA).
   - Soporte multilenguaje (es y, opcionalmente, quechua/aymara según alcance).

- Seguridad y privacidad:
   - Autenticación para admin (API key / JWT / OAuth) y RBAC.
   - HTTPS/HSTS, rate-limiting, WAF recomendaciones.
   - Minimizar datos personales en los endpoints públicos; cifrado en reposo para información sensible.

- Testing & calidad:
   - Unit tests para servicios backend, integration tests para endpoints, E2E con Playwright o Cypress para la UI.
   - Pruebas de accesibilidad (axe) y rendimiento (lighthouse) como parte del CI.

- Deploy y observabilidad:
   - Docker + `docker-compose` para desarrollo reproducible, imágenes multi-stage para producción.
   - CI (GitHub Actions): `lint`, `test`, `build` (frontend + backend), `docker build` y `push` de imágenes.
   - Monitoring: Sentry para errores frontend/backend; Prometheus/Grafana para métricas si el despliegue lo soporta.

---

## Esquema de datos ampliado (sugerido)

- `polling_stations` (id, name, address, lat, lng, district, province, region, hours, accessibility, contact, map_image_url)
- `voter_guides` (id, title, body, attachments[], language, published_at)
- `incidents` (id, reporter_id?, lat, lng, photo_url, description, created_at, status)
- `documents` (id, resource_type, resource_id, file_url, mime_type, uploaded_at)

## Endpoints adicionales sugeridos

- `GET /polling-stations` (filtros: q, lat,lng,radius,region)
- `GET /polling-stations/:id/mesas`
- `GET /voter-guides/ballot` (descarga imagen/PDF)
- `POST /incidents` (subir reporte desde PWA)
- `GET /proveniencia/:id`
- `GET /auditoria?resource_type=&resource_id=` 
- Admin: `POST /admin/ingest`, `GET /admin/fuentes`, `POST /admin/fuentes` (crear/editar)

## Contenido/UX que debe estar en el proyecto para demo/hackathon

1. Hero institucional con fecha de elección y CTA (hecho).
2. Página `Calendario` con lista y filtros (MVP).
3. Página `Candidatos` con fichas y búsqueda (MVP).
4. Página `Noticias` con marca de procedencia y filtros (MVP).
5. Página `Guía del votante` con imagen de la cédula y PDF descargable (MVP).
6. Mapa simple para `Polling Stations` con búsqueda por dirección y localización propia (MVP stretch).
7. Modal/Panel de `Proveniencia` en recursos ingestados (importante para la demostración de integridad).
8. Panel admin mínimo para disparar ingest y ver fuentes (para pruebas durante hackathon).

## Prioridad práctica para el Hackathon (3 días típica)

Fase 1 (día 0-1):
- Seeds + endpoints read-only: `GET /electoral/calendar`, `GET /candidates`, `GET /candidates/:id`, `GET /news` (usar mocks si no hay DB).
- Frontend: Home, Calendar, Candidates, News (mostrar proveniencia/short-hash si está disponible).

Fase 2 (día 2):
- Voter guide (imagen + PDF), Polling stations mínima (seed de 10 locales), map view básico.
- Admin: endpoint manual `POST /admin/ingest` y vista de última ingest.

Fase 3 (día 3):
- Polish UI (colores, tipografía, hero), PWA offline caching básico, y demo script (start-all).

## Seeds y ejemplos de contenido (sugerencia rápida)

- `events` seed: jornada de votación (2026-04-12), inicio campaña, plazo de inscripción de miembros de mesa.
- `parties` seed: 5 partidos con logos y short descriptions.
- `candidates` seed: 12 candidatos con photo_url, bio, proposals (2-3 por candidato) y CV link.
- `polling_stations` seed: 10 centros con lat/lng en la ciudad de prueba.

---

Si quieres, aplico ahora estos cambios en el repo (añadir seeds, endpoints y la sección `voter-guides`) y preparo ejemplos de datos seed + comandos para arrancar el demo. ¿Qué prioridad eliges ahora (A/B/C)?

