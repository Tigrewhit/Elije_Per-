import { useState, useEffect } from 'react'

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [serviceWorkerReady, setServiceWorkerReady] = useState(false)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Verificar si el Service Worker está activo
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        setServiceWorkerReady(true)
        console.log('✅ Service Worker está listo para trabajar offline')
      })
    }

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return { isOnline, serviceWorkerReady }
}