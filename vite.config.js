import { fileURLToPath, URL } from "node:url";
import { globSync } from "glob";
import fs from 'fs';
import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { viteStaticCopy } from "vite-plugin-static-copy";
import generatePackageJson from "./plugins/rollup-plugin-generate-package-json";
import del from "rollup-plugin-delete";
import { isWindows } from './bin/os';

// https://vitejs.dev/config/
const baseConfig = {
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
  plugins: [vue()],
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
          const utilsKeywords = ["runtime", "overlayscrollbars", "icons-base", "icons-guangfa", "package"];

          if (utilsKeywords.some((keyword) => id.includes(keyword))) {
            return `utils`;
          }

          const mainKeywords = ["src/main", "vite"];

          if (mainKeywords.some((keyword) => id.includes(keyword))) {
            return `main`;
          }
          if (id.includes("src/icons")) {
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
    // "icons-*.js",
    "src/index.js",
    "src/map.js",
    "src/runtime/*.js",
    "src/icons/*/*.js",
    "src/components/*/*.{js,vue}",
  ]);
  return Object.fromEntries(
    files.map((file) => {
      // 判断是否是根目录的文件
      const isRootFile = path.isAbsolute(file) || (!file.startsWith("src/") && !file.startsWith("src\\"));
      const relativePath = isRootFile
        ? path.basename(file, path.extname(file)) // 根目录文件使用文件名作为键
        : path.relative(
            // 相对于 `src` 文件夹生成相对路径
            "src",
            path.join(path.parse(file).dir, path.parse(file).name),
          );
      return [relativePath, path.resolve(file)];
    }),
  );
}

// 获取/icons文件夹下的所有图标名称
function getIconExternals() {
  // 同时匹配文件和目录
  const allIcons = globSync(["src/icons/*", "src/icons/*/*.js", "src/components/*", "src/components/*/*"], {
    ignore: {
      ignored: (p) => /index\.js$/.test(p.name),
    },
  });
  // 统一格式化路径
  return allIcons.map((file) => {
    // 如果是文件，使用 path.parse 取文件名；如果是目录，用相对路径
    const relativePath = /\.(js|vue)$/.test(file) ? `./${path.parse(file).name}` : `./${path.relative("src", file)}`;
    return isWindows() ? relativePath.replace(/\\/g, "/") : relativePath;
  });
}

function modifyPkg() {
  return {
    name: 'modify-pkg',
    closeBundle() {
      if (process.env.MODE !== 'private') {
        return;
      }
      const pkgPath = path.join(__dirname, 'packages/package.json');
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      pkg.name = '@ksware/ksw-vue-icon';
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    }
  }
}

// 默认参数
const baseOutputConfig = {
  assetFileNames: "assets/[name][extname]",
  entryFileNames: "[name].js",
  chunkFileNames: "[name].js",
  hoistTransitiveImports: false,
  globals: {
    vue: "Vue",
  },
  // preserveModules: true,
  // preserveModulesRoot: "src",
  manualChunks: (id) => {
    // if (/\.(css|less|scss)/.test(id)) {
    //   return "style";
    // }
    if (/gsap/.test(id)) {
      return "gsap";
    }
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
    lib: {
      entry: "src/index.js",
    },
    outDir: "packages",
    emptyOutDir: true,
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      plugins: [
        del({
          targets: "packages",
        }),
        generatePackageJson({
          output: "packages",
        }),
        modifyPkg()
      ],
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
          dir: "packages/lib",
          ...baseOutputConfig,
        },
      ],
    },
  },
  publicDir: false,
  plugins: [
    vue(),
    libInjectCss(),
    // 使用插件生成 dts
    // 处理 src 目录
    dts({
      entryRoot: "src",
      outDir: ["packages/es", "packages/lib"],
    }),
    // 处理根目录文件
    dts({
      include: ["icons-*.js"],
      entryRoot: ".",
      outDir: ".",
    }),
    viteStaticCopy({
      targets: [{ src: ["README.md", "icons-*.js", "icons-*.d.ts"], dest: "./" }],
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
