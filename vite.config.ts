import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  plugins: [
    vue(), cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Vue3BarcodeQRcodeReader',
      fileName: 'vue3-barcode-qrcode-reader'
    },
    rollupOptions: {
      external: ['vue', 'vueDemi'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
