import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const baseConfig = {
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
}

const siteConfig = {
  ...baseConfig,
  build: {
    base: '/KSW-vue-icon/',
    outDir: 'dist',
    emptyOutDir: true,
  }
}

const packagesConfig = {
  ...baseConfig,
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.js'),
      name: 'index',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    outDir: 'packages',
    emptyOutDir: true,
  }
}

export default process.env.BUILD === 'packages' ? packagesConfig : siteConfig
