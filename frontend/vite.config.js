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
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,mp4}'],
        maximumFileSizeToCacheInBytes: 50000000, // 50MB para incluir todo
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              networkTimeoutSeconds: 3,
              plugins: [
                {
                  cacheKeyWillBeUsed: async ({ request }) => {
                    return '/index.html'
                  }
                }
              ]
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          },
          {
            urlPattern: /\.(?:mp4|webm|ogg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'videos-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 7
              }
            }
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
