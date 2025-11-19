import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

// 🎯 SERVICE WORKER TIPO APP NATIVA - ENRUTAMIENTO 100% LOCAL

// Precargar todos los archivos generados por Vite
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// 🔄 CACHE DE TODAS LAS RUTAS SPA - SIN CONSULTAR SERVIDOR
const CACHE_NAME = 'spa-routes-v1';
const ROUTES_TO_CACHE = [
  '/',
  '/candidatos',
  '/calendario',
  '/noticias', 
  '/tutorial',
  '/marco-legal'
];

// ⚡ INSTALACIÓN: Precargar TODAS las rutas localmente
self.addEventListener('install', (event) => {
  console.log('🚀 Service Worker: Instalando app nativa...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Precargando todas las rutas SPA...');
        // Cachear TODAS las rutas como /index.html para SPA routing
        return cache.addAll(
          ROUTES_TO_CACHE.map(route => ({
            url: route,
            response: new Response('', {
              headers: { 'Content-Type': 'text/html' }
            })
          }))
        );
      })
  );
  
  // Activar inmediatamente sin esperar
  self.skipWaiting();
});

// 🎛️ ACTIVACIÓN: Tomar control total
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker: App nativa activada');
  event.waitUntil(self.clients.claim());
});

// 🌐 INTERCEPTAR TODAS LAS NAVEGACIONES - FUNCIONA COMO APP NATIVA
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 📱 NAVEGACIÓN: Resolver TODAS las rutas localmente (como WhatsApp)
  if (request.mode === 'navigate') {
    console.log('🧭 Navegación interceptada:', url.pathname);
    
    event.respondWith(
      // SIEMPRE responder con index.html para SPA routing
      caches.match('/index.html')
        .then((cachedResponse) => {
          if (cachedResponse) {
            console.log('✅ Ruta resuelta LOCALMENTE:', url.pathname);
            return cachedResponse;
          }
          
          // Fallback: crear response básico para SPA
          return new Response(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>Elige Perú</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body>
                <div id="root">Cargando app offline...</div>
                <script type="module" src="/src/main.jsx"></script>
              </body>
            </html>
          `, {
            headers: { 'Content-Type': 'text/html' }
          });
        })
        .catch(() => {
          console.log('⚠️ Error en navegación, usando fallback');
          return new Response('App offline disponible', {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
          });
        })
    );
    return;
  }
  
  // 📂 RECURSOS ESTÁTICOS: Cache-first (imágenes, JS, CSS)
  if (request.destination === 'image' || 
      request.destination === 'script' || 
      request.destination === 'style' ||
      request.destination === 'font') {
    
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then((response) => {
              // Cache la response si es exitosa
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(request, responseClone));
              }
              return response;
            })
            .catch(() => {
              console.log('📂 Recurso no disponible offline:', request.url);
              return new Response('Recurso offline', { status: 404 });
            });
        })
    );
  }
});

// 🔔 NOTIFICACIÓN DE APP LISTA OFFLINE
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('🎉 SERVICE WORKER NATIVO: App funcionará como WhatsApp - 100% offline');