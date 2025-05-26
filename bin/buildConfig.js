import { readdir, readFile, writeFile } from "fs/promises";
import { join, dirname, basename, extname } from "path";
import { fileURLToPath } from "url";
import { convertSvgToBase64Png } from "./utils.js";
import { generateIconData } from "./LLM.js";

// 获取当前模块文件的 URL (ES模块)
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块目录的路径
const __dirname = dirname(__filename);
// 定义项目的根目录
const rootDir = join(__dirname, "..");

// 定义源代码和图标代码的目录
const srcDir = join(rootDir, "src");
const svgDir = join(rootDir, "src/svg");
const vueComponentsDir = join(rootDir, "src/components");

// 创建图标数据的辅助函数
const createIconData = (config, name, tag) => ({
  name: config?.name || name,
  alias: config?.alias || [],
  title: config?.title || "",
  category: config?.category || "base",
  categoryCN: config?.categoryCN || "基础",
  author: config?.author || "KSW",
  tag: config?.tag || tag,
});

/**
 * 同步配置字段，保证与默认值一致
 * @param {Object} configEntry 当前配置条目
 * @param {Object} defaultIconData 默认字段模板
 * @returns {Object} 更新后的配置条目
 */
function syncFields(configEntry, defaultIconData) {
  const updatedEntry = { ...defaultIconData, ...configEntry };
  for (const key in updatedEntry) {
    // 删除多余字段
    if (!defaultIconData.hasOwnProperty(key)) {
      delete updatedEntry[key];
    }
  }
  return updatedEntry;
}

/**
 * 生成 SVG icons-config.json
 * @param {string} rootDirectory - 路径
 * @param {boolean} useAI - 布尔值
 */
async function listSvgFilesInDirectories(rootDirectory, useAI = false) {
  try {
    // 读取根目录中的所有文件和文件夹
    const files = await readdir(rootDirectory, { withFileTypes: true });

    // 过滤出所有的文件夹
    const directories = files.filter((dirent) => dirent.isDirectory());

    for (const dirent of directories) {
      const directoryPath = join(rootDirectory, dirent.name);
      console.log(`目录: ${directoryPath}`);

      // 查找项目特定的 icons-config-${relativePath}.json 中的配置
      const configFilePath = join(rootDir, `icons-config-${dirent.name}.json`);
      let iconsConfig = [];
      try {
        iconsConfig = JSON.parse(await readFile(configFilePath, "utf8"));
      } catch (err) {
        console.warn(`Failed to read config file at ${configFilePath}. Starting with empty config.`);
      }

      // 读取子目录中的所有文件
      const subFiles = await readdir(directoryPath, { withFileTypes: true });

      // 过滤出所有的 SVG 和 VUE 文件
      const targetFiles = subFiles.filter((subDirent) => subDirent.isFile() && /\.(svg|vue)$/.test(subDirent.name));
      // 收集所有存在的 SVG 和 VUE 文件名
      const existingTargetFileNames = new Set(
        targetFiles.map((subDirent) => {
          const ext = extname(subDirent.name);
          return ext === ".vue" ? subDirent.name : basename(subDirent.name, ext);
        }),
      );
      // 过滤掉不在目录中的文件配置
      iconsConfig = iconsConfig.filter((configEntry) => existingTargetFileNames.has(configEntry.name));

      // 遍历文件
      for (const targetFile of targetFiles) {
        // 文件路径
        const filePath = join(directoryPath, targetFile.name);
        // 获取文件名
        const ext = extname(targetFile.name);
        const fileName = ext === ".vue" ? targetFile.name : basename(targetFile.name, ext);
        console.log(`${targetFile.name.split(".").at(-1)} 路径: ${filePath}`);
        try {
          let configEntry = iconsConfig.find((icon) => icon.name === fileName);

          let LLMIconData = null;

          if (!configEntry) {
            // 如果不存在，则直接创建一个新的条目
            configEntry = createIconData(null, fileName, []);
            iconsConfig.push(configEntry);
          } else {
            // 如果存在，则同步字段
            const defaultIconData = createIconData(null, fileName, []);
            configEntry = syncFields(configEntry, defaultIconData);

            // 更新 iconsConfig 中的条目
            const index = iconsConfig.findIndex((icon) => icon.name === configEntry.name);
            if (index !== -1) {
              iconsConfig[index] = configEntry;
            }
          }

          if (useAI && (!configEntry.title || !configEntry.tag || configEntry.tag.length === 0)) {
            console.log("现在的信息", configEntry);
            console.log("开始调用 AI 生成信息");
            // 读取 SVG
            const svgContent = await readFile(filePath, "utf-8");
            // 转换为 base64Png
            const base64Png = await convertSvgToBase64Png(svgContent);
            // 使用大模型生成信息
            LLMIconData = await generateIconData(fileName, base64Png);
            console.log("AI 生成的信息:", LLMIconData);
          }
          // 检查并更新空字段
          configEntry.title = configEntry.title || (Array.isArray(LLMIconData?.title) ? LLMIconData.title[0] : LLMIconData?.title) || "";

          configEntry.category = Array.isArray(LLMIconData?.category) ? LLMIconData.category[0] : LLMIconData?.category || configEntry?.category;

          configEntry.categoryCN = Array.isArray(LLMIconData?.categoryCN)
            ? LLMIconData.categoryCN[0]
            : LLMIconData?.categoryCN || configEntry?.categoryCN;

          configEntry.tag = configEntry.tag.length > 0 ? configEntry.tag : LLMIconData?.tag || [];

          console.log(configEntry);
        } catch (fileErr) {
          console.error(`Error processing file ${targetFile.name}:`, fileErr);
        }
      }
      // 对 iconsConfig 按照文件名排序
      iconsConfig.sort((a, b) => a.name.localeCompare(b.name));
      // 写入更新后的 iconsConfig 到输出 JSON 文件
      const jsonOutputFile = join(rootDir, `icons-config-${dirent.name}.json`);
      try {
        await writeFile(jsonOutputFile, JSON.stringify(iconsConfig, null, 2), "utf8");
        console.log(`更新后的配置已写入: ${jsonOutputFile}`);
      } catch (writeErr) {
        console.error(`写入JSON文件时出错: ${jsonOutputFile}:`, writeErr);
      }
    }
  } catch (err) {
    console.error("Error reading directories:", err);
  }
}

listSvgFilesInDirectories(svgDir, false);
listSvgFilesInDirectories(vueComponentsDir, false);
