import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kavya_portfolio/', // 👈 this is required for GitHub Pages
})
