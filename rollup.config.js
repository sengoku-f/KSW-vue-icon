import { nodeResolve } from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import { minify } from "rollup-plugin-esbuild";
import { emptyDir } from "rollup-plugin-empty-dir";
import del from 'rollup-plugin-delete'
import cleanup from "rollup-plugin-cleanup";
import dts from "rollup-plugin-dts";
import path from "path";
import { fileURLToPath } from "url";
import { globSync } from "glob";

// 获取当前模块文件的 URL (ES模块)
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块目录的路径
const __dirname = path.dirname(__filename);

// 获取/icons文件夹下的所有图标名称
function getIconExternals() {
  const iconFiles = globSync("src/icons/*/*.js");
  return iconFiles.map(
    (file) => `./${path.parse(file).name}`
  );
}

// 获取多入口文件输入
function getFileInput() {
  const files = globSync([
    "src/index.js",
    "src/runtime/*.js",
    "src/icons/*/*.js",
  ]);
  // console.log("file:", JSON.stringify(files, null, 1));
  return Object.fromEntries(
    files.map((file) => [
      path.relative(
        // 相对于 `src` 文件夹生成相对路径
        "src",
        file.slice(0, file.length - path.extname(file).length)
      ),
      file,
    ])
  );
}

// 默认参数
const baseOutputConfig = {
  // compact: true,
  entryFileNames: '[name].js',
  chunkFileNames: "[name].js",
  globals: {
    vue: "Vue",
  },
  manualChunks: {
    gsap: ["gsap"],
  },
};

const config =  [
  {
    input: getFileInput(),
    external: ["vue", "./icons/base", "./icons/guangfa", "../../runtime", ...getIconExternals()],
    plugins: [
      del({ targets: 'packages/*' }),
      nodeResolve(),
      // esbuild({
      //   minifySyntax: true,
      //   minifyWhitespace: false,
      //   minifyIdentifiers: false,
      // }),
      // minify({
      //   minify: false, // 关闭默认的压缩
      //   minifySyntax: false, // 只启用语法压缩
      //   minifyWhitespace: false,
      //   minifyIdentifiers: false,
      // }),
      cleanup(),
    ],
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
  {
    input: getFileInput(),
    external: ["vue", "./icons/base", "./icons/guangfa", "../../runtime", ...getIconExternals()],
    plugins: [dts()],
    output: [
      {
        dir: "packages/es",
        format: "es",
      },
      {
        dir: "packages/cjs",
        format: "cjs",
      },
    ],
  },
];
// console.log(JSON.stringify(config, null, 2));
export default config;