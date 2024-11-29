import camelCase from "camelcase";
import sharp from "sharp";

// 获取默认样式，如果没有设置则为 'fill'
const defaultStyle = process.env.npm_package_config_style || "fill";

/**
 * 解析名称
 * @param {string} name - 原始名称
 * @param {string} defaultStyle - 默认样式
 * @returns {Object} 包含解析后的名称、组件名称和样式的对象
 */
const parseName = (name) => {
  // 将名称中的所有 '/' '_' ' ' 替换为 '-'
  const cleanedName = name
    .replaceAll("/", "-")
    .replaceAll("_", "-")
    .replaceAll(" ", "-");
  // 将处理后的名称按 '-' 切分为数组
  const nameSlices = cleanedName.split("-");
  // 取数组的最后一个元素作为样式
  const style = nameSlices[nameSlices.length - 1];

  // 判断样式是否为 'fill'、'stroke' 或 'color'，如果不是，则使用默认样式
  let finalStyle;
  if (style === "fill" || style === "stroke" || style === "color") {
    finalStyle = style;
  } else {
    finalStyle = defaultStyle;
  }

  return {
    name,
    // 将处理后的名称转换为驼峰形式作为组件名称
    componentName: camelCase(cleanedName, {
      preserveConsecutiveUppercase: true,
      pascalCase: true,
    }),
    // 最终确定的样式
    style: finalStyle,
  };
};

/**
 * 处理 json 字符串
 * @param {str} str - 字符串
 * @returns {object} 字符串对象
 */
const parseToObject = (str) => {
  const object = {};
  const regex = /["'{[]?(\w+)["'{[]?\s*:\s*(.+),?/g; // 匹配键值对

  str.replace(regex, (match, key, value) => {
    if (!value) {
      object[key] = null; // 如果没有值，设置为 null
      return;
    }

    // 提取值中的内容，支持中文、单词等
    const valueMatch = value.match(/[\u4e00-\u9fa5\w]+/g);

    if (valueMatch) {
      // 如果有多个匹配，作为数组返回；只有一个匹配，返回单个值
      object[key] = valueMatch.length > 1 ? valueMatch : valueMatch[0];
    } else {
      object[key] = value.trim(); // 如果无法匹配，用原始字符串
    }
  });

  return object;
};

/**
 * svg 转换为 base64 png
 * @param {svgData} svgData - svg 内容
 * @returns {base64Png} base64 png
 */
async function convertSvgToBase64Png(svgData) {
  try {
    // 使用 sharp 将 SVG 转换为 PNG Buffer
    const pngBuffer = await sharp(Buffer.from(svgData))
      .resize({ width: 48 })
      .png()
      .toBuffer();

    // 将 PNG Buffer 转换为 Base64 编码
    const base64Png = pngBuffer.toString("base64");

    // 返回 Base64 PNG 数据
    return `data:image/png;base64,${base64Png}`;
  } catch (error) {
    console.error("转换失败:", error);
    throw error;
  }
}

export { parseName, parseToObject, convertSvgToBase64Png };
