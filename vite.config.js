import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Netlify expects dist/
    emptyOutDir: true,
  },
  base: '/', // or '/rhea-birthday-webpage/' if deploying to subpath
})
