import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'native-sw.js',
      manifest: {
        name: 'Elige Perú - Elecciones 2026',
        short_name: 'ElijePeru',
        description: 'App electoral offline - Como WhatsApp pero para votar',
        theme_color: '#003770',
        background_color: '#003770',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        orientation: 'portrait',
        icons: [
          {
            src: '/assets/logos/logo_elije_peru.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any maskable'
          },
          {
            src: '/assets/logos/logo_elije_peru.jpg',
            sizes: '512x512', 
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ],
        categories: ['government', 'news', 'education'],
        shortcuts: [
          {
            name: 'Ver Candidatos',
            short_name: 'Candidatos',
            url: '/candidatos',
            icons: [{ src: '/assets/logos/logo_elije_peru.jpg', sizes: '192x192' }]
          },
          {
            name: 'Calendario Electoral',
            short_name: 'Calendario',
            url: '/calendario',
            icons: [{ src: '/assets/logos/logo_elije_peru.jpg', sizes: '192x192' }]
          }
        ]
      }
    })
  ],
  server: { 
    port: 5173,
    host: '0.0.0.0'
  }
})
