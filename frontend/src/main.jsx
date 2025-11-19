import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/site.css'
import './i18n'

// 🏗️ APP SHELL + ALMACENAMIENTO OFFLINE
import { registerSW } from 'virtual:pwa-register'
import { initOfflineData } from './services/offlineStorage'

// 📱 REGISTRO PWA NATIVA
const updateSW = registerSW({
  onNeedRefresh() {
    console.log('🔄 Nueva versión de App Shell disponible')
  },
  onOfflineReady() {
    console.log('🎉 APP SHELL LISTA - Funciona como WhatsApp')
    
    // Inicializar datos offline cuando la app esté lista
    initOfflineData().then(success => {
      if (success) {
        console.log('📦 DATOS OFFLINE CARGADOS - App 100% autónoma');
        
        // Notificación de app nativa lista
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('🗳️ Elige Perú - App Nativa Instalada', {
            body: 'Funciona completamente sin internet. Navega libremente!',
            icon: '/assets/logos/logo_elije_peru.jpg',
            badge: '/assets/logos/logo_elije_peru.jpg',
            tag: 'app-ready'
          })
        }
      }
    });
  },
  immediate: true
})

// 🔔 PERMISOS DE NOTIFICACIÓN (para feedback de instalación)
if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission().then(permission => {
    console.log('Permisos de notificación:', permission);
  });
}

// 🧪 DEBUG: Verificar que es PWA real
if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
  console.log('✅ EJECUTANDOSE COMO PWA NATIVA - No es acceso directo');
} else {
  console.log('⚠️ Ejecutándose en navegador - Instalar como PWA para mejor experiencia');
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
