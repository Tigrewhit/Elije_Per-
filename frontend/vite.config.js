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
        short_name: 'Elige Perú',
        description: 'App electoral que funciona 100% offline',
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
    host: '0.0.0.0'
  }
})
