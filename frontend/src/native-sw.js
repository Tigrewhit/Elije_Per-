import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

// 🏗️ APP SHELL ARCHITECTURE - COMO WHATSAPP/INSTAGRAM
// Una sola página + Router local + Cache total = App nativa

// ⚡ PRECARGA: Todo lo necesario para funcionar offline
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// 📦 APP SHELL - Recursos críticos para funcionamiento nativo
const APP_SHELL_CACHE = 'app-shell-v2';
const DATA_CACHE = 'electoral-data-v2';

// 🎯 INSTALACIÓN: App Shell completo (como descargar WhatsApp)
self.addEventListener('install', (event) => {
  console.log('📥 INSTALANDO APP SHELL - Como WhatsApp...');
  
  event.waitUntil(
    Promise.all([
      // Cache App Shell (estructura de la app)
      caches.open(APP_SHELL_CACHE).then(cache => {
        console.log('🏗️ Cacheando App Shell...');
        return cache.addAll([
          '/',
          '/index.html',
          // Todas las rutas SPA se resuelven con index.html
          '/candidatos',
          '/calendario', 
          '/noticias',
          '/tutorial',
          '/marco-legal'
        ]);
      }),
      
      // Cache datos electorales offline
      caches.open(DATA_CACHE).then(cache => {
        console.log('📊 Cacheando datos electorales...');
        // Los datos ya están en los archivos JS, no necesitamos fetch
        return Promise.resolve();
      })
    ])
  );
  
  // Activar inmediatamente - sin esperar
  self.skipWaiting();
});

// 🔄 ACTIVACIÓN: Tomar control total como app nativa
self.addEventListener('activate', (event) => {
  console.log('✅ APP SHELL ACTIVADA - Funcionando como app nativa');
  
  event.waitUntil(
    Promise.all([
      // Limpiar caches antiguos
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName.includes('v1'))
            .map(cacheName => caches.delete(cacheName))
        );
      }),
      // Tomar control inmediato
      self.clients.claim()
    ])
  );
});

// 🚀 INTERCEPCIÓN TOTAL - Como WhatsApp maneja navegación
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 🧭 NAVEGACIÓN SPA: TODO se resuelve con APP SHELL
  if (request.mode === 'navigate') {
    console.log('📱 Navegación APP SHELL:', url.pathname);
    
    event.respondWith(
      // App Shell Strategy - SIEMPRE index.html para SPA
      caches.open(APP_SHELL_CACHE)
        .then(cache => cache.match('/index.html'))
        .then(response => {
          if (response) {
            console.log('✅ APP SHELL SERVIDO:', url.pathname);
            return response;
          }
          
          // Fallback si no hay cache
          console.log('⚠️ Fallback para:', url.pathname);
          return caches.match('/').then(fallback => {
            return fallback || new Response(`
              <!DOCTYPE html>
              <html lang="es">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Elige Perú - Offline</title>
                  <style>
                    body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
                    .offline { color: #003770; }
                  </style>
                </head>
                <body>
                  <div id="root">
                    <div class="offline">
                      <h1>🗳️ Elige Perú</h1>
                      <p>App funcionando offline</p>
                    </div>
                  </div>
                  <script type="module" src="/src/main.jsx"></script>
                </body>
              </html>
            `, {
              status: 200,
              headers: { 'Content-Type': 'text/html; charset=utf-8' }
            });
          });
        })
        .catch(error => {
          console.error('❌ Error en App Shell:', error);
          return new Response('App no disponible', { status: 503 });
        })
    );
    return;
  }
  
  // 📂 RECURSOS ESTÁTICOS: Cache-first strategy
  if (request.destination === 'script' || 
      request.destination === 'style' ||
      request.destination === 'image' ||
      request.destination === 'font') {
    
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            console.log('📦 Recurso desde cache:', request.url);
            return response;
          }
          
          // Si no está en cache, intentar descargar
          return fetch(request)
            .then(response => {
              if (response && response.status === 200) {
                // Cachear para futuras peticiones
                const responseClone = response.clone();
                caches.open(APP_SHELL_CACHE)
                  .then(cache => cache.put(request, responseClone));
              }
              return response;
            })
            .catch(() => {
              console.log('❌ Recurso no disponible offline');
              return new Response('', { status: 404 });
            });
        })
    );
    return;
  }
  
  // 🌐 OTRAS PETICIONES: Intentar red primero, fallback a cache
  event.respondWith(
    fetch(request)
      .catch(() => {
        // Si falla la red, buscar en cache
        return caches.match(request)
          .then(response => response || new Response('Offline', { status: 503 }));
      })
  );
});

// 💬 COMUNICACIÓN CON LA APP
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: 'APP_SHELL_V2' });
  }
});

console.log('🎉 APP SHELL READY - Funciona como WhatsApp offline!');