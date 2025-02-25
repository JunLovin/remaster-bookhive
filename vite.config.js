import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const __dirname = path.resolve()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/styles')
      },
      {
        find: '@public',
        replacement: path.resolve(__dirname, 'public')
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, 'src/api')
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks')
      },
      {
        find: '@modals',
        replacement: path.resolve(__dirname, 'src/modals')
      }
    ]
  },
  server: {
    allowedHosts: [
      ''
    ]
  }
})
