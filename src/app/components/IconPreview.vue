<template>
  <!-- <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> -->
  <ul class="wrapper">
    <li
      class="group cursor-pointer"
      v-for="icon in filteredIcons"
      :key="icon.componentName"
      :title="icon.title"
      @click="copyName(icon.componentName)"
      @mouseenter="showElement(icon.componentName)"
      @mouseleave="hideElement(icon.componentName)"
    >
      <div class="item">
        <span v-if="icon.isAlias" class="alias-badge">Alias</span>
        <div class="icon-text icon-title" v-if="hoverState.icon === icon.componentName">
          {{ hoverState.text || icon.title }}
        </div>
        <component :class="shouldCheckeredBoardClass(icon.componentName)" :is="iconComponents[icon.componentName]" />
        <div class="icon-text">
          {{ icon.componentName }}
        </div>
        <div class="icon-options" v-if="hoverState.icon === icon.componentName">
          <!-- <button @click.stop="copyName(icon.componentName)" @mouseenter="handleHover('enter', '复制名称')" @mouseleave="handleHover('leave')">
            <IconCopy />
          </button> -->
          <button @click.stop="copyVue(icon.componentName)" @mouseenter="handleHover('enter', '复制 VUE')" @mouseleave="handleHover('leave')">
            <IconCode />
          </button>
          <button @click.stop="copySVG(icon.componentName)" @mouseenter="handleHover('enter', '复制 SVG')" @mouseleave="handleHover('leave')">
            <IconCopy />
          </button>
          <button @click.stop="downloadIcon(icon.componentName)" @mouseenter="handleHover('enter', '下载SVG')" @mouseleave="handleHover('leave')">
            <IconSVG class="scale-125" />
          </button>
          <button
            @click.stop="downloadIcon(icon.componentName, 'png')"
            @mouseenter="handleHover('enter', '下载PNG')"
            @mouseleave="handleHover('leave')"
          >
            <IconPNG class="scale-125" />
          </button>
        </div>
      </div>
    </li>
  </ul>
  <!-- </div> -->
</template>

<script setup>
import { ref, computed, h, render } from "vue";
import { useClipboard } from "@vueuse/core";
import "vue-m-message/dist/style.css";
import Message from "vue-m-message";
import IconCopy from "./icon/Copy.vue";
import IconCode from "./icon/Code.vue";
import IconPNG from "./icon/PNG.vue";
import IconSVG from "./icon/SVG.vue";

// Props
const props = defineProps({
  icons: Array,
  iconComponents: Object,
});

const { copy } = useClipboard();

// 复制逻辑
const copyName = async (name) => {
  await copy(name);
  Message.success("已复制: " + name);
};

const copyVue = async (name) => {
  await copy(`<${name} />`);
  Message.success(`已复制 Vue 代码: <${name} />`);
};

// 计算
const filteredIcons = computed(() => {
  return props.icons;
});

// 用于跟踪悬停哪个图标的状态
const hoverState = ref({
  icon: null,
  text: null,
});

const showElement = (iconComponentName) => {
  hoverState.value.icon = iconComponentName;
};

const hideElement = () => {
  hoverState.value.icon = null;
};

const handleHover = (type, text = null) => {
  hoverState.value.text = type === "enter" ? text : null;
};

// 获取渲染后的SVG元素
const getRenderedSVGElement = (componentName) => {
  const Component = props.iconComponents[componentName];
  if (!Component) {
    throw new Error("未找到对应的图标组件");
  }

  const container = document.createElement("div");
  render(h(Component), container);

  const svgElement = container.querySelector("svg");
  svgElement.setAttribute("width", "24px");
  svgElement.setAttribute("height", "24px");
  if (!svgElement) {
    throw new Error("渲染的组件不是有效的 SVG");
  }

  return { svgElement, container };
};

// 复制SVG代码
const copySVG = async (componentName) => {
  let container = null;
  try {
    const { svgElement, container: tempContainer } = getRenderedSVGElement(componentName);
    container = tempContainer;

    // 优化SVG格式，去除额外属性
    const svgHtml = svgElement.outerHTML
      .replace(/(\n|\t)/g, "") // 移除换行和制表符
      .replace(/\s{2,}/g, " ") // 压缩连续空格
      .replace(/>\s+</g, "><"); // 移除标签间空格

    await copy(svgHtml);
    Message.success(`已复制 SVG 代码: ${componentName}`);
  } catch (error) {
    console.error("复制 SVG 失败", error);
    Message.error(`复制 SVG 失败: ${error.message}`);
  } finally {
    if (container) {
      render(null, container);
      container.remove();
    }
  }
};

// 下载图标方法（优化版）
const downloadIcon = async (componentName, format = "svg") => {
  let container = null;
  try {
    const { svgElement, container: tempContainer } = getRenderedSVGElement(componentName);
    container = tempContainer;

    if (format === "svg") {
      // 获取 SVG 的外部 HTML
      const svgHtml = svgElement.outerHTML;

      // 创建 Blob 对象
      const blob = new Blob([svgHtml], { type: "image/svg+xml;charset=utf-8" });

      // 创建下载链接
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${componentName}.svg`;

      // 触发下载
      link.click();

      // 释放 URL 对象
      URL.revokeObjectURL(link.href);

      Message.success(`已下载 SVG: ${componentName}`);
    } else if (format === "png") {
      // 创建一个 Canvas 元素
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // 设置 Canvas 大小
      const width = 200; // 默认宽度
      const height = 200; // 默认高度
      canvas.width = width;
      canvas.height = height;

      // 将 SVG 转换为 Data URL
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      // 创建一个图像加载 SVG 数据
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });

      context.clearRect(0, 0, width, height);
      context.drawImage(img, 0, 0, width, height);

      // 释放 URL
      URL.revokeObjectURL(url);

      // 导出 PNG 文件
      canvas.toBlob((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${componentName}.png`;
        link.click();
        URL.revokeObjectURL(link.href);
        Message.success(`已下载 PNG: ${componentName}`);
      }, "image/png");
    } else {
      Message.error("不支持的文件格式");
    }
  } catch (error) {
    console.error("下载图标失败", error);
    Message.error("下载图标失败");
  } finally {
    if (container) {
      // 销毁临时容器
      render(null, container);
      container.remove();
    }
  }
};

// 对于部分图标使用棋盘格
const specialIcons = [
  "IconTagFilledColor",
  "IconStatusTripFilledColor",
  "IconSettingInterFilledColor",
  "IconScoreFilledColor",
  "IconSafeFilledColor",
  "IconRoomFilledColor",
  "IconRobotFilledColor",
  "IconResolveFilledColor",
  "IconProportionFilledColor",
  "IconNoteFilledColor",
  "IconHubFilledColor",
  "IconGroupFilledColor",
  "IconEfficiencyFilledColor",
  "IconCodingTestFilledColor",
  "IconBellFilledColor",
  "IconAppDefaultFilledColor",
  "IconAppDefault2FilledColor",
];
const shouldCheckeredBoardClass = (componentName) => {
  return specialIcons.includes(componentName) ? "icon-background rounded-lg bg-gray-200" : "";
};
</script>

<style scoped>
.wrapper {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: 2rem;
  margin: 0;
  width: 100%;
  height: fit-content;
  /* padding-bottom: 3rem; */
}

.item {
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 0.75rem;
  position: relative;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  transition: all 464ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  margin: 0;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.02),
    0 1px 3px -1px rgba(0, 0, 0, 0.2);
}

.group:hover .item {
  /* @apply shadow-lg; */
  border-radius: 1rem;
  font-size: 3rem;
  padding-bottom: 2.5rem;
  box-shadow:
    0 0.3px 0.4px rgba(0, 0, 0, 0.02),
    0 0.9px 1.5px rgba(0, 0, 0, 0.045),
    0 3.5px 6px rgba(0, 0, 0, 0.09);
  transform: scale3d(1.04, 1.04, 1.04) translateY(-0.5rem);
}

.icon-text {
  @apply h-4 w-full items-center justify-center truncate text-wrap text-center text-xs text-slate-500 antialiased group-hover:overflow-visible group-hover:break-words;
}

.alias-badge {
  @apply absolute right-0 top-0 flex items-center bg-blue-50 px-2 text-xs text-blue-600;
  border-radius: 0 0.75rem 0 0.5rem;
}

.icon-title {
  position: absolute;
  opacity: 0;
  top: 0;
  translate: 0 -6px;
  animation: iconTitle 0.4s forwards;
}

.icon-options {
  @apply flex w-32 gap-[1px] overflow-hidden rounded-full border border-slate-200 bg-slate-200 text-base;
  position: absolute;
  opacity: 0;
  bottom: 0;
  translate: 0 12px;
  animation: iconOptions 0.4s forwards;
}

.icon-options > button {
  @apply flex flex-1 items-center justify-center bg-white px-2 py-[5px] text-xs hover:bg-slate-50 hover:text-blue-600;
}

@keyframes iconOptions {
  to {
    opacity: 1;
    translate: 0 -16px;
  }
}
@keyframes iconTitle {
  to {
    opacity: 1;
    translate: 0 10px;
  }
}

.icon-background {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="rgba(0,0,0,0.05)" d="M0 0h16v16H0zm16 16h16v16H16z"/><path fill="rgba(255,255,255,0.05)" d="M0 16h16v16H0zM16 0h16v16H16z"/></svg>');
  background-size: 8px;
  background-position: center;
}
</style>
