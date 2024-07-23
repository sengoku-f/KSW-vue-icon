import { createVNode } from "vue";

const DEFAULT_ICON_CONFIGS = {
  size: "1em",
  color: "currentColor",
  spin: false,
  prefix: "ksw",
};

export function IconWrapper(name, spin, render) {
  return {
    name: "Icon" + name,
    props: {
      size: {
        type: [String, Number],
        default: DEFAULT_ICON_CONFIGS.size,
      },
      color: {
        type: String,
        default: DEFAULT_ICON_CONFIGS.color,
      },
      rotate: {
        type: Number,
      },
      spin: {
        type: Boolean,
        default: spin || DEFAULT_ICON_CONFIGS.spin,
      },
      grayscale:{
        type: Boolean,
        default: false,
      }
    },
    setup(props) {
      return () => {
        const { spin, grayscale } = props;

        const cls = [
          `${DEFAULT_ICON_CONFIGS.prefix}-icon`,
          `${DEFAULT_ICON_CONFIGS.prefix}-icon-${name}`,
        ];

        if (spin) {
          cls.push(`${DEFAULT_ICON_CONFIGS.prefix}-icon-spin`);
        }

        if (grayscale) {
          cls.push(`${DEFAULT_ICON_CONFIGS.prefix}-icon-grayscale`);
        }

        return createVNode(
          "span",
          {
            class: cls.join(" "),
          },
          [render(props)]
        );
      };
    },
  };
}
