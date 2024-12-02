import { readdir, readFile, writeFile } from "fs/promises";
import { join, dirname, basename } from "path";
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

// 创建图标数据的辅助函数
const createIconData = (config, name, tag) => ({
  name: config?.name || name,
  title: config?.title || "",
  category: config?.category || "Other",
  categoryCN: config?.categoryCN || "其他",
  author: config?.author || "KSW",
  tag: config?.tag || tag,
});

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
      console.log(`Directory: ${directoryPath}`);

      // 查找项目特定的 icons-config-${relativePath}.json 中的配置
      const configFilePath = join(rootDir, `icons-config-${dirent.name}.json`);
      let iconsConfig = [];
      try {
        iconsConfig = JSON.parse(await readFile(configFilePath, "utf8"));
      } catch (err) {
        console.warn(
          `Failed to read config file at ${configFilePath}. Starting with empty config.`
        );
      }

      // 读取子目录中的所有文件
      const subFiles = await readdir(directoryPath, { withFileTypes: true });

      // 过滤出所有的 SVG 文件
      const svgFiles = subFiles.filter(
        (subDirent) => subDirent.isFile() && subDirent.name.endsWith(".svg")
      );

      // 遍历 SVG
      for (const svgFile of svgFiles) {
        // SVG 路径
        const filePath = join(directoryPath, svgFile.name);
        console.log(filePath);
        // 获取 SVG 名称
        const svgFileName = basename(svgFile.name, ".svg");
        try {
          let configEntry = iconsConfig.find(
            (icon) => icon.name === svgFileName
          );

          let LLMIconData = null;

          if (!configEntry) {
            configEntry = createIconData(null, svgFileName, []);
            iconsConfig.push(configEntry);
          }

          if (
            useAI &&
            (!configEntry.title ||
              !configEntry.tag ||
              configEntry.tag.length === 0)
          ) {
            console.log(`开始调用 AI 生成内容`);
            // 读取 SVG
            const svgContent = await readFile(filePath, "utf-8");
            // 转换为 base64Png
            const base64Png = await convertSvgToBase64Png(svgContent);
            // 使用大模型生成信息
            LLMIconData = await generateIconData(svgFileName, base64Png);
          }
          console.log(LLMIconData);
          // 检查并更新空字段
          configEntry.title = configEntry.title || (Array.isArray(LLMIconData?.title) ? LLMIconData.title[0] : LLMIconData?.title) || "";

          configEntry.category = Array.isArray(LLMIconData?.category) ? LLMIconData.category[0] : LLMIconData?.category || configEntry?.category;

          configEntry.categoryCN = Array.isArray(LLMIconData?.categoryCN) ? LLMIconData.categoryCN[0] : LLMIconData?.categoryCN || configEntry?.categoryCN;
          
          configEntry.tag = configEntry.tag.length > 0 ? configEntry.tag : LLMIconData?.tag || [];

          console.log(configEntry);
        } catch (fileErr) {
          console.error(`Error processing file ${svgFile.name}:`, fileErr);
        }
      }

      // 写入更新后的 iconsConfig 到输出 JSON 文件
      const jsonOutputFile = join(rootDir, `icons-config-${dirent.name}.json`);
      try {
        await writeFile(
          jsonOutputFile,
          JSON.stringify(iconsConfig, null, 2),
          "utf8"
        );
        console.log(`Updated config written to ${jsonOutputFile}`);
      } catch (writeErr) {
        console.error(`Error writing JSON file ${jsonOutputFile}:`, writeErr);
      }
    }
  } catch (err) {
    console.error("Error reading directories:", err);
  }
}

listSvgFilesInDirectories(svgDir, true);
