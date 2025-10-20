import { optimize as svgoOptimize } from "svgo";
import cheerio from "cheerio";

const ICON_TYPES = new Set(['color', 'fill', 'stroke']);
const FILL_REG = /\bfill:\s*(?!url\(['"]?)[^;}]+;?/gi;
// 获取默认size大小，如果没有设置则为 '24'
const defaultSize = parseFloat(process.env.npm_package_config_size) || 24;

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
  let maxNumber;
  // 1. 宽度和高度存在时：解析 width 和 height，并计算最大值（maxNumber）。
  // 2. 仅存在 viewBox 时：解析 viewBox 的值，确定视区的宽度和高度，计算最大值（maxNumber）。
  // 3. 都不存在时：使用默认尺寸（defaultSize）作为 maxNumber
  if (node.attributes["width"] && node.attributes["height"]) {
    maxNumber = Math.max(parseFloat(node.attributes["width"]), parseFloat(node.attributes["height"]));
  } else if (node.attributes["viewBox"]) {
    const viewBoxValues = node.attributes["viewBox"].split(" ").map(Number);
    maxNumber = Math.max(viewBoxValues[2], viewBoxValues[3]);
  } else {
    // 如果都没有，设置 maxNumber 为默认尺寸
    maxNumber = defaultSize;
  }

  const result = defaultSize / maxNumber;

  // 定义需要查找的元素名称的正则表达式
  const namePattern = new RegExp("rect|line|circle|ellipse|path|text");

  if (node.name == "svg" && node.attributes["viewBox"] != `0 0 ${defaultSize} ${defaultSize}`) {
    traverse(node, result); // 调用递归函数遍历子节点
  }

  // 定义递归函数来遍历节点及其子节点
  function traverse(node, result) {
    // 判断当前节点是否需要进行缩放操作
    if (namePattern.test(node.name)) {
      // 尝试获取节点中的 transform 属性值。如果节点尚未有 transform 属性，currentTransform 将被设置为空字符串
      let currentTransform = node.attributes["transform"] || "";
      // 将原有的 transform 属性值（如果有的话）与新的缩放变换（scale(${result})）结合起来，并重新赋值给节点的 transform 属性
      const translateRegex = /translate\(([^)]+)\)/;
      const match = currentTransform?.match(translateRegex);
      if (match) {
        const params = match ? match[1].split(' ').map(Number) : []
        const newTranslate = `translate(${params[0] * result} ${params[1] ? params[1] * result : ''})`;
        currentTransform = currentTransform.replace(match[0], newTranslate)
      }
      node.attributes["transform"] = `${currentTransform} scale(${result})`
    }
    // 如果当前节点有子节点，则继续遍历子节点
    if (node.children) {
      node.children.forEach((child) => traverse(child, result));
    }
  }
}

// 自定义插件-处理没有转换的路径
function convertStroke(node, style) {
  // 定义需要查找的元素名称的正则表达式
  const namePattern = new RegExp("rect|line|circle|ellipse");
  // 定义递归函数来遍历节点及其子节点
  function traverse(node) {
    // 如果当前节点名称匹配要查找的元素名称,并且存在stroke
    if (namePattern.test(node.name) && node.attributes["stroke"]) {
      // 填充有颜色删除 fill
      if (new RegExp("#(?:[0-9a-fA-F]{3,4}){1,2}|(?:rgb|hsl)a?([^)]*)").test(node.attributes["fill"])) {
        delete node.attributes["fill"];
      }
      // 如果 style 为 color 则使得 stroke 为当前颜色 否则为 currentColor
      const strokeColor = style === "color" ? node.attributes["stroke"] : "props.color";
      // 对匹配到的节点执行处理逻辑
      Object.assign(node.attributes, {
        stroke: strokeColor,
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
function optimize(svg, { style, name }) {
  // 如果 style 是 'color'，则不移除任何属性；
  // 如果 style 是 'fill'，则移除 'fill' 和 'stroke.*', stroke先不移除因为 mastergo 使用了一些stroke。
  // 如果 style 是 'stroke'，则移除 'stroke.*'；
  // 排除 rect|line|circle|ellipse 元素的 fill 和 stroke 属性, 排除 url 开头的值
  let removeAttrs = "";

  if (style === "fill") {
    removeAttrs = "*:(fill):^(?!url).*";
  } else if (style === "stroke") {
    removeAttrs = "*:(stroke.*):^(?!url).*";
  } else if (style === "color") {
    removeAttrs = "";
  }

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
                convertStroke(node, style);
                transformSize(node);
              },
            },
          };
        },
      },
      {
        name: "rename-class",
        fn: (ast) => {
          let seq = 1;
          const classMapping = new Map();
          
          function traverse(node) {
            if (node.name === 'style' && node.children?.[0]?.value) {
              let css = node.children[0].value;
              css = css.replace(/\.([a-zA-Z0-9_-]+)/g, (_match, className) => {
                if (!classMapping.has(className)) {
                  classMapping.set(className, `${name}-${seq++}`);
                }
                return `.${classMapping.get(className)}`;
              });
              node.children[0].value = css;
            }
            if (node.attributes?.class) {
              const classes = node.attributes.class.split(' ').filter(Boolean);
              const newClasses = classes.map(cls => {
                if (!classMapping.has(cls)) {
                  classMapping.set(cls, `${name}-${seq++}`);
                }
                return classMapping.get(cls);
              });
              // 递归处理所有节点
              node.attributes.class = newClasses.join(' ');
            }
            
            if (node.children) {
              node.children.forEach(child => traverse(child));
            }
          }

          ast.children.forEach(node => traverse(node));
        }
      },
      // 删除行内样式
      {
        name: "removeAttrs",
        params: {
          attrs: "*:(style):^(fill).*",
        },
      },
      //运行默认优化设置
      {
        name: "preset-default",
        params: {
          overrides: {
            // convertShapeToPath: false,
            // mergePaths: false,
            // removeUnknownsAndDefaults: {
            //   unknownAttrs: false,
            // },
            // 默认的配置项
            // removeDoctype: false,
            // removeXMLProcInst: false,
            // removeComments: false,
            // removeMetadata: false,
            // removeEditorsNSData: false,
            // cleanupAttrs: false,
            // mergeStyles: false,
            // inlineStyles: false,
            // minifyStyles: false,
            // cleanupIds: false,
            // removeUselessDefs: false,
            // cleanupNumericValues: false,
            // convertColors: false,
            // removeUnknownsAndDefaults: false,
            // removeNonInheritableGroupAttrs: false,
            // removeUselessStrokeAndFill: false,
            // cleanupEnableBackground: false,
            // removeHiddenElems: false,
            // removeEmptyText: false,
            // convertShapeToPath: false,
            // convertEllipseToCircle: false,
            // moveElemsAttrsToGroup: false,
            // moveGroupAttrsToElems: false,
            // collapseGroups: false,
            // convertPathData: false,
            // convertTransform: false,
            // removeEmptyAttrs: false,
            // removeEmptyContainers: false,
            // removeUnusedNS: false,
            // mergePaths: false,
            // sortAttrs: false,
            // sortDefsChildren: false,
            // removeDesc: false,
          },
        },
      },
      // 添加前缀ID 解决 ID 冲突
      {
        name: "prefixIds",
        params: {
          prefix: genID(),
          delim: "_",
          prefixClassNames: false,
        },
      },
    ],
  };

  const { data } = svgoOptimize(svg, config);
  return data;
}

// 定义一个处理属性的函数，将 data-ref 改为 ref，并且值不用双引号
function processAttributes(attributes) {
  let processedAttrs = { ...attributes };
  if (processedAttrs["data-ref"]) {
    processedAttrs["ref"] = processedAttrs["data-ref"]; // 将 data-ref 改为 ref
    delete processedAttrs["data-ref"]; // 删除原有的 data-ref 属性
  }
  return processedAttrs; // 返回处理后的属性对象
}

// 节点属性对象转换为字符串形式
function attributesToString(attributes) {
  const attrsString = Object.entries(attributes)
    .map(([key, value]) => {
      if (key === "ref") {
        return `${key}: ${value}`; // ref 属性值不用双引号
      }
      if (key === "stroke" && typeof value === "string" && value.startsWith("props.")) {
        return `"${key}": ${value}`; // stroke 属性值以 props. 开头不用双引号
      }
      // 属性值添加引号
      return `"${key}": "${value}"`;
    })
    .join(", ");
  return `{${attrsString}}`; // 返回包含花括号的属性字符串
}

/**
 * 读取 SVG 元素
 * @param {string} svg - 输入的 SVG 字符串
 * @returns {string} - 遍历 SVG 元素后的字符串
 */
// 定义 renderSVGElement 函数，接收一个 SVG 字符串作为参数
function renderSVGElement(svg, name = '') {
  // 使用 cheerio 加载 SVG 字符串，启用 xmlMode 以便正确处理 SVG
  const $ = cheerio.load(svg, { xmlMode: true });

  // 定义一个递归处理节点的辅助函数
  function processNode(node) {
    const tagName = node.tagName; // 获取节点的标签名
    // 使用 processAttributes 函数处理节点的属性
    const attrsObject = processAttributes(node.attribs);
    const svgStyle = attrsObject['style'];
    // 处理黑白图标中的fill属性
    if (attrsObject['style']) {
      attrsObject['style'] = removeTargetAttrs(name, attrsObject['style'])
    }
    const attrsString = attributesToString(attrsObject);

    // 过滤出节点的文本内容节点（类型为 text 或 cdata），并且过滤多余的空白字符
    const textContent = $(node)
      .contents()
      .filter(function () {
        return this.type === "text" || this.type === "cdata";
      })
      .text()
      .trim();

    // 递归处理子节点，生成子节点的 VNode 表示
    const children = $(node)
      .children()
      .map((_, child) => processNode(child))
      .get();
    // 如果有子节点，则将子节点数组转换为字符串，否则使用文本内容或 null
    const childrenOrText = children.length ? `[${children.join(", ")}]` : textContent ? JSON.stringify(textContent) : "null";

    // 返回当前节点的 VNode 表示
    return `createVNode("${tagName}", ${attrsString}, ${removeTargetAttrs(name, childrenOrText)})`;
  }

  // 获取 svg 标签的属性
  const svgElement = $("svg").get(0);
  const svgAttributes = processAttributes(svgElement.attribs); // 获取 svg 标签的属性

  // 递归处理 svg 标签的子节点，生成子节点的 VNode 表示
  const createVNodeCalls = $("svg")
    .children()
    .map((_, child) => processNode(child))
    .get();

  // 返回包含 svg 属性和子节点 VNode 表示的对象
  return {
    svgAttributes: svgAttributes, // svg 标签的属性
    svgChildren: createVNodeCalls.join(",\n"), // 子节点的 VNode 表示
  };
}

function removeTargetAttrs(iconName, attrsStr) {
  const isNormalSvg = !ICON_TYPES.has(iconName.split('-').pop());
  if (isNormalSvg && typeof attrsStr === "string" && FILL_REG.test(attrsStr)) {
    return attrsStr.replace(FILL_REG, '');
  }
  return attrsStr;
}

/**
 * 处理 SVG 字符串
 * @param {string} svg - 输入的 SVG 字符串
 * @param {string} style - 图标的样式
 * @returns {Promise<string>} - 处理后的 SVG 字符串
 */
async function processSvg(svg, iconInfo) {
  const optimizedSvg = optimize(svg, iconInfo);
  const result = renderSVGElement(optimizedSvg, iconInfo.name);
  return result;
}

export { processSvg };
