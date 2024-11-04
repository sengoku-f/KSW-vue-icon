import path from "path";
import fs from "fs";
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
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
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
  projectName: projectName,
  modifiedTime: stats.mtime,
});

// 递归获取所有 SVG 文件
const getAllSvgFiles = async (dir) => {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? getAllSvgFiles(fullPath) : fullPath;
  }));
  return Array.prototype.concat(...files).filter(file => path.extname(file) === ".svg");
};

// 分别生成图标代码
const generateIconCode = async (filePath, svgDir) => {
  const name = path.basename(filePath, ".svg");
  const names = parseName(name);
  const relativePath = path.relative(svgDir, path.dirname(filePath));
  const destinationDir = path.join(iconsDir, relativePath);
  createDirIfNotExists(destinationDir);
  const destination = path.join(destinationDir, `${names.name}.js`);
  // 读取 SVG 文件
  const code = await fs.promises.readFile(filePath);
  // 处理 SVG 文件
  const svgCode = await processSvg(code, names.style); // 将样式传递给 processSvg
  const ComponentName = names.componentName;
  // 获取组件代码
  const component = await getElementCode(names, svgCode, filePath);
  // 写入组件代码
  await fs.promises.writeFile(destination, component, "utf-8");
  // 获取文件的修改日期
  const stats = await fs.promises.stat(filePath);
  // 查找项目特定的 icons-config-${relativePath}.json 中的配置
  const configFilePath = path.join(rootDir, `icons-config-${relativePath}.json`);
  let iconsConfig = [];
  try {
    iconsConfig = JSON.parse(fs.readFileSync(configFilePath, "utf8"));
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
  await fs.promises.writeFile(mapFilePath, exportStrings, "utf-8");
  console.log("成功生成 index.js 文件:", mapFilePath);
};

async function processFiles() {
  // 从 src/svg 目录读取 SVG 文件
  const svgDir = path.join(rootDir, "src/svg");
  try {
    // 过滤出所有的 SVG 文件
    const svgFiles = await getAllSvgFiles(svgDir);
    // 对文件名进行排序
    svgFiles.sort((a, b) => a.localeCompare(b));

    // 初始化每个项目的计数器
    const idCounters = {};

    // 使用 Promise.all 处理所有 SVG 文件
    const results = await Promise.all(
      svgFiles.map((file) => processFile(file, idCounters, svgDir))
    );

    const iconDataByProject = results.reduce((acc, { iconData, relativePath }) => {
      if (!acc[relativePath]) {
        acc[relativePath] = [];
      }
      acc[relativePath].push(iconData);
      return acc;
    }, {});

    // 对每个项目的图标数据进行排序
    for (const relativePath in iconDataByProject) {
      iconDataByProject[relativePath].sort((a, b) => a.id - b.id);
    }

    await Promise.all(Object.entries(iconDataByProject).map(async ([relativePath, iconDataList]) => {
      const jsonOutputFile = path.join(rootDir, `icons-${relativePath}.json`);
    await fs.promises.writeFile(
      jsonOutputFile,
      JSON.stringify(iconDataList, null, 2),
      "utf-8"
    );
      console.log(`成功生成 JSON 文件: ${jsonOutputFile}`);
    }));

    // 按子目录生成 index.js 文件
    const exportsByDir = results.reduce((acc, { iconData, relativePath }) => {
      if (!acc[relativePath]) {
        acc[relativePath] = [];
      }
      acc[relativePath].push({ ComponentName: iconData.componentName, name: iconData.name });
      return acc;
    }, {});

    await Promise.all(Object.entries(exportsByDir).map(([relativePath, exports]) =>
      generateMapForDirectory(relativePath, exports)
    ));
  } catch (err) {
    console.error("生成图标代码时出错:", err);
  }
}

async function processFile(filePath, idCounters, svgDir) {
  try {
    const { ComponentName, config, stats, relativePath } = await generateIconCode(filePath, svgDir);
    
    // 初始化或更新每个项目的计数器
    if (!idCounters[relativePath]) {
      idCounters[relativePath] = 0;
    }
    const id = idCounters[relativePath]++;
    
    const iconData = createIconData(config, id, ComponentName, path.basename(filePath, ".svg"), relativePath, stats);
    return { iconData, relativePath };
  } catch (err) {
    console.error(`处理SVG ${filePath} 时出错:`, err);
    return { index, iconData: null, relativePath: relativePath };
  }
}

// 执行主函数
processFiles();
