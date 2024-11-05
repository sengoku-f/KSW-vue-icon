import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { processSvg } from "./processSvg.js";
import parseName from "./utils.js";
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

// 创建目录的辅助函数
const createDirIfNotExists = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

// 创建图标数据的辅助函数
const createIconData = (config, id, ComponentName, name, projectName, stats) => ({
  id,
  name,
  componentName: `Icon${ComponentName}`,
  title: config?.title || "",
  category: config?.category || "Other",
  categoryCN: config?.categoryCN || "其他",
  author: config?.author || "KSW",
  tag: config?.tag || [],
  projectName,
  modifiedTime: stats.mtime,
});

// 递归获取所有 SVG 文件
const getAllSvgFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? await getAllSvgFiles(fullPath) : fullPath;
  }));
  return files.flat().filter(file => path.extname(file) === ".svg");
};

// 分别生成图标代码
const generateIconCode = async (filePath, svgDir) => {
  const name = path.basename(filePath, ".svg");
  const names = parseName(name);
  const relativePath = path.relative(svgDir, path.dirname(filePath));
  const destinationDir = path.join(iconsDir, relativePath);
  await createDirIfNotExists(destinationDir);
  const destination = path.join(destinationDir, `${names.name}.js`);
  // 读取 SVG 文件
  const code = await fs.readFile(filePath, "utf-8");
  // 处理 SVG 文件
  const svgCode = await processSvg(code, names.style); // 将样式传递给 processSvg
  const ComponentName = names.componentName;
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
  const config = iconsConfig.find(icon => icon.name.trim() === names.name.trim());
  console.log("成功构建:", ComponentName, "修改日期:", stats.mtime);
  return { ComponentName, name: names.name, config, stats, relativePath };
};

// 生成每个子目录的 index.js
const generateMapForDirectory = async (relativePath, exports) => {
  const mapFilePath = path.join(iconsDir, relativePath, "index.js");
  const exportStrings = exports
    .map(({ ComponentName, name }) => `export { default as ${ComponentName} } from './${name}';\r\n`)
    .join("");
  await fs.writeFile(mapFilePath, exportStrings, "utf-8");
  console.log(`成功生成 ${relativePath} index.js 文件: ${mapFilePath}`);
};

async function processFiles() {
  // 从 src/svg 目录读取 SVG 文件
  const svgDir = path.join(rootDir, "src/svg");
  try {
    // 过滤出所有的 SVG 文件
    const svgFiles = await getAllSvgFiles(svgDir);
    // 对文件名进行排序
    svgFiles.sort((a, b) => a.localeCompare(b));

    // 用于存储每个 relativePath 的计数器
    const indexCounters = new Map();

    // 使用 Promise.all 处理所有 SVG 文件
    const results = await Promise.all(
      svgFiles.map((file) => {
        const relativePath = path.relative(svgDir, path.dirname(file));
        const currentIndex = indexCounters.get(relativePath) || 0;
        indexCounters.set(relativePath, currentIndex + 1);
        return processFile(file, currentIndex, svgDir);
      })
    );

    const iconDataByProject = new Map();
    const exportsByDir = new Map();
    
    //遍历 results 来同时构建 iconDataByProject 和 exportsByDir
    results.forEach(({ iconData, relativePath }) => {
      if (!iconData) return;

      if (!iconDataByProject.has(relativePath)) {
        iconDataByProject.set(relativePath, []);
      }
      iconDataByProject.get(relativePath).push(iconData);

      if (!exportsByDir.has(relativePath)) {
        exportsByDir.set(relativePath, []);
      }
      exportsByDir.get(relativePath).push({ ComponentName: iconData.componentName, name: iconData.name });
    });

    await Promise.all([
      ...Array.from(iconDataByProject.entries()).map(async ([relativePath, iconDataList]) => {
        const jsonOutputFile = path.join(rootDir, `icons-${relativePath}.json`);
        await fs.writeFile(
          jsonOutputFile,
          JSON.stringify(iconDataList, null, 2),
          "utf-8"
        );
        console.log(`成功生成 JSON 文件: ${jsonOutputFile}`);
      }),
      ...Array.from(exportsByDir.entries()).map(([relativePath, exports]) =>
        generateMapForDirectory(relativePath, exports)
      )
    ]);
  } catch (err) {
    console.error("生成图标代码时出错:", err);
  }
}

async function processFile(filePath, index, svgDir) {
  try {
    const { ComponentName, config, stats, relativePath } = await generateIconCode(filePath, svgDir);
    const iconData = createIconData(config, index, ComponentName, path.basename(filePath, ".svg"), relativePath, stats);
    return { index, iconData, relativePath };
  } catch (err) {
    console.error(`处理SVG文件时出错: ${filePath}，错误信息: ${err.message}`);
    return { index, iconData: null, relativePath: path.relative(svgDir, path.dirname(filePath)) };
  }
}

// 执行主函数
processFiles();
