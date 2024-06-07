import { fileURLToPath, URL } from 'node:url'
import { globSync } from 'glob';
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
      '@': fileURLToPath(new URL('./src', import.meta.url))
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

// const packagesConfig = {
//   ...baseConfig,
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, './src/index.js'),
//       name: 'index',
//       formats: ['es', 'cjs'],
//       fileName: (format) => `index.${format}.js`
//     },
//     sourcemap: true,
//     rollupOptions: {
//       external: ['vue'],
//       output: {
//         preserveModules: true,
//         globals: {
//           vue: 'Vue'
//         }
//       }
//     },
//     outDir: 'packages',
//     emptyOutDir: true,
//   }
// }

// 为了匹配多种路径模式，可以使用数组传递给 `globSync`
const files = globSync(['src/index.js', 'src/icons/*.js']);
const inputEntries = Object.fromEntries(
  files.map(file => [
    path.relative(
      // 相对于 `src` 文件夹生成相对路径
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    // 使用 `fileURLToPath` 将文件路径转换为 URL 文件路径
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const packagesConfig = {
  ...baseConfig,
  build: {
    outDir: 'packages',
    emptyOutDir: true,
    // sourcemap: true,
    rollupOptions: {
      // input: {
      //   index: path.resolve(__dirname, './src/index.js'),
      //   // map: path.resolve(__dirname, './src/map.js'),
      //   'runtime/index': path.resolve(__dirname, './src/runtime/index.js'),
      // },
      input: inputEntries,
      external: ['vue'],
      preserveEntrySignatures: 'strict',
      output: [
        {
          format: 'es',
          dir: 'packages/es',
          entryFileNames: '[name].js',
          preserveModules: true,
          globals: {
            vue: 'Vue'
          }
        },
        {
          format: 'cjs',
          dir: 'packages/cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          globals: {
            vue: 'Vue'
          }
        }
      ]
    },
  },
}

export default process.env.BUILD === 'packages' ? packagesConfig : siteConfig
