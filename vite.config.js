import { defineConfig } from 'vite'
export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist', // output will be repo/dist
    emptyOutDir: true
  }
})
