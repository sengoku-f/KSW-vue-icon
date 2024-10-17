<template>
  <!-- <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> -->
  <ul class="wrapper">
    <li
      class="group item cursor-pointer"
      v-for="iconComponentName in filteredIconNames"
      :key="iconComponentName"
      :title="iconComponentName"
      @click="copyName(iconComponentName)"
      @mouseenter="showElement(iconComponentName)" 
      @mouseleave="hideElement(iconComponentName)"
    >
      <component :is="Icons[iconComponentName]" />
      <div class="icon-title">
        {{ iconComponentName }}
      </div>
      <div 
        class="icon-options"
        v-if="hoveredIcon === iconComponentName"
      >
        <button @click.stop="copyName(iconComponentName)">
          <IconCopy />
        </button>
        <button @click.stop="copyVue(iconComponentName)">
          <IconCode />
        </button>
      </div>
    </li>
  </ul>
  <!-- </div> -->
</template>

<script setup>
import { ref, computed } from "vue";
import * as Icons from "@/map.js";
import useClipboard from "vue-clipboard3";
import "vue-m-message/dist/style.css";
import Message from "vue-m-message";
import IconCopy from "./icon/Copy.vue";
import IconCode from "./icon/Code.vue";

// Props
const props = defineProps({
  iconNames: Array,
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
const filteredIconNames = computed(() => {
  return props.iconNames;
});

// 用于跟踪悬停哪个图标的状态
const hoveredIcon = ref(null);

const showElement = (iconComponentName) => {
  hoveredIcon.value = iconComponentName;
};

const hideElement = () => {
  hoveredIcon.value = null;
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
  padding-bottom: 3rem;
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

.item:hover {
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
.icon-title {
  @apply items-center justify-center text-xs antialiased text-center truncate text-slate-500 text-wrap w-full h-4 group-hover:overflow-visible group-hover:break-words;
  /* position: absolute;
  opacity: 0;
  top: 0;
  translate: 0 10px;
  animation: iconTitle 0.4s forwards; */
}

.icon-options {
  @apply flex text-base w-32;
  position: absolute;
  opacity: 0;
  bottom: 0;
  translate: 0 12px;
  animation: iconOptions 0.4s forwards;
}

.icon-options > button {
  @apply flex flex-1 items-center justify-center px-2 py-[5px] border border-slate-200 bg-white text-xs hover:bg-slate-50 hover:text-blue-600;
}

.icon-options > button:first-child {
  @apply rounded-l-full;
}

.icon-options > button:last-child {
  @apply rounded-r-full border-l-0;
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
    translate: 0 20px;
  }
}
</style>
