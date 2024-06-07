import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const baseConfig = {
  plugins: [
    vue(),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': path.resolve(__dirname)
    }
  },
}

const siteConfig = {
  ...baseConfig,
  build: {
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
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    sourcemap: true,
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
