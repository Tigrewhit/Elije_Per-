import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,mp4,webm,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 100000000, // 100MB
        runtimeCaching: [
          // TODAS las páginas HTML - CACHE FIRST (offline priority)
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'CacheFirst',
            options: {
              cacheName: 'html-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
              }
            }
          },
          // TODOS los archivos JS/CSS - CACHE FIRST
          {
            urlPattern: /\.(?:js|css)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          // TODAS las imágenes - CACHE FIRST
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          // Videos - CACHE FIRST
          {
            urlPattern: /\.(?:mp4|webm|ogg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'videos-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 90
              }
            }
          }
        ],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
        skipWaiting: true,
        clientsClaim: true
      },
      manifest: {
        name: 'Elige Perú - Elecciones 2026',
        short_name: 'Elige Perú',
        description: 'App electoral que funciona sin internet',
        theme_color: '#003770',
        background_color: '#ffffff',
        display: 'standalone',
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
      }
    })
  ],
  server: { 
    port: 5173,
    host: '0.0.0.0' // Permite acceso desde otros dispositivos en la red
  }
})
