import React from 'react'

const OfflineIndicator = ({ isOnline, isServiceWorkerReady, cacheStatus }) => {
  if (isOnline) return null

  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="text-2xl">📱</span>
        </div>
        <div className="ml-3 w-full">
          <h3 className="text-lg font-bold text-amber-800 mb-2">
            Modo Offline Activo
          </h3>
          <div className="text-amber-700 space-y-2">
            <p className="text-sm">
              <strong>Sin conexión a internet.</strong> Los datos se cargan desde el cache local.
            </p>
            
            {isServiceWorkerReady ? (
              <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✅</span>
                  <span className="font-semibold text-green-800">Cache Offline Disponible</span>
                </div>
                <div className="text-sm text-green-700 space-y-1">
                  <p>• Candidatos y cronograma electoral disponibles</p>
                  <p>• Información de electores y miembros de mesa accesible</p>
                  <p>• {cacheStatus?.total || 0} recursos almacenados localmente</p>
                </div>
              </div>
            ) : (
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <span className="text-orange-600 mr-2">⚠️</span>
                  <span className="font-semibold text-orange-800">Funcionalidad Limitada</span>
                </div>
                <p className="text-sm text-orange-700">
                  Cache offline no disponible. Algunas funciones pueden no estar accesibles.
                </p>
              </div>
            )}

            <div className="mt-3 p-2 bg-amber-100 rounded text-xs text-amber-800">
              💡 <strong>Tip:</strong> Cuando recuperes conexión, los datos se sincronizarán automáticamente.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfflineIndicator