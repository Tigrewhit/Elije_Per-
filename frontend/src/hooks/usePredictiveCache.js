import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Mapeo de rutas relacionadas para precarga predictiva
const RELATED_ROUTES = {
  '/': ['/candidates', '/calendar', '/elector-info'],
  '/candidates': ['/legal-framework', '/calendar', '/news'],
  '/calendar': ['/candidates', '/news', '/elector-info'],
  '/news': ['/candidates', '/legal-framework'],
  '/elector-info': ['/members-info', '/legal-framework', '/calendar'],
  '/members-info': ['/elector-info', '/legal-framework'],
  '/legal-framework': ['/candidates', '/news']
}

// Patrones de navegación comunes
const NAVIGATION_PATTERNS = [
  { from: '/', to: '/candidates', probability: 0.8 },
  { from: '/candidates', to: '/legal-framework', probability: 0.6 },
  { from: '/', to: '/elector-info', probability: 0.7 },
  { from: '/elector-info', to: '/members-info', probability: 0.5 },
  { from: '/calendar', to: '/news', probability: 0.4 }
]

export function usePredictiveCache() {
  const location = useLocation()

  useEffect(() => {
    // Solo ejecutar si Service Worker está disponible
    if (!('serviceWorker' in navigator) || !('caches' in window)) {
      return
    }

    predictAndPrefetch()
  }, [location.pathname])

  const predictAndPrefetch = async () => {
    const currentPath = location.pathname
    
    try {
      // 1. Precargar rutas relacionadas
      const relatedRoutes = RELATED_ROUTES[currentPath] || []
      
      // 2. Predecir próximas rutas basado en patrones
      const predictedRoutes = NAVIGATION_PATTERNS
        .filter(pattern => pattern.from === currentPath)
        .sort((a, b) => b.probability - a.probability)
        .map(pattern => pattern.to)

      // 3. Combinar rutas y eliminar duplicados
      const routesToPrefetch = [...new Set([...relatedRoutes, ...predictedRoutes])]
      
      // 4. Precargar rutas con prioridad
      for (const route of routesToPrefetch.slice(0, 3)) { // Solo las 3 más probables
        await prefetchRoute(route)
      }

      // 5. Guardar estadísticas de navegación
      trackNavigation(currentPath)

    } catch (error) {
      console.debug('Error en cache predictivo:', error)
    }
  }

  const prefetchRoute = async (route) => {
    try {
      // Verificar si ya está en cache
      const cache = await caches.open('predictive-cache')
      const cached = await cache.match(route)
      
      if (cached) {
        return // Ya está cacheado
      }

      // Precargar con baja prioridad para no interferir con navegación actual
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000) // 5s timeout

      const response = await fetch(route, {
        signal: controller.signal,
        priority: 'low' // Prioridad baja
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        await cache.put(route, response.clone())
        console.debug(`✅ Ruta ${route} pre-cargada predictivamente`)
      }

    } catch (error) {
      if (error.name !== 'AbortError') {
        console.debug(`⚠️ Error precargando ${route}:`, error)
      }
    }
  }

  const trackNavigation = (path) => {
    // Guardar estadísticas de navegación para mejorar predicciones
    const stats = JSON.parse(localStorage.getItem('navigation-stats') || '{}')
    stats[path] = (stats[path] || 0) + 1
    localStorage.setItem('navigation-stats', JSON.stringify(stats))
  }
}

// Hook para estadísticas de cache
export function useCacheStats() {
  const getCacheInfo = async () => {
    if (!('caches' in window)) return null

    try {
      const cacheNames = await caches.keys()
      let totalSize = 0
      let totalEntries = 0
      const cacheDetails = []

      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName)
        const keys = await cache.keys()
        
        cacheDetails.push({
          name: cacheName,
          entries: keys.length,
          urls: keys.map(request => request.url)
        })
        
        totalEntries += keys.length
      }

      return {
        totalCaches: cacheNames.length,
        totalEntries,
        caches: cacheDetails,
        navigationStats: JSON.parse(localStorage.getItem('navigation-stats') || '{}')
      }
    } catch (error) {
      console.error('Error obteniendo estadísticas de cache:', error)
      return null
    }
  }

  const clearPredictiveCache = async () => {
    try {
      await caches.delete('predictive-cache')
      localStorage.removeItem('navigation-stats')
      console.log('✅ Cache predictivo limpiado')
    } catch (error) {
      console.error('Error limpiando cache predictivo:', error)
    }
  }

  return { getCacheInfo, clearPredictiveCache }
}

export default function PredictiveCacheProvider({ children }) {
  usePredictiveCache()
  return children
}