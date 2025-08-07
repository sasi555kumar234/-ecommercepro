import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ecommerce/', // 👈 this is what you're asking about
  plugins: [react()],
})
