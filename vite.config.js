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
      }
    ]
  },
  server: {
    allowedHosts: [
      '5ab9-179-49-52-54.ngrok-free.app'
    ]
  }
})
