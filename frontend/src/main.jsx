import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/site.css'
import './i18n'

// 🎯 SERVICE WORKER NATIVO - APP 100% OFFLINE
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('🔄 Nueva versión de la app nativa disponible')
  },
  onOfflineReady() {
    console.log('🎉 APP NATIVA LISTA - Funciona como WhatsApp offline')
    
    // Notificación que la app es completamente offline
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('¡App instalada! Ya funciona sin internet', {
        body: 'Navega entre páginas sin conexión como una app nativa',
        icon: '/assets/logos/logo_elije_peru.jpg',
        badge: '/assets/logos/logo_elije_peru.jpg'
      })
    }
    
    // Log para debug
    console.log('✅ ENRUTAMIENTO LOCAL ACTIVADO - No necesita servidor')
  },
  immediate: true
})

// Pedir permisos de notificación
if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission()
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
