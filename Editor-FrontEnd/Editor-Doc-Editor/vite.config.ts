import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
      '@c':path.resolve(__dirname,'src/components'),
      '@u':path.resolve(__dirname,'src/utils'),
      '@a':path.resolve(__dirname,'src/api'),
    }
  }
})
