// Service Worker OFFLINE-FIRST para PWA Electoral
// ¡NO depende de internet para funcionar!

import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'

const CACHE_NAME = 'elige-peru-offline-v3'
const OFFLINE_PAGE = '/index.html'

// Recursos que deben funcionar SIN INTERNET
const OFFLINE_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/candidates',
  '/calendar', 
  '/elector-info',
  '/members-info',
  '/legal-framework',
  '/news',
  '/offline-status'
]

// Precargar recursos usando Workbox
precacheAndRoute(self.__WB_MANIFEST)
cleanupOutdatedCaches()

// Instalar Service Worker con recursos offline
self.addEventListener('install', (event) => {
  console.log('🚀 SW OFFLINE-FIRST: Instalando...')
  
  event.waitUntil(
    Promise.all([
      // Cachear página principal SIEMPRE
      caches.open(CACHE_NAME).then(cache => {
        console.log('💾 SW: Cacheando recursos offline-first')
        return cache.addAll([OFFLINE_PAGE])
      }),
      // Activar inmediatamente sin esperar
      self.skipWaiting()
    ]).then(() => {
      console.log('✅ SW OFFLINE-FIRST: Listo para funcionar SIN INTERNET')
    })
  )
})

// Activar Service Worker
self.addEventListener('activate', (event) => {
  console.log('🔄 SW: Activando...')
  
  event.waitUntil(
    Promise.all([
      // Limpiar caches antiguos
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ SW: Eliminando cache antiguo:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      }),
      // Tomar control inmediato
      self.clients.claim()
    ]).then(() => {
      console.log('✅ SW: Activado y en control')
    })
  )
})

// Interceptar todas las requests
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Solo manejar requests HTTP/HTTPS
  if (!url.protocol.startsWith('http')) {
    return
  }
  
  // Solo manejar requests GET
  if (request.method !== 'GET') {
    return
  }
  
  event.respondWith(handleRequest(request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  try {
    // 1. Para navegación (HTML pages)
    if (request.mode === 'navigate') {
      console.log('🧭 SW: Navegación a:', url.pathname)
      return await handleNavigation(request)
    }
    
    // 2. Para recursos estáticos
    return await handleAsset(request)
    
  } catch (error) {
    console.error('❌ SW: Error manejando request:', error)
    return await getOfflineFallback(request)
  }
}

async function handleNavigation(request) {
  const url = new URL(request.url)
  
  // OFFLINE-FIRST: Cache primero, NUNCA esperar internet
  console.log('🧭 SW OFFLINE-FIRST: Navegación a:', url.pathname)
  
  // 1. SIEMPRE intentar cache primero (sin tocar red)
  const cachedResponse = await caches.match(OFFLINE_PAGE)
  if (cachedResponse) {
    console.log('📱 SW: Sirviendo desde CACHE (offline-first)')
    return cachedResponse
  }
  
  // 2. Solo si NO existe cache, intentar red (pero rápido)
  try {
    console.log('🌐 SW: Cache vacío, intentando red rápida...')
    const controller = new AbortController()
    setTimeout(() => controller.abort(), 1000) // Solo 1 segundo máximo
    
    const networkResponse = await fetch(OFFLINE_PAGE, {
      signal: controller.signal
    })
    
    if (networkResponse.ok) {
      // Cachear para próximas veces
      const cache = await caches.open(CACHE_NAME)
      cache.put(OFFLINE_PAGE, networkResponse.clone())
      console.log('💾 SW: Cacheado para futuro uso offline')
      return networkResponse
    }
  } catch (error) {
    console.log('⚠️ SW: Red falló o timeout - usando fallback básico')
  }
  
  // 3. Fallback de emergencia
  return new Response(`
    <!DOCTYPE html>
    <html>
      <head><title>Elige Perú - Offline</title></head>
      <body>
        <h1>Elige Perú</h1>
        <p>Aplicación funcionando offline</p>
        <script>window.location.href = '/';</script>
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' }
  })
}

async function handleAsset(request) {
  // OFFLINE-FIRST para todos los assets
  console.log('📦 SW OFFLINE-FIRST: Asset ->', request.url)
  
  // 1. Cache primero SIEMPRE
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    console.log('💾 SW: Asset desde cache (offline-ready)')
    return cachedResponse
  }
  
  // 2. Si no existe, intentar red pero sin bloquear
  try {
    const controller = new AbortController()
    setTimeout(() => controller.abort(), 3000) // 3 segundos máximo
    
    const networkResponse = await fetch(request, {
      signal: controller.signal
    })
    
    if (networkResponse.ok) {
      // Cachear para próximo uso offline
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, networkResponse.clone())
      console.log('🌐 SW: Asset descargado y cacheado')
      return networkResponse
    }
  } catch (error) {
    console.log('📴 SW: Asset no disponible en red, continuando...')
  }
  
  // 3. No bloquear la app si falta un asset
  const url = new URL(request.url)
  const extension = url.pathname.split('.').pop()
  
  // Respuestas offline amigables según tipo
  switch (extension) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'svg':
      return new Response('', { status: 404 }) // Imagen vacía
    case 'mp4':
    case 'webm':
      return new Response('Video no disponible offline', { status: 404 })
    default:
      return new Response('', { status: 404 }) // Continuar sin bloquear
  }
}

async function getOfflineFallback(request) {
  const url = new URL(request.url)
  
  // Para navegación, devolver index.html
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    const fallback = await caches.match('/index.html')
    if (fallback) {
      console.log('🏠 SW: Usando fallback offline')
      return fallback
    }
  }
  
  return new Response('Contenido no disponible offline', {
    status: 503,
    headers: { 'Content-Type': 'text/plain' }
  })
}

// Manejar mensajes desde la aplicación
self.addEventListener('message', (event) => {
  const { type, data } = event.data || {}
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting()
      break
    case 'GET_CACHE_STATUS':
      getCacheStatus().then(status => {
        event.ports[0].postMessage(status)
      })
      break
  }
})

async function getCacheStatus() {
  try {
    const cache = await caches.open(CACHE_NAME)
    const keys = await cache.keys()
    
    return {
      cacheName: CACHE_NAME,
      entries: keys.length,
      resources: keys.map(request => request.url)
    }
  } catch (error) {
    return { error: error.message }
  }
}