import { optimize as svgoOptimize } from 'svgo';
import cheerio from 'cheerio';
// 获取默认size大小，如果没有设置则为 '24'
const defaultSize = process.env.npm_package_config_size || 24

// 生成唯一id
function genID() {
  // 生成一串 UUID 字符串
  const uuid = crypto.randomUUID().toString().replaceAll("-", "");
  // 从 UUID 字符串中随机截取 8 个字符
  const start = Math.floor(Math.random() * (uuid.length - 8));
  return uuid.substr(start, 8);
}

// 自定义插件-处理大小不等于 24 的图标
function transformSize(node) {
  // 获取最大值
  const maxNumber = Math.max(node.attributes["width"], node.attributes["height"]);
  // 将最大值用默认尺寸整除
  const result = parseInt(defaultSize) / maxNumber;
  // 定义需要查找的元素名称的正则表达式
  const namePattern = new RegExp("rect|line|circle|ellipse|path");

  if (node.name == "svg" && node.attributes["viewBox"] != `0 0 ${defaultSize} ${defaultSize}`) {
    traverse(node, result); // 调用递归函数遍历子节点
  }
  
  // 定义递归函数来遍历节点及其子节点
  function traverse(node, result) {
    // 判断当前节点是否需要进行缩放操作
    if (namePattern.test(node.name)) {
      node.attributes["transform"] = `scale(${result})`
    }
    // 如果当前节点有子节点，则继续遍历子节点
    if (node.children) {
      node.children.forEach((child) => traverse(child, result));
    }
  }
}

// 自定义插件-处理没有转换的路径
function convertStroke(node) {
  // 定义需要查找的元素名称的正则表达式
  const namePattern = new RegExp("rect|line|circle|ellipse");

  // 定义递归函数来遍历节点及其子节点
  function traverse(node) {
    // 如果当前节点名称匹配要查找的元素名称,并且存在stroke
    if (namePattern.test(node.name) && node.attributes["stroke"]) {
      // 判断填充是否有颜色,有则删除 fill
      if (new RegExp("#(?:[0-9a-fA-F]{3,4}){1,2}|(?:rgb|hsl)a?\([^\)]*\)").test(node.attributes["fill"])) {
        delete node.attributes["fill"]
      }
      // 对匹配到的节点执行处理逻辑
      Object.assign(node.attributes, {
        "stroke": "currentColor",
        "stroke-width": node.attributes["stroke-width"],
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      });
    }

    // 如果当前节点有子节点，则继续遍历子节点
    if (node.children) {
      node.children.forEach((child) => traverse(child));
    }
  }

  // 调用递归函数，从根节点开始遍历整个节点树
  traverse(node);
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
  // 排除 rect|line|circle|ellipse 元素的 fill 和 stroke 属性, 排除 url 开头的值
  const removeAttrs = style === "color" ? "" : "*:(fill):^(?!url).*";

  const config = {
    plugins: [
      // 删除属性
      {
        name: "removeAttrs",
        params: {
          attrs: removeAttrs,
        },
      },
      // 删除剪切路径
      {
        name: "removeAttrs",
        params: {
          attrs: "clip-path",
        },
      },
      // 自定义插件
      {
        name: "customPlugin",
        fn: () => {
          return {
            element: {
              enter(node) {
                convertStroke(node);
                transformSize(node);
              },
            },
          };
        },
      },
      //运行默认优化设置
      {
        name: "preset-default",
        params: {
          overrides: {
            convertShapeToPath: false,
            // mergePaths: false,
            inlineStyles: {},
          },
        },
      },
      // 添加前缀ID 解决 ID 冲突
      {
        name: "prefixIds",
        params: {
          prefix: genID(),
          delim: "_",
        },
      },
    ],
  };

  const { data } = svgoOptimize(svg, config);
  return data;
}

/**
 * 读取 SVG 元素
 * @param {string} svg - 输入的 SVG 字符串
 * @returns {string} - 遍历 SVG 元素后的字符串
 */
function renderSVGElement(svg) {
  const $ = cheerio.load(svg, { xmlMode: true });

  function processNode(node) {
    const tagName = node.tagName;
    const attrs = JSON.stringify(node.attribs);
    const children = $(node).children().map((_, child) => processNode(child)).get();
    const childrenString = children.length ? `[${children.join(", ")}]` : "null";
    return `createVNode("${tagName}", ${attrs}, ${childrenString})`;
  }

  const createVNodeCalls = $('svg').children().map((_, child) => processNode(child)).get();
  return createVNodeCalls.join(",\n");
}

/**
 * 处理 SVG 字符串
 * @param {string} svg - 输入的 SVG 字符串
 * @param {string} style - 图标的样式
 * @returns {Promise<string>} - 处理后的 SVG 字符串
 */
async function processSvg(svg, style) {
  const optimizedSvg = optimize(svg, style);
  const result = renderSVGElement(optimizedSvg);
  return result;
}

export { processSvg };
