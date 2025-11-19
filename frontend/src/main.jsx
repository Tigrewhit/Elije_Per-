import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/site.css'
import './i18n'

// PWA registration automática
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('🔄 Nueva versión disponible')
  },
  onOfflineReady() {
    console.log('📱 App OFFLINE-READY - Funciona sin internet')
    // Mostrar notificación al usuario
    if ('Notification' in window) {
      new Notification('¡App lista para usar sin internet!', {
        icon: '/assets/logos/logo_elije_peru.jpg',
        badge: '/assets/logos/logo_elije_peru.jpg'
      })
    }
  },
  immediate: true
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
