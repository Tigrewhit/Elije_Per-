import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Force offline caching de todas las páginas críticas
const CRITICAL_PAGES = [
  '/',
  '/candidates',
  '/calendar', 
  '/elector-info',
  '/members-info',
  '/legal-framework',
  '/news'
]

export default function OfflineForcer() {
  const location = useLocation()

  useEffect(() => {
    // Forzar cache de páginas críticas en background
    const cachePages = async () => {
      if ('caches' in window) {
        try {
          const cache = await caches.open('offline-pages-v1')
          
          for (const page of CRITICAL_PAGES) {
            try {
              // Verificar si ya está cacheada
              const cached = await cache.match(page)
              if (!cached) {
                // Cachear página
                await cache.add(page)
                console.log('📱 Página cacheada para offline:', page)
              }
            } catch (error) {
              console.log('⚠️ No se pudo cachear:', page)
            }
          }
          
          console.log('✅ Todas las páginas críticas están cacheadas para offline')
        } catch (error) {
          console.log('Cache no disponible')
        }
      }
    }

    // Cachear después de 2 segundos para no interferir con carga inicial
    const timer = setTimeout(cachePages, 2000)
    return () => clearTimeout(timer)
  }, [])

  // También cachear la página actual cuando cambie
  useEffect(() => {
    if ('caches' in window) {
      caches.open('offline-pages-v1').then(cache => {
        cache.add(location.pathname).catch(() => {
          console.log('Página actual ya cacheada')
        })
      })
    }
  }, [location.pathname])

  return null // Componente invisible
}