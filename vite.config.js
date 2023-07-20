import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  pages: {
    index: {
      entry: "./src/view/Home-view.vue",
      template: "public/index.html",
      title: "Home",
      filename: "index.html",
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/monopoly/',
  // build: '../backend/public',
  build: {
    chunkSizeWarningLimit: 3600,
  },
  emptyOutDir: true,
})
