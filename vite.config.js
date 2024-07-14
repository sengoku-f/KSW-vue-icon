import { fileURLToPath, URL } from "node:url";
import { globSync } from "glob";
import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
const baseConfig = {
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": path.resolve(__dirname),
    },
  },
};

// 将图标分组为块的函数
function getGroupedIconChunks() {
  const iconDirectory = path.resolve(__dirname, "src/icons");
  const iconFiles = globSync(`${iconDirectory}/*.js`);
  const chunks = {};
  const groupSize = 200; //根据需要调整组大小

  for (let i = 0; i < iconFiles.length; i += groupSize) {
    const chunkName = `icons/group${i / groupSize}`;
    const group = iconFiles.slice(i, i + groupSize);
    chunks[chunkName] = group;
  }

  return chunks;
}

const siteConfig = {
  ...baseConfig,
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // if (id.includes('node_modules')) {
          //   // 将 node_modules 中打包的库拆分成单独的 chunk
          //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
          // }
          if (id.includes('src/icons')) {
            const groups = getGroupedIconChunks();
            for (const [group, files] of Object.entries(groups)) {
              if (files.includes(id)) {
                return group;
              }
            }
            return null; //如果没有组匹配，则默认情况
          }
        },
      },
    },
  },
};

// 为了匹配多种路径模式，可以使用数组传递给 `globSync`
function getFileInput() {
  const files = globSync([
    "src/index.js",
    "src/map.js",
    "src/runtime/*.js",
    "src/icons/*.js",
  ]);
  return Object.fromEntries(
    files.map((file) => [
      path.relative(
        // 相对于 `src` 文件夹生成相对路径
        "src",
        file.slice(0, file.length - path.extname(file).length)
      ),
      // 使用 `fileURLToPath` 将文件路径转换为 URL 文件路径
      fileURLToPath(new URL(file, import.meta.url)),
    ])
  );
}

// 获取/icons文件夹下的所有图标名称
function getIconExternals() {
  const iconFiles = globSync(path.resolve(__dirname, "src/icons/*.js"));
  return iconFiles.map(
    (file) => `./icons/${path.basename(file, path.extname(file))}`
  );
}

const packagesConfig = {
  ...baseConfig,
  build: {
    outDir: "packages",
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      input: getFileInput(),
      external: ["vue", "./map", "../runtime", ...getIconExternals()],
      preserveEntrySignatures: "allow-extension",
      output: [
        {
          format: "es",
          dir: "packages/es",
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          globals: {
            vue: "Vue",
          },
        },
        {
          format: "cjs",
          dir: "packages/cjs",
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          globals: {
            vue: "Vue",
          },
        },
      ],
    },
  },
  publicDir: false,
  plugins: [
    // ES模块类型
    dts({
      outDir: "packages/es",
    }),
    // CommonJS类型
    dts({
      outDir: "packages/cjs",
    }),
  ],
};

export default defineConfig(() => {
  if (process.env.BUILD === "packages") {
    return packagesConfig;
  } else {
    return siteConfig;
  }
});
