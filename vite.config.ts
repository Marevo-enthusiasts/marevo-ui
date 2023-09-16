import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': './src/shared',
      '@components': './src/components',
      '@pages': './src/pages'
    }
  }
})
