import React from 'react'
import { useOffline } from '../hooks/useOffline'

const OfflineTestPage = () => {
  const { 
    isOnline, 
    isServiceWorkerReady, 
    cacheStatus, 
    clearCache,
    updateCacheStatus,
    preloadCriticalData 
  } = useOffline()

  const handleClearCache = async () => {
    const success = await clearCache()
    if (success) {
      alert('Cache limpiado correctamente')
    } else {
      alert('Error limpiando cache')
    }
  }

  const handlePreloadData = async () => {
    await preloadCriticalData()
    await updateCacheStatus()
    alert('Datos precargados en cache')
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        🧪 Prueba de Funcionalidad Offline
      </h1>

      {/* Estado de Conectividad */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">Estado de Conexión</h3>
          <div className={`text-2xl font-black ${isOnline ? 'text-green-600' : 'text-orange-600'}`}>
            {isOnline ? '🌐 ONLINE' : '📱 OFFLINE'}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {isOnline ? 'Conectado a internet' : 'Sin conexión a internet'}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <h3 className="font-bold text-lg mb-2">Service Worker</h3>
          <div className={`text-2xl font-black ${isServiceWorkerReady ? 'text-green-600' : 'text-gray-400'}`}>
            {isServiceWorkerReady ? '✅ ACTIVO' : '⏳ PENDIENTE'}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {isServiceWorkerReady ? 'Cache offline disponible' : 'Inicializando...'}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
          <h3 className="font-bold text-lg mb-2">Cache Status</h3>
          <div className="text-2xl font-black text-indigo-600">
            📦 {cacheStatus?.total || 0}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Recursos en cache local
          </p>
          {cacheStatus && (
            <div className="text-xs text-gray-500 mt-1">
              Estáticos: {cacheStatus.static} | Dinámicos: {cacheStatus.dynamic}
            </div>
          )}
        </div>
      </div>

      {/* Instrucciones para Pruebas */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <h3 className="font-bold text-blue-900 mb-4">🧪 Instrucciones para Probar Offline</h3>
        <ol className="list-decimal list-inside space-y-2 text-blue-800">
          <li>Verifica que el Service Worker esté activo (✅ ACTIVO arriba)</li>
          <li>Navega a <strong>Candidatos</strong> y <strong>Calendario</strong> para precargar datos</li>
          <li>En DevTools → Application → Service Workers → Offline (activar checkbox)</li>
          <li>Alternativamente: DevTools → Network → Throttling → Offline</li>
          <li>Recarga la página y navega entre secciones</li>
          <li>¡Debería funcionar completamente offline! 🚀</li>
        </ol>
      </div>

      {/* Controles de Cache */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-bold text-lg mb-4">⚙️ Controles de Cache</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={handlePreloadData}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            📦 Precargar Datos
          </button>
          
          <button 
            onClick={updateCacheStatus}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            🔄 Actualizar Estado
          </button>
          
          <button 
            onClick={handleClearCache}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            🗑️ Limpiar Cache
          </button>
        </div>
      </div>

      {/* Información Técnica */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">📋 Información Técnica</h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>Service Worker:</strong> {isServiceWorkerReady ? 'Registrado y activo' : 'No disponible'}</p>
          <p><strong>Cache API:</strong> {'caches' in window ? 'Soportado' : 'No soportado'}</p>
          <p><strong>Navigator Online:</strong> {navigator.onLine ? 'Online' : 'Offline'}</p>
          <p><strong>Local Storage:</strong> {'localStorage' in window ? 'Disponible' : 'No disponible'}</p>
        </div>
      </div>
    </div>
  )
}

export default OfflineTestPage