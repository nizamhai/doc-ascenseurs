import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import sirv from 'sirv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-old-docs',
      configureServer(server) {
        const oldSitePath = path.resolve(__dirname, '..')
        server.middlewares.use('/docs', sirv(oldSitePath, { dev: true, single: false }))
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  }
})
