import { useState, useEffect, useCallback } from 'react'

export function useOffline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [swRegistration, setSwRegistration] = useState(null)
  const [cacheStatus, setCacheStatus] = useState(null)
  const [isServiceWorkerReady, setIsServiceWorkerReady] = useState(false)

  // Detectar cambios en conectividad
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
      console.log('🌐 Conexión restaurada')
    }

    function handleOffline() {
      setIsOnline(false)
      console.log('📱 Modo offline activado')
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Registrar Service Worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      registerServiceWorker()
    } else {
      console.warn('⚠️ Service Workers no soportados en este navegador')
    }
  }, [])

  const registerServiceWorker = async () => {
    try {
      console.log('🔧 Registrando Service Worker...')
      
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      })
      
      setSwRegistration(registration)
      
      // Verificar si ya hay un SW activo
      if (registration.active) {
        setIsServiceWorkerReady(true)
        console.log('✅ Service Worker ya activo')
      }
      
      // Escuchar cuando se instale un nuevo SW
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'activated') {
            setIsServiceWorkerReady(true)
            console.log('✅ Service Worker activado')
            
            // Precargar datos importantes
            preloadCriticalData()
          }
        })
      })
      
      // Si ya está instalado
      if (registration.active) {
        setIsServiceWorkerReady(true)
        preloadCriticalData()
      }
      
    } catch (error) {
      console.error('❌ Error registrando Service Worker:', error)
    }
  }

  // Precargar datos críticos en cache
  const preloadCriticalData = useCallback(async () => {
    if (!swRegistration || !swRegistration.active) return
    
    try {
      // Importar datos críticos
      const { CALENDAR_DATA, CANDIDATES_DATA } = await import('../data/electoralData.js')
      
      // Enviar al Service Worker para cachear
      swRegistration.active.postMessage({
        type: 'CACHE_ELECTORAL_DATA',
        data: {
          candidates: CANDIDATES_DATA,
          calendar: CALENDAR_DATA
        }
      })
      
      console.log('📦 Datos electorales enviados al cache')
      
      // Actualizar estado del cache
      updateCacheStatus()
      
    } catch (error) {
      console.error('❌ Error precargando datos:', error)
    }
  }, [swRegistration])

  // Actualizar estado del cache
  const updateCacheStatus = useCallback(async () => {
    if (!swRegistration || !swRegistration.active) return
    
    try {
      const messageChannel = new MessageChannel()
      
      messageChannel.port1.onmessage = (event) => {
        setCacheStatus(event.data)
      }
      
      swRegistration.active.postMessage({
        type: 'GET_CACHE_STATUS'
      }, [messageChannel.port2])
      
    } catch (error) {
      console.error('❌ Error obteniendo estado del cache:', error)
    }
  }, [swRegistration])

  // Limpiar cache manualmente
  const clearCache = useCallback(async () => {
    if (!swRegistration || !swRegistration.active) return false
    
    try {
      const messageChannel = new MessageChannel()
      
      return new Promise((resolve) => {
        messageChannel.port1.onmessage = (event) => {
          resolve(event.data.success)
          updateCacheStatus()
        }
        
        swRegistration.active.postMessage({
          type: 'CLEAR_CACHE'
        }, [messageChannel.port2])
      })
      
    } catch (error) {
      console.error('❌ Error limpiando cache:', error)
      return false
    }
  }, [swRegistration, updateCacheStatus])

  // Verificar si los datos están disponibles offline
  const isDataAvailableOffline = useCallback(async (dataType) => {
    if (isOnline) return true
    
    try {
      const cache = await caches.open('elige-peru-dynamic-v1')
      const response = await cache.match(`/api/${dataType}`)
      return !!response
    } catch {
      return false
    }
  }, [isOnline])

  // Obtener datos con fallback offline
  const getDataWithFallback = useCallback(async (dataType, fallbackData) => {
    try {
      if (isOnline) {
        // Si hay conexión, intentar obtener datos frescos
        // (aquí irían las llamadas a APIs reales si las hubiera)
        return fallbackData
      } else {
        // Offline: buscar en cache
        const cache = await caches.open('elige-peru-dynamic-v1')
        const response = await cache.match(`/api/${dataType}`)
        
        if (response) {
          const data = await response.json()
          return data
        } else {
          // Si no hay datos en cache, usar fallback local
          return fallbackData
        }
      }
    } catch (error) {
      console.error(`❌ Error obteniendo datos para ${dataType}:`, error)
      return fallbackData
    }
  }, [isOnline])

  return {
    // Estado
    isOnline,
    isServiceWorkerReady,
    cacheStatus,
    swRegistration,
    
    // Métodos
    clearCache,
    updateCacheStatus,
    isDataAvailableOffline,
    getDataWithFallback,
    preloadCriticalData
  }
}