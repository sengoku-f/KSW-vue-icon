import prettier from 'prettier'

// 获取默认size大小，如果没有设置则为 '24'
const defaultSize = process.env.npm_package_config_size || 24

// 定义默认的图标属性
const DEFAULT_ICON_CONFIGS = {
  size: '1em',
  color: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const getAttrs = (style) => {
  const baseAttrs = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'width': 'props.size',
    'height': 'props.size',
    'aria-hidden': true,
    'viewBox': `0 0 ${defaultSize} ${defaultSize}`,
  }
  const fillAttrs = {
    'fill': 'props.color'
  }
  const strokeAttrs = {
    'stroke': 'props.color',
    'fill': 'none',
    'stroke-width': DEFAULT_ICON_CONFIGS.strokeWidth,
    'stroke-linecap': DEFAULT_ICON_CONFIGS.strokeLinecap,
    'stroke-linejoin': DEFAULT_ICON_CONFIGS.strokeLinejoin
  }
  const colorAttrs = {
    // 添加适用于 'color' 样式的属性
    'fill': 'props.color'
  }
  if (style === 'fill') {
    return Object.assign({}, baseAttrs, fillAttrs);
  } else if (style === 'stroke') {
    return Object.assign({}, baseAttrs, strokeAttrs);
  } else if (style === 'color') {
    return Object.assign({}, baseAttrs, colorAttrs);
  } else {
    // 在其他情况下，默认返回 baseAttrs 和 fillAttrs 的合并
    return Object.assign({}, baseAttrs, fillAttrs);
  }
}

// 生成属性代码
const attrsToString = (attrs) => {
  return Object.entries(attrs).map(([key, value]) =>{
    // 如果属性名是 "width" "height" "fill"，那么属性值不添加引号
    if (key === 'width' || key === 'height' || key === 'fill') {
      return `"${key}": ${value}`;
    } else {
      return `"${key}": "${value}"`;  // 属性值添加引号
    }
  }).join(",\n");
}

// 定义用于检查 ComponentName 是否包含 "loading" 的正则表达式
const SPIN_ICON_REGEX = /loading/i;

const getElementCode = async (ComponentName, style, svgCode) => {
  // 如果图标名称包含 "loading"，则将 spin 设为 true
  const spin = SPIN_ICON_REGEX.test(ComponentName) ? true : false;
  const attrsString = attrsToString(getAttrs(style));
  const code = `
    import { createVNode } from "vue";
    import { IconWrapper } from '../runtime';

    export default IconWrapper('${ComponentName}', ${spin}, function (props) {
      return createVNode("svg", {
        ${attrsString}
      }, [${svgCode}
      ]);
    });
  `;
  return await prettier.format(code, { parser: "babel" });
};

export { getAttrs, getElementCode };
