import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/site.css'
import './i18n'

// PWA registration handled automatically by vite-plugin-pwa
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('Nueva versión disponible, recarga la página para actualizar')
  },
  onOfflineReady() {
    console.log('App lista para funcionar offline')
  },
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
