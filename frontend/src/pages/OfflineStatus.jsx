import React, { useState, useEffect } from 'react'
import { useOnlineStatus } from '../hooks/useOnlineStatus'
import { useCacheStats } from '../hooks/usePredictiveCache'

export default function OfflineStatus() {
  const { isOnline, serviceWorkerReady } = useOnlineStatus()
  const { getCacheInfo, clearPredictiveCache } = useCacheStats()
  const [cacheInfo, setCacheInfo] = useState(null)
  const [predictiveStats, setPredictiveStats] = useState(null)

  useEffect(() => {
    checkCacheStatus()
  }, [])

  const checkCacheStatus = async () => {
    const info = await getCacheInfo()
    if (info) {
      setCacheInfo({
        caches: info.totalCaches,
        totalFiles: info.totalEntries,
        cacheNames: info.caches.map(c => c.name),
        details: info.caches
      })
      setPredictiveStats(info.navigationStats)
    }
  }

  const clearCache = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys()
        await Promise.all(cacheNames.map(name => caches.delete(name)))
        setCacheInfo(null)
        alert('Cache limpiado correctamente')
      } catch (error) {
        console.error('Error clearing cache:', error)
        alert('Error al limpiar cache')
      }
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#003770', marginBottom: '20px' }}>Estado Offline - Prueba PWA</h1>
      
      <div style={{ 
        display: 'grid', 
        gap: '20px', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' 
      }}>
        
        {/* Estado de Conexión */}
        <div style={{
          background: isOnline ? '#d4edda' : '#f8d7da',
          border: `2px solid ${isOnline ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: isOnline ? '#155724' : '#721c24' }}>
            📡 Estado de Conexión
          </h3>
          <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>
            {isOnline ? '🟢 ONLINE' : '🔴 OFFLINE'}
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            Navigator.onLine: {navigator.onLine ? 'true' : 'false'}
          </p>
        </div>

        {/* Estado del Service Worker */}
        <div style={{
          background: serviceWorkerReady ? '#d4edda' : '#fff3cd',
          border: `2px solid ${serviceWorkerReady ? '#c3e6cb' : '#ffeaa7'}`,
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: serviceWorkerReady ? '#155724' : '#856404' }}>
            ⚙️ Service Worker
          </h3>
          <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>
            {serviceWorkerReady ? '✅ LISTO' : '⏳ CARGANDO'}
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            Soporte: {'serviceWorker' in navigator ? 'Sí' : 'No'}
          </p>
        </div>

        {/* Información de Cache */}
        <div style={{
          background: '#e2e3f1',
          border: '2px solid #c5c7db',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#363740' }}>
            💾 Cache Status
          </h3>
          {cacheInfo ? (
            <div>
              <p style={{ margin: '5px 0' }}>
                <strong>Caches:</strong> {cacheInfo.caches}
              </p>
              <p style={{ margin: '5px 0' }}>
                <strong>Archivos:</strong> {cacheInfo.totalFiles}
              </p>
              <details style={{ marginTop: '10px' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Ver caches</summary>
                <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                  {cacheInfo.cacheNames.map((name, index) => (
                    <li key={index} style={{ fontSize: '12px', margin: '2px 0' }}>
                      {name}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ) : (
            <p style={{ margin: '5px 0' }}>Cargando información...</p>
          )}
        </div>
      </div>

      {/* Controles de Prueba */}
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#495057' }}>🧪 Pruebas Offline</h3>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={checkCacheStatus}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            🔄 Actualizar Cache Info
          </button>

          <button
            onClick={clearCache}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            🗑️ Limpiar Cache
          </button>

          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            🔄 Recargar Página
          </button>
        </div>

        <div style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
          <strong>Instrucciones de prueba:</strong>
          <ol style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li>Asegúrate que el Service Worker esté listo (✅ LISTO)</li>
            <li>Navega por diferentes páginas de la app</li>
            <li>Desconecta tu internet o activa modo avión</li>
            <li>Recarga esta página - debería funcionar offline</li>
            <li>Intenta navegar a otras páginas que ya visitaste</li>
          </ol>
        </div>
      </div>

      {/* Información Técnica */}
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        background: '#f1f3f4',
        borderRadius: '6px',
        fontSize: '12px',
        color: '#5f6368'
      }}>
        <strong>Información Técnica:</strong><br/>
        User Agent: {navigator.userAgent.substring(0, 80)}...<br/>
        URL: {window.location.href}<br/>
        Timestamp: {new Date().toLocaleString()}
      </div>
    </div>
  )
}