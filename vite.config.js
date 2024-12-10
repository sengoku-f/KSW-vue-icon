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
  const iconFiles = globSync(`${iconDirectory}/*/*.js`);
  const chunks = {};
  const groupSize = 150; //根据需要调整组大小

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
      input: {
        main: path.resolve(__dirname, "index.html"),
        iframe: path.resolve(__dirname, "iframe.html"),
      },
      output: {
        manualChunks(id) {
          // if (id.includes('node_modules')) {
          //   // 将 node_modules 中打包的库拆分成单独的 chunk
          //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
          // }
          const utilsKeywords = [
            "runtime",
            "overlayscrollbars",
            "icons-base",
            "icons-guangfa",
            "package",
            "vue-clipboard3",
          ];

          if (utilsKeywords.some((keyword) => id.includes(keyword))) {
            return `utils`;
          }

          const mainKeywords = ["src/main", "vite"];

          if (mainKeywords.some((keyword) => id.includes(keyword))) {
            return `main`;
          }
          console.log("ID:", id);
          if (id.includes("src/icons")) {
            const groups = getGroupedIconChunks();
            // console.log('Groups:', groups);
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
    // "icons-*.js",
    "src/index.js",
    "src/map.js",
    "src/runtime/*.js",
    "src/icons/*/*.js",
  ]);
  return Object.fromEntries(
    files.map((file) => {
      // 判断是否是根目录的文件
      const isRootFile = path.isAbsolute(file) || !file.startsWith("src/");
      const relativePath = isRootFile
        ? path.basename(file, path.extname(file)) // 根目录文件使用文件名作为键
        : path.relative(
            // 相对于 `src` 文件夹生成相对路径
            "src",
            file.slice(0, file.length - path.extname(file).length)
          );

      return [
        relativePath,
        // 使用 `fileURLToPath` 将文件路径转换为 URL 文件路径
        fileURLToPath(new URL(file, import.meta.url)),
      ];
    })
  );
}

// 获取/icons文件夹下的所有图标名称
function getIconExternals() {
  // 同时匹配文件和目录
  const allIcons = globSync(["src/icons/*", "src/icons/*/*.js"], {
    ignore: {
      ignored: (p) => /index\.js$/.test(p.name),
    },
  });
  // 统一格式化路径
  return allIcons.map((file) => {
    // 如果是文件，使用 path.parse 取文件名；如果是目录，用相对路径
    return file.endsWith(".js")
      ? `./${path.parse(file).name}`
      : `./${path.relative("src", file)}`;
  });
}

// 默认参数
const baseOutputConfig = {
  entryFileNames: "[name].js",
  chunkFileNames: "[name].js",
  globals: {
    vue: "Vue",
  },
  manualChunks: {
    gsap: ["gsap"],
  },
};

const packagesConfig = {
  ...baseConfig,
  // esbuild: {
  //   minifySyntax: false,
  //   minifyWhitespace: false,
  //   minifyIdentifiers: false,
  // },
  build: {
    outDir: "packages",
    emptyOutDir: true,
    // minify: true,
    rollupOptions: {
      input: getFileInput(),
      external: ["vue", "./map", "../../runtime", ...getIconExternals()],
      preserveEntrySignatures: "allow-extension",
      output: [
        {
          format: "es",
          dir: "packages/es",
          ...baseOutputConfig,
        },
        {
          format: "cjs",
          dir: "packages/cjs",
          ...baseOutputConfig,
        },
      ],
    },
  },
  publicDir: false,
  plugins: [
    // 使用插件生成 dts
    // 处理 src 目录
    dts({
      entryRoot: "src",
      outDir: ["packages/es", "packages/cjs"],
    }),
    // 处理根目录文件
    dts({
      include: ["icons-*.js"],
      entryRoot: ".",
      outDir: ".",
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
