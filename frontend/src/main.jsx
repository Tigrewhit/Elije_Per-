import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/site.css'
import './i18n'

// Registro de Service Worker personalizado para mejor offline
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/custom-sw.js')
      .then((registration) => {
        console.log('✅ SW registrado:', registration.scope)
        
        registration.addEventListener('updatefound', () => {
          console.log('🔄 Nueva versión del SW disponible')
        })
        
        // Verificar si está listo para offline
        if (registration.active) {
          console.log('📱 App lista para funcionar offline')
        }
      })
      .catch((error) => {
        console.error('❌ Error registrando SW:', error)
      })
  })
  
  // Escuchar cambios de estado del SW
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('🔄 SW actualizado, recargar página')
    window.location.reload()
  })
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
