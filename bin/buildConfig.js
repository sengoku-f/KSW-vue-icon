import { readdir, readFile } from "fs/promises";
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

// 创建图标数据的辅助函数
const createIconData = (config, name, tag) => ({
  name: config?.name || name,
  title: config?.title || "",
  category: config?.category || "Other",
  categoryCN: config?.categoryCN || "其他",
  author: config?.author || "KSW",
  tag: config?.tag || tag,
});

async function listSvgFilesInDirectories(rootDirectory) {
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
        console.warn(err);
      }

      // 读取子目录中的所有文件
      const subFiles = await readdir(directoryPath, { withFileTypes: true });

      // 过滤出所有的 SVG 文件
      const svgFiles = subFiles.filter(
        (subDirent) => subDirent.isFile() && subDirent.name.endsWith(".svg")
      );
      // .map((subDirent) => subDirent.name);

      // 遍历 svg
      for (const svgFile of svgFiles) {
        // svg 路径
        const filePath = join(directoryPath, svgFile.name);
        // 获取 svg 名称
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

          if (!configEntry.title || !configEntry.tag || configEntry.tag.length === 0) {
            console.log(`开始调用 AI 生成内容`);
            // 读取 svg
            const svgContent = await readFile(filePath, "utf-8");
            // 转换为 base64Png
            const base64Png = await convertSvgToBase64Png(svgContent);
            // 使用大模型生成信息
            LLMIconData = await generateIconData(svgFileName, base64Png)
          }

          // 检查并更新空字段
          configEntry.title = configEntry.title || LLMIconData?.title || "";
          configEntry.category = configEntry.category || LLMIconData?.category || "Other";
          configEntry.categoryCN = configEntry.categoryCN || LLMIconData?.categoryCN || "其他";
          configEntry.author = configEntry.author || "KSW";
          configEntry.tag =
            configEntry.tag.length > 0 ? configEntry.tag : (LLMIconData?.tag || []);

          console.log(configEntry);
        } catch (fileErr) {
          console.error(`Error reading or converting file ${svgFile.name}:`, fileErr);
        }
      }
    }
  } catch (err) {
    console.error("Error reading directories:", err);
  }
}

const rootDirectory = "./src/svg_copy"; // 替换为你要列出的目录路径
listSvgFilesInDirectories(rootDirectory);
