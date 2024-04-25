const { optimize: svgoOptimize } = require("svgo");
const cheerio = require("cheerio");
const framework = process.env.npm_package_config_framework || "react";

/**
 * 将字符串转换为驼峰形式
 * @param {string} str - 输入的字符串
 * @returns {string} - 驼峰形式的字符串
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
}

/**
 * 使用 `svgo` 优化 SVG 字符串
 * @param {string} svg - 输入的 SVG 字符串
 * @param {string} style - 图标的样式
 * @returns {Promise<string>} - 优化后的 SVG 字符串
 */
function optimize(svg, style) {
  // 如果 style 是 'color'，则不移除任何属性；
  // 如果 style 是其他值，则移除 'fill' 和 'stroke.*'。
  // 匹配所有元素的 fill 和 stroke 属性, 排除 url 开头的值
  const removeAttrs = style === "color" ? "" : "*:(fill|stroke.*):^(?!url).*";
  console.log(removeAttrs);

  const config = {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            convertShapeToPath: false,
            mergePaths: false,
            // inlineStyles: {
            //   applyTransformsStroked: false,
            // },
          },
        },
      },
      // 删除属性
      {
        name: "removeAttrs",
        params: {
          attrs: removeAttrs,
        },
      },
    ],
  };

  const { data } = svgoOptimize(svg, config);
  return data;
}

/**
 * 移除 SVG 元素
 * @param {string} svg - 输入的 SVG 字符串
 * @returns {string} - 移除 SVG 元素后的字符串
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $("body").children().html();
}

/**
 * 处理 SVG 字符串
 * @param {string} svg - 输入的 SVG 字符串
 * @param {string} style - 图标的样式
 * @returns {Promise<string>} - 处理后的 SVG 字符串
 */
async function processSvg(svg, style) {
  const optimizedSvg = optimize(svg, style);
  result = removeSVGElement(optimizedSvg);
  result =
    framework === "react"
      ? // 如果框架是 react，将属性名转换为驼峰形式
        result.replace(
          /([a-z]+)-([a-z]+)=/g,
          (_, a, b) => `${a}${CamelCase(b)}=`
        )
      : // 如果框架不是 react，不做任何修改
        result;
  return result;
}

module.exports = processSvg;
