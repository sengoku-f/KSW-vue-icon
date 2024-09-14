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
const mapFile = path.join(rootDir, "src", "map.js");
const jsonOutputFile = path.join(rootDir, "icons.json");
const iconsConfigFile = path.join(rootDir, "icons-config.json");

// 读取 icons-config.json 文件
const iconsConfig = JSON.parse(fs.readFileSync(iconsConfigFile, "utf8"));

// 创建目录的辅助函数
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

// 生成 map.js
const generateMap = () => {
  createDirIfNotExists(srcDir);
  createDirIfNotExists(iconsDir);
  fs.writeFileSync(path.join(srcDir, "map.js"), "", "utf-8");
};

// 创建图标数据的辅助函数
const createIconData = (config, id, ComponentName, name, stats) => ({
  id,
  name,
  componentName: `Icon${ComponentName}`,
  title: config?.title || "defaultTitle",
  category: config?.category || "Default",
  categoryCN: config?.categoryCN || "默认",
  author: config?.author || "unknown",
  modifiedTime: stats.mtime,
  tag: config?.tag || [],
});

// 分别生成图标代码
const generateIconCode = async (name) => {
  const names = parseName(name);
  const location = path.join(rootDir, "src/svg", `${names.name}.svg`);
  const destination = path.join(rootDir, "src/icons", `${names.name}.js`);
  // 读取 SVG 文件
  // const code = fs.readFileSync(location)
  const code = await fs.promises.readFile(location);
  // 处理 SVG 文件
  const svgCode = await processSvg(code, names.style); // 将样式传递给 processSvg
  const ComponentName = names.componentName;
  // 获取组件代码
  const component = await getElementCode(names, svgCode);

  // 写入组件代码
  // fs.writeFileSync(destination, component, 'utf-8');
  await fs.promises.writeFile(destination, component, "utf-8");

  // 获取文件的修改日期
  // const stats = fs.statSync(location);
  const stats = await fs.promises.stat(location);

  // 查找 icons-config.json 中的配置
  const config = iconsConfig.find(
    (icon) => icon.name.trim() === names.name.trim()
  );

  console.log("成功构建:", ComponentName, "修改日期:", stats.mtime);
  return { ComponentName, name: names.name, config, stats };
};

// 将导出代码追加到 map.js
const appendToIndex = async ({ ComponentName, name }) => {
  const exportString = `export { default as Icon${ComponentName} } from './icons/${name}';\r\n`;
  await fs.promises.appendFile(
    path.join(rootDir, "src", "map.js"),
    exportString,
    "utf-8"
  );
};

async function processFiles() {
  // 从 src/svg 目录读取 SVG 文件
  const svgDir = path.join(rootDir, "src/svg");
  try {
    const files = await fs.promises.readdir(svgDir);
    // 过滤出所有的 SVG 文件
    const svgFiles = files.filter((file) => path.extname(file) === ".svg");
    // 对文件名进行排序
    svgFiles.sort((a, b) => a.localeCompare(b));

    // 使用 Promise.all 处理所有 SVG 文件并按索引排序
    const results = await Promise.all(
      svgFiles.map((file, index) => processFile(file, index))
    );

    // 提取 iconData 并写入 JSON 文件
    const iconDataList = results
      .sort((a, b) => a.index - b.index)
      .map((result) => result.iconData);

    await fs.promises.writeFile(
      jsonOutputFile,
      JSON.stringify(iconDataList, null, 2),
      "utf-8"
    );
    console.log("成功生成 JSON 文件:", jsonOutputFile);

    // 生成 map.js 文件
    const exportStrings = results
      .map(
        ({ iconData }) =>
          `export { default as ${iconData.componentName} } from './icons/${iconData.name}';\r\n`
      )
      .join("");
    await fs.promises.writeFile(mapFile, exportStrings, "utf-8");
    console.log("成功生成 map.js 文件:", mapFile);
  } catch (err) {
    console.error("生成图标代码时出错:", err);
  }
}

async function processFile(file, index) {
  const name = path.basename(file, ".svg");
  try {
    const { ComponentName, config, stats } = await generateIconCode(name);
    // 创建 icon 数据，确保字段顺序一致
    const iconData = createIconData(config, index, ComponentName, name, stats);
    // await appendToIndex({ ComponentName, name });
    return { index, iconData };
  } catch (err) {
    console.error(`处理SVG ${file} 时出错:`, err);
    return { index, iconData: null };
  }
}

// 生成 index 文件
generateMap();
// 执行主函数
processFiles();
