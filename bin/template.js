import { readFileSync, existsSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";

// 获取当前模块文件的 URL (ES模块)
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块目录的路径
const __dirname = dirname(__filename);
// 定义项目的根目录
const rootDir = join(__dirname, "..");

// 获取默认size大小，如果没有设置则为 '24'
const defaultSize = process.env.npm_package_config_size || 24;

// 合并属性
const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "props.size",
    height: "props.size",
    "aria-hidden": true,
    viewBox: `0 0 ${defaultSize} ${defaultSize}`,
    transform: "props.rotate ? `rotate(${props.rotate})` : undefined",
  };
  const fillAttrs = {
    fill: "props.color",
  };
  const strokeAttrs = {
    stroke: "props.color",
    fill: "none",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  };
  const colorAttrs = {
    // 添加适用于 'color' 样式的属性
    fill: "none",
  };
  if (style === "fill") {
    return Object.assign({}, baseAttrs, fillAttrs);
  } else if (style === "stroke") {
    return Object.assign({}, baseAttrs, strokeAttrs);
  } else if (style === "color") {
    return Object.assign({}, baseAttrs, colorAttrs);
  } else {
    // 在其他情况下，默认返回 baseAttrs 和 fillAttrs 的合并
    return Object.assign({}, baseAttrs, fillAttrs);
  }
};

// 生成属性代码
const attrsToString = (attrs) => {
  // 判断 key 是否为变量
  const isVariableOrBoolean = (value) => {
    return (
      (typeof value === "string" && value.startsWith("props.")) ||
      typeof value === "boolean"
    );
  };

  return Object.entries(attrs)
    .map(([key, value]) => {
      if (key === "ref") {
        return `"${key}": ${value}`;
      } else if (isVariableOrBoolean(value)) {
        return `"${key}": ${value}`;
      } else {
        // 属性值添加引号
        return `"${key}": "${value}"`;
      }
    })
    .join(",\n");
};

// 定义用于检查需要插入 js 的日历图标的正则表达式
const CALENDAR_ICON_REGEX = /(calendar|AomMenuRLPZ|AomMenuWHQGL|AomMenuJRLC)/i;
// 读取 utilsCalendar 的代码
const utilsCalendarPath = resolve(__dirname, "./utilsCalendar.js");
const calendarCode = readFileSync(utilsCalendarPath, "utf-8");
// 生成日历相关的代码，包括导入和获取日期信息
const getCalendarCode = (svgChildren) => {
  const modifiedSvgChildren = svgChildren
    .replace(/"DD"/g, "DD")
    .replace(/"MMM"/g, "MMM");
  return {
    // calendarImport: `import { getCurrentDateInfo } from "../svg/calendarUtils";`,
    // calendarCode: `const { DD, MMM } = getCurrentDateInfo();`,
    calendarCode: calendarCode,
    svgChildren: modifiedSvgChildren,
  };
};

// 定义用于检查 name 是否包含 "Animation" 的正则表达式
const ANIMATION_ICON_REGEX = /animation/i;

const getAnimationCode = (name) => {
  const animationFilePath = resolve(rootDir, `./src/svg/${name}.js`);
  if (existsSync(animationFilePath)) {
    const importAnimationVue = `
    import { createVNode, nextTick, ref } from "vue";
    import { gsap } from "gsap";
    `;
    const animationCode = readFileSync(animationFilePath, "utf-8");
    return {
      importAnimationVue: importAnimationVue,
      animationCode: animationCode,
    };
  }
  return { importAnimationVue: "", animationCode: "" };
};

// 定义用于检查 componentName 是否包含 "loading" 的正则表达式
const SPIN_ICON_REGEX = /loading/i;

const getElementCode = async (names, svgCode) => {
  // 解构 names
  const { name, componentName, style } = names;
  // 如果图标名称包含 "loading"，则将 spin 设为 true
  const spin = SPIN_ICON_REGEX.test(componentName) ? true : false;

  // 检查组件名是否匹配动画相关正则表达式
  const isAnimation = ANIMATION_ICON_REGEX.test(name);
  const { importAnimationVue, animationCode } = getAnimationCode(isAnimation ? name : "");
  const importVue = importAnimationVue || `import { createVNode } from "vue";`;

  // 检查组件名是否匹配日历相关正则表达式
  const isCalendar = CALENDAR_ICON_REGEX.test(componentName);
  // 使用解构赋值，如果不是日历组件，则使用默认的空字符串
  const { calendarCode: utilsCode, svgChildren } = isCalendar
    ? getCalendarCode(svgCode.svgChildren)
    : { calendarCode: "", svgChildren: svgCode.svgChildren };

  // 更新 svgCode.svgChildren
  svgCode.svgChildren = svgChildren;

  // 合并自定义attrs 和 svg attrs
  const attrsString = attrsToString({
    ...svgCode.svgAttributes,
    ...getAttrs(style),
  });
  const code = `
    ${importVue}
    import { IconWrapper } from '../runtime';

    export default IconWrapper('${componentName}', ${spin}, function (props) {
      ${animationCode}
      ${utilsCode}
      return createVNode("svg", {
        ${attrsString}
      }, [
        ${svgCode.svgChildren}
      ]);
    });
  `;
  return await prettier.format(code, { parser: "babel" });
};

export { getElementCode };
