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
      <component :is="iconComponents[icon.componentName]" />
      <div class="icon-text">
        {{ icon.componentName }}
      </div>
      <div class="icon-options" v-if="hoverState.icon === icon.componentName">
        <button
        @click.stop="copyName(icon.componentName)"
        @mouseenter="handleHover('enter', '复制名称')"
        @mouseleave="handleHover('leave')"
      >
        <IconCopy />
      </button>
      <button
        @click.stop="copyVue(icon.componentName)"
        @mouseenter="handleHover('enter', '复制Vue')"
        @mouseleave="handleHover('leave')"
      >
        <IconCode />
      </button>
      <button
        @click.stop="downloadSvg(icon.componentName)"
        @mouseenter="handleHover('enter', '下载Svg')"
        @mouseleave="handleHover('leave')"
      >
        <IconDownload />
      </button>
      </div>
    </div>
    </li>
  </ul>
  <!-- </div> -->
</template>

<script setup>
import { ref, computed, h, render } from "vue";
import useClipboard from "vue-clipboard3";
import "vue-m-message/dist/style.css";
import Message from "vue-m-message";
import IconCopy from "./icon/Copy.vue";
import IconCode from "./icon/Code.vue";
import IconDownload from "./icon/Download.vue";

// Props
const props = defineProps({
  icons: Array,
  iconComponents: Object,
});

// 复制逻辑
const copyName = async (name) => {
  await useClipboard().toClipboard(name);
  Message.success("已复制: " + name);
};

const copyVue = async (name) => {
  await useClipboard().toClipboard(`<${name} />`);
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

// 下载 SVG 方法
const downloadSvg = async (componentName) => {
  let container = null;
  try {
    // 获取组件对象
    const Component = props.iconComponents[componentName];
    if (!Component) {
      Message.error("未找到对应的图标组件");
      return;
    }

    // 创建一个临时容器
    container = document.createElement("div");

    // 使用 Vue 的 render 函数渲染组件
    render(h(Component), container);

    // 获取渲染结果（SVG 元素）
    const svgElement = container.querySelector("svg");
    if (!svgElement) {
      Message.error("渲染的组件不是有效的 SVG");
      return;
    }

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
  } catch (error) {
    console.error("下载 SVG 失败", error);
    Message.error("下载 SVG 失败");
  } finally {
    // 销毁临时容器
    render(null, container); // 卸载虚拟 DOM
    container.remove(); // 移除容器节点
  }
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
  @apply items-center justify-center text-xs antialiased text-center truncate text-slate-500 text-wrap w-full h-4 group-hover:overflow-visible group-hover:break-words;
}

.alias-badge {
  @apply text-xs text-blue-600 bg-blue-50 flex items-center absolute top-0 right-0 px-2;
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
  @apply flex text-base w-32 gap-[1px] rounded-full border border-slate-200 bg-slate-200 overflow-hidden;
  position: absolute;
  opacity: 0;
  bottom: 0;
  translate: 0 12px;
  animation: iconOptions 0.4s forwards;
}

.icon-options > button {
  @apply flex flex-1 items-center justify-center px-2 py-[5px] bg-white text-xs hover:bg-slate-50 hover:text-blue-600;
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
</style>
