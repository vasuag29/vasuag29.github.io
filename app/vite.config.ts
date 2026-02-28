import { defineConfig } from 'vite'

// Builds straight into /docs so GitHub Pages can serve it.
export default defineConfig({
  base: '/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
