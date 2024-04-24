// 定义默认的图标属性
const DEFAULT_ICON_CONFIGS = {
  size: '1em',
  color: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  spin: false,
  prefix: 'ksw',
};

const getAttrs = (style) => {
  const baseAttrs = {
    'xmlns': 'http://www.w3.org/2000/svg',
    ':width': 'size',
    ':height': 'size',
    'viewBox': '0 0 24 24',
    'aria-hidden': 'true',
    'v-on': '$listeners'
  }
  const fillAttrs = {
    ':fill': 'color'
  }
  const strokeAttrs = {
    ':stroke': 'color',
    'fill': 'none',
    'stroke-width': DEFAULT_ICON_CONFIGS.strokeWidth,
    'stroke-linecap': DEFAULT_ICON_CONFIGS.strokeLinecap,
    'stroke-linejoin': DEFAULT_ICON_CONFIGS.strokeLinejoin
  }
  const colorAttrs = {
    // 添加适用于 'color' 样式的属性
    ':fill': 'color'
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

const getElementCode = (ComponentName, attrs, svgCode) => `
  <template>
    <span :class="iconClasses">
      <svg
        ${attrs}
      >
        ${svgCode}
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'Icon${ComponentName}',
      props: {
        size: {
          type: [Number, String],
          default: '${DEFAULT_ICON_CONFIGS.size}'
        },
        color: {
          type: String,
          default: '${DEFAULT_ICON_CONFIGS.color}'
        },
        spin: {
          type: Boolean,
          default: ${DEFAULT_ICON_CONFIGS.spin}
        }
      },
      computed: {
        iconClasses() {
          return [
            '${DEFAULT_ICON_CONFIGS.prefix}' + '-icon',
            '${DEFAULT_ICON_CONFIGS.prefix}' + '-icon-' + this.$options.name.toLowerCase(),
            { ['${DEFAULT_ICON_CONFIGS.prefix}' + '-icon-spin']: this.spin }
          ];
        }
      }
    };
  </script>
`


module.exports = { getAttrs, getElementCode }
