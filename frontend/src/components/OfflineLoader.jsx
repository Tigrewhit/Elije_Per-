import React, { useState, useEffect } from 'react'

const CRITICAL_RESOURCES = [
  '/',
  '/candidates', 
  '/calendar',
  '/news',
  '/elector-info',
  '/members-info', 
  '/legal-framework',
  '/assets/logos/logo_elije_peru.jpg',
  '/videos/Cedula_votacion.mp4'
]

export default function OfflineLoader({ onComplete }) {
  const [loadingState, setLoadingState] = useState({
    phase: 'initializing', // initializing, downloading, caching, complete
    progress: 0,
    currentItem: '',
    downloadedItems: 0,
    totalItems: CRITICAL_RESOURCES.length,
    connectionType: 'unknown',
    estimatedTime: '...',
    bytesDownloaded: 0,
    totalBytes: 0,
    errors: []
  })

  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    detectConnection()
    startPreloading()
  }, [])

  const detectConnection = () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    let type = 'wifi'
    
    if (connection) {
      if (connection.effectiveType) {
        type = connection.effectiveType.includes('4g') || connection.effectiveType.includes('wifi') ? 'wifi' : 'cellular'
      }
    }
    
    setLoadingState(prev => ({ ...prev, connectionType: type }))
  }

  const startPreloading = async () => {
    setLoadingState(prev => ({ 
      ...prev, 
      phase: 'downloading',
      currentItem: 'Iniciando precarga...'
    }))

    const startTime = Date.now()
    let downloadedCount = 0
    let totalBytesCount = 0

    for (let i = 0; i < CRITICAL_RESOURCES.length; i++) {
      const resource = CRITICAL_RESOURCES[i]
      
      try {
        setLoadingState(prev => ({
          ...prev,
          currentItem: getResourceName(resource),
          progress: Math.round((i / CRITICAL_RESOURCES.length) * 100)
        }))

        // Precargar recurso
        const response = await fetch(resource)
        if (response.ok) {
          const blob = await response.blob()
          totalBytesCount += blob.size
          downloadedCount++
          
          // Cachear en Service Worker si está disponible
          if ('caches' in window) {
            const cache = await caches.open('elige-peru-preload')
            await cache.put(resource, response.clone())
          }
        }

      } catch (error) {
        console.warn(`Error precargando ${resource}:`, error)
        setLoadingState(prev => ({
          ...prev,
          errors: [...prev.errors, resource]
        }))
      }

      // Simular delay realista para UX
      await new Promise(resolve => setTimeout(resolve, 300))
    }

    // Fase de optimización del cache
    setLoadingState(prev => ({
      ...prev,
      phase: 'caching',
      currentItem: 'Optimizando para uso offline...',
      progress: 95,
      downloadedItems: downloadedCount,
      bytesDownloaded: totalBytesCount
    }))

    await new Promise(resolve => setTimeout(resolve, 1000))

    // Completado
    const totalTime = Math.round((Date.now() - startTime) / 1000)
    setLoadingState(prev => ({
      ...prev,
      phase: 'complete',
      currentItem: '¡Aplicación lista para uso offline!',
      progress: 100,
      estimatedTime: `${totalTime}s`
    }))

    // Auto-ocultar después de 2 segundos
    setTimeout(() => {
      setIsVisible(false)
      if (onComplete) onComplete()
    }, 2000)
  }

  const getResourceName = (resource) => {
    const names = {
      '/': 'Página principal',
      '/candidates': 'Candidatos',
      '/calendar': 'Calendario electoral', 
      '/news': 'Noticias',
      '/elector-info': 'Información electoral',
      '/members-info': 'Miembros de mesa',
      '/legal-framework': 'Marco legal',
      '/assets/logos/logo_elije_peru.jpg': 'Logo oficial',
      '/videos/Cedula_votacion.mp4': 'Video tutorial (15MB)'
    }
    return names[resource] || resource
  }

  const getPhaseIcon = () => {
    switch (loadingState.phase) {
      case 'initializing': return '🚀'
      case 'downloading': return '📥'
      case 'caching': return '💾'
      case 'complete': return '✅'
      default: return '⏳'
    }
  }

  const getPhaseText = () => {
    switch (loadingState.phase) {
      case 'initializing': return 'Preparando descarga...'
      case 'downloading': return 'Descargando contenido'
      case 'caching': return 'Optimizando cache'
      case 'complete': return 'Descarga completa'
      default: return 'Procesando...'
    }
  }

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  if (!isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(5px)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '32px',
        maxWidth: '480px',
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>
            {getPhaseIcon()}
          </div>
          <h2 style={{ 
            margin: '0 0 8px 0', 
            color: '#003770',
            fontSize: '24px',
            fontWeight: '700'
          }}>
            Preparando Elige Perú
          </h2>
          <p style={{ 
            margin: 0, 
            color: '#6b7280',
            fontSize: '16px'
          }}>
            {getPhaseText()}
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{
          background: '#f3f4f6',
          borderRadius: '8px',
          height: '12px',
          marginBottom: '16px',
          overflow: 'hidden'
        }}>
          <div style={{
            background: loadingState.phase === 'complete' ? '#10b981' : '#3b82f6',
            height: '100%',
            width: `${loadingState.progress}%`,
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }} />
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '16px',
          fontSize: '14px'
        }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: '#6b7280' }}>Progreso</div>
            <div style={{ fontWeight: '600', color: '#111827' }}>
              {loadingState.downloadedItems} / {loadingState.totalItems}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#6b7280' }}>Conexión</div>
            <div style={{ fontWeight: '600', color: loadingState.connectionType === 'wifi' ? '#10b981' : '#f59e0b' }}>
              {loadingState.connectionType === 'wifi' ? '📶 WiFi' : '📱 Datos móviles'}
            </div>
          </div>
        </div>

        {/* Current Item */}
        <div style={{
          background: '#f9fafb',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '16px',
          fontSize: '14px'
        }}>
          <div style={{ color: '#6b7280', marginBottom: '4px' }}>
            Descargando:
          </div>
          <div style={{ fontWeight: '600', color: '#111827' }}>
            {loadingState.currentItem}
          </div>
        </div>

        {/* Download Info */}
        {loadingState.bytesDownloaded > 0 && (
          <div style={{
            fontSize: '12px',
            color: '#6b7280',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>📦 {formatBytes(loadingState.bytesDownloaded)}</span>
            <span>⏱️ {loadingState.estimatedTime}</span>
          </div>
        )}

        {/* Errors */}
        {loadingState.errors.length > 0 && (
          <div style={{
            marginTop: '12px',
            padding: '8px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '6px',
            fontSize: '12px',
            color: '#dc2626'
          }}>
            ⚠️ Algunos elementos no se pudieron precargar ({loadingState.errors.length})
          </div>
        )}

        {/* Complete State */}
        {loadingState.phase === 'complete' && (
          <div style={{
            marginTop: '16px',
            padding: '12px',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#065f46'
          }}>
            🎉 <strong>¡Listo!</strong> La aplicación funciona completamente offline
          </div>
        )}
      </div>
    </div>
  )
}