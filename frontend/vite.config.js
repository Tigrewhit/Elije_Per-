import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'assets/logos/logo_elije_peru.jpg'],
      manifest: {
        name: 'Elige Perú - Elecciones Generales 2026',
        short_name: 'Elige Perú',
        description: 'Aplicación oficial para las Elecciones Generales 2026 del Perú. Información electoral, candidatos y calendario. Funciona online y offline.',
        theme_color: '#003770',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'assets/logos/logo_elije_peru.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'assets/logos/logo_elije_peru.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg}'],
        globIgnores: ['**/videos/**'],
        maximumFileSizeToCacheInBytes: 5000000, // 5MB
        navigateFallback: '/index.html',
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true
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
