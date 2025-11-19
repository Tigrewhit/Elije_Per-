import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'inline',
      strategies: 'injectManifest',
      srcDir: 'public',
      filename: 'custom-sw.js',
      includeAssets: ['favicon.ico', 'assets/logos/logo_elije_peru.jpg', '_redirects'],
      manifest: {
        name: 'Elige Perú - Elecciones Generales 2026',
        short_name: 'Elige Perú',
        description: 'Aplicación electoral offline-first. Funciona completamente sin internet para consultar candidatos, calendario y normativa electoral.',
        theme_color: '#003770',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        categories: ['government', 'education', 'politics'],
        lang: 'es-PE',
        icons: [
          {
            src: 'assets/logos/logo_elije_peru.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any maskable'
          },
          {
            src: 'assets/logos/logo_elije_peru.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Candidatos',
            short_name: 'Candidatos',
            description: 'Ver candidatos presidenciales offline',
            url: '/candidates',
            icons: [{'src': 'assets/logos/logo_elije_peru.jpg', 'sizes': '96x96'}]
          },
          {
            name: 'Calendario Electoral',
            short_name: 'Calendario',
            description: 'Cronograma electoral offline',
            url: '/calendar',
            icons: [{'src': 'assets/logos/logo_elije_peru.jpg', 'sizes': '96x96'}]
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  server: { 
    port: 5173,
    host: '0.0.0.0' // Permite acceso desde otros dispositivos en la red
  }
})
