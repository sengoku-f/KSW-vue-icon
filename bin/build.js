import path from "path";
import fs from "fs/promises";
import { rmSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import prettier from "prettier";
import { processSvg } from "./processSvg.js";
import { parseName, toCamelCase } from "./utils.js";
import { getElementCode } from "./template.js";

// 获取当前模块文件的 URL (ES模块)
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块目录的路径
const __dirname = path.dirname(__filename);
// 定义项目的根目录
const rootDir = path.join(__dirname, "..");

// 定义源代码和图标代码的目录
const srcDir = path.join(rootDir, "src");
const iconsDir = path.join(rootDir, "src/icons");
const vueComponentsDir = path.join(rootDir, "src/components");

// 创建目录的辅助函数
const createDirIfNotExists = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

// 创建图标数据的辅助函数
const createIconData = (config, id, componentName, componentAlias, name, projectName, stats) => ({
  id,
  name,
  alias: config?.alias || [],
  componentName,
  componentAlias,
  title: config?.title || "",
  category: config?.category || "base",
  categoryCN: config?.categoryCN || "基础",
  author: config?.author || "KSW",
  tag: config?.tag || [],
  projectName,
  modifiedTime: stats.mtime,
});

// 新增：通用文件获取函数
const getAllFilesByExt = async (dir, ext) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? await getAllFilesByExt(fullPath, ext) : fullPath;
    }),
  );
  return files.flat().filter((file) => path.extname(file) === ext);
};

// 分别生成图标代码
const generateIconCode = async (filePath, svgDir) => {
  const name = path.basename(filePath, ".svg");
  const names = parseName(name);
  // svg 的 exportsPath 路径使用 iconsDir
  const basePath = path.relative(svgDir, path.dirname(filePath));
  const exportsPath = path.join("icons", basePath);
  const relativePath = path.relative(svgDir, path.dirname(filePath));
  const destinationDir = path.join(iconsDir, relativePath);
  await createDirIfNotExists(destinationDir);
  const destination = path.join(destinationDir, `${names.name}.js`);
  // 读取 SVG 文件
  const code = await fs.readFile(filePath, "utf-8");
  // 处理 SVG 文件
  const svgCode = await processSvg(code, names.style); // 将样式传递给 processSvg
  const componentName = `Icon${names.componentName}`;
  // 获取组件代码
  const component = await getElementCode(names, svgCode, filePath);
  // 写入组件代码
  await fs.writeFile(destination, component, "utf-8");
  // 获取文件的修改日期
  const stats = await fs.stat(filePath);
  // 查找项目特定的 icons-config-${relativePath}.json 中的配置
  const configFilePath = path.join(rootDir, `icons-config-${relativePath}.json`);
  let iconsConfig = [];
  try {
    iconsConfig = JSON.parse(await fs.readFile(configFilePath, "utf8"));
  } catch (err) {
    console.warn(`未找到配置文件: ${configFilePath}`);
  }
  const config = iconsConfig.find((icon) => icon.name.trim() === names.name.trim());
  // 别名转为驼峰
  const componentAlias = config?.alias?.map((alias) => `Icon${toCamelCase(alias)}`);

  console.log("成功构建:", componentName, "修改日期:", stats.mtime);
  return { componentName, componentAlias, config, stats, relativePath, exportsPath };
};

// 新增：Vue 文件处理逻辑
const generateVue = async (filePath, vueComponentsDir) => {
  const name = path.basename(filePath, ".vue");
  const fullName = path.basename(filePath);
  const names = parseName(name);
  const exportsPath = path.relative(srcDir, path.dirname(filePath));
  const relativePath = path.relative(vueComponentsDir, path.dirname(filePath));
  const stats = await fs.stat(filePath);

  // 读取配置（复用 SVG 的配置体系）
  const configFilePath = path.join(rootDir, `icons-config-${relativePath}.json`);
  let iconsConfig = [];
  try {
    iconsConfig = JSON.parse(await fs.readFile(configFilePath, "utf8"));
  } catch (err) {
    console.warn(`未找到配置文件: ${configFilePath}`);
  }

  // vue 使用 fullName
  const config = iconsConfig.find((icon) => icon.name.trim() === fullName.trim());
  const componentName = `Icon${names.componentName}`;
  const componentAlias = config?.alias?.map((alias) => `Icon${toCamelCase(alias)}`);

  console.log("成功处理 Vue 文件:", componentName, "修改日期:", stats.mtime);
  return { componentName, componentAlias, config, stats, relativePath, exportsPath };
};

// 生成每个子目录的 index.js
const generateMapForDirectory = async (exportsPath, exports) => {
  const mapFilePath = path.join(srcDir, exportsPath, "index.js");
  const exportStrings = exports
    .map(({ componentName, componentAlias, name }) => {
      // 主导出
      let result = `export { default as ${componentName} } from './${name}';\r\n`;
      // 别名导出
      componentAlias?.forEach((componentAlias) => {
        result += `export { default as ${componentAlias} } from './${name}';\r\n`;
      });
      return result;
    })
    .join("");
  await fs.writeFile(mapFilePath, exportStrings, "utf-8");
  console.log(`成功生成 ${exportsPath} index.js 文件: ${mapFilePath}`);
};

// 生成 map.js 文件
const generateMainMapFile = async (exportsByDir) => {
  const mapFilePath = path.join(srcDir, "map.js");
  let importStrings = "";
  let mapEntries = "";

  exportsByDir.forEach((exports, exportsPath) => {
    const base = exportsPath.split(/\/|\\/)[1];
    const camelCasePath = toCamelCase(base);
    importStrings += `import * as ${camelCasePath} from "./${exportsPath.replace(/\\/, '/')}";\r\n`;
    mapEntries += `${camelCasePath},\r\n`;
  });

  const mapFileContent = `
    ${importStrings}
    export const ProjectIconsMap = {
      ${mapEntries}
    };
  `;

  await fs.writeFile(mapFilePath, await prettier.format(mapFileContent, { parser: "babel" }), "utf-8");
  console.log(`成功生成 map.js 文件: ${mapFilePath}`);
};

async function processFiles() {
  try {
    await removeIconsFile();
    // 处理 SVG 文件
    const svgDir = path.join(rootDir, "src/svg");
    const svgFiles = await getAllFilesByExt(svgDir, ".svg");
    // 对文件名进行排序
    svgFiles.sort((a, b) => a.localeCompare(b));

    // 用于存储每个 relativePath 的计数器
    const indexCounters = new Map();

    // 使用 Promise.all 处理所有 SVG 文件
    const svgResults = await Promise.all(
      svgFiles.map((file) => {
        const relativePath = path.relative(svgDir, path.dirname(file));
        const currentIndex = indexCounters.get(relativePath) || 0;
        indexCounters.set(relativePath, currentIndex + 1);
        return processSvgFile(file, currentIndex, svgDir);
      }),
    );

    // 处理 Vue 文件
    const vueFiles = await getAllFilesByExt(vueComponentsDir, ".vue");
    const vueResults = await Promise.all(
      vueFiles.map(async (file) => {
        const relativePath = path.relative(vueComponentsDir, path.dirname(file));
        const currentIndex = indexCounters.get(relativePath) || 0;
        indexCounters.set(relativePath, currentIndex + 1);
        return processVueFile(file, currentIndex, vueComponentsDir);
      }),
    );
    const results = [...svgResults, ...vueResults];

    const iconDataByProject = new Map();
    const exportsByDir = new Map();

    //遍历 results 来同时构建 iconDataByProject 和 exportsByDir
    results.forEach(({ iconData, relativePath, exportsPath }) => {
      if (!iconData) return;
      if (!iconDataByProject.has(relativePath)) {
        iconDataByProject.set(relativePath, []);
      }
      iconDataByProject.get(relativePath).push(iconData);

      if (!exportsByDir.has(exportsPath)) {
        exportsByDir.set(exportsPath, []);
      }
      exportsByDir
        .get(exportsPath)
        .push({ componentName: iconData.componentName, componentAlias: iconData.componentAlias, name: iconData.name, exportsPath: exportsPath });
    });

    await Promise.all([
      ...Array.from(iconDataByProject.entries()).map(async ([relativePath, iconDataList]) => {
        const jsonOutputFile = path.join(rootDir, `icons-${relativePath}.js`);
        await fs.writeFile(
          jsonOutputFile,
          await prettier.format(`export const iconsData${toCamelCase(relativePath)} = ${JSON.stringify(iconDataList, null, 2)}`, { parser: "babel" }),
          "utf-8",
        );
        console.log(`成功生成 JSON 文件: ${jsonOutputFile}`);
      }),
      ...Array.from(exportsByDir.entries()).map(([exportsPath, exports]) => generateMapForDirectory(exportsPath, exports)),
    ]);

    // 生成 map.js 文件
    await generateMainMapFile(exportsByDir);
  } catch (err) {
    console.error("生成图标代码时出错:", err);
  }
}

async function processSvgFile(filePath, index, svgDir) {
  try {
    const { componentName, componentAlias, config, stats, relativePath, exportsPath } = await generateIconCode(filePath, svgDir);
    const iconData = createIconData(config, index, componentName, componentAlias, path.basename(filePath, ".svg"), relativePath, stats);
    return { index, iconData, relativePath, exportsPath };
  } catch (err) {
    console.error(`处理SVG文件时出错: ${filePath}, 错误信息: ${err.message}`);
    return { index, iconData: null, relativePath: path.relative(svgDir, path.dirname(filePath)) };
  }
}

async function processVueFile(filePath, index, vueComponentsDir) {
  try {
    const { componentName, componentAlias, config, stats, relativePath, exportsPath } = await generateVue(filePath, vueComponentsDir);
    // vue 需要保留后缀名
    const iconData = createIconData(config, index, componentName, componentAlias, path.basename(filePath), relativePath, stats);
    return { index, iconData, relativePath, exportsPath };
  } catch (err) {
    console.error(`处理VUE文件时出错: ${filePath}, 错误信息: ${err.message}`);
    return null;
  }
}

async function removeIconsFile() {
  const removePath = path.join(process.cwd(), "src/icons"); 
  existsSync(removePath) && rmSync(removePath, { recursive: true });
}

// 执行主函数
processFiles();
