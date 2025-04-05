import fs from "fs";
import path from "path";

export default function generatePackageJsonPlugin(options = {}) {
  const { input, output } = options;
  return {
    name: "generate-package-json",
    writeBundle(OutputOptions) {
      const inputDir = input ? path.resolve(process.cwd(), input, "package.json") : path.resolve(process.cwd(), "package.json");
      const outDir = output || OutputOptions.dir || path.dirname(OutputOptions.file);

      // 读取项目根目录的 package.json
      const pkg = JSON.parse(fs.readFileSync(inputDir, "utf-8"));

      // 定义要生成的 package.json 内容
      const distPackage = {
        name: pkg.name,
        version: pkg.version,
        license: pkg.license,
        description: pkg.description,
        type: pkg.type,
        main: "lib/index.js",
        module: "es/index.js",
        types: "es/index.d.ts",
        homepage: pkg.homepage,
        repository: pkg.repository,
        peerDependencies: {
          vue: pkg.dependencies.vue,
        },
        exports: {
          ".": {
            import: "./es/index.js",
            require: "./lib/index.js",
          },
          "./Guangfa": {
            import: "./es/icons/guangfa/index.js",
            require: "./lib/icons/guangfa/index.js",
          },
          "./KingAutometa": {
            import: "./es/icons/KingAutometa/index.js",
            require: "./lib/icons/KingAutometa/index.js",
          },
          "./icons-*.js": {
            import: "./icons-*.js",
            require: "./icons-*.js",
          },
        },
        sideEffects: ["**/*.css"],
      };

      // 写入到构建目录
      const outputPath = path.join(outDir, "package.json");
      fs.writeFileSync(outputPath, JSON.stringify(distPackage, null, 2));
    },
  };
}
