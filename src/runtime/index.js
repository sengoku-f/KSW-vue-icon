// runtime/IconWrapper.js
import { createVNode as _createVNode } from "vue";

const DEFAULT_ICON_CONFIGS = {
  size: '1em',
  color: 'currentColor',
  spin: false,
  prefix: 'ksw',
};

export function IconWrapper(name, spin, render) {
  return {
    name: 'Icon' + name,
    props: {
      size: {
        type: [String, Number],
        default: DEFAULT_ICON_CONFIGS.size
      },
      color: {
        type: String,
        default: DEFAULT_ICON_CONFIGS.color
      },
      spin: {
        type: Boolean,
        default: DEFAULT_ICON_CONFIGS.spin
      },
    },
    setup(props) {
      return () => {
        const { size, color } = props;
        console.log(props);
        const svgProps = {
          size,
          color,
          spin
        };
        const cls = [`${DEFAULT_ICON_CONFIGS.prefix}-icon`, `${DEFAULT_ICON_CONFIGS.prefix}-icon-${name}`];

        if (spin) {
          cls.push(`${DEFAULT_ICON_CONFIGS.prefix}-icon-spin`);
        }

        return _createVNode("span", {
          class: cls.join(' ')
        }, [render(svgProps)]);
      };
    }
  };
}
