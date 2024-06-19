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

// 为了匹配多种路径模式，可以使用数组传递给 `globSync`
function getFileInput() {
  const files = globSync(['src/index.js', 'src/map.js', 'src/runtime/*.js', 'src/icons/*.js']);
  return Object.fromEntries(
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
}

// 获取/icons文件夹下的所有图标名称
function getIconExternals() {
  const iconFiles = globSync(path.resolve(__dirname, 'src/icons/*.js'));
  return iconFiles.map(file => `./icons/${path.basename(file, path.extname(file))}`);
}

const packagesConfig = {
  ...baseConfig,
  build: {
    outDir: 'packages',
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      input: getFileInput(),
      external: ['vue', './map', '../runtime', ...getIconExternals()],
      preserveEntrySignatures: 'allow-extension',
      output: [
        {
          format: 'es',
          dir: 'packages/es',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          globals: {
            vue: 'Vue',
          }
        },
        {
          format: 'cjs',
          dir: 'packages/cjs',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          globals: {
            vue: 'Vue'
          }
        }
      ]
    },
  },
}

export default () => {
  if (process.env.BUILD === 'packages') {
    return packagesConfig;
  } else {
    return siteConfig;
  }
};