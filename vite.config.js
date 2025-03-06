import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  // base: '/ecfatum/',
  plugins: [react(), tailwindcss()],
})
