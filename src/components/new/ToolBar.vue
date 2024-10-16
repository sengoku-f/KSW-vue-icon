<template>
  <div class="sticky top-0 w-full bg-white" :class="{ 'shadow-lg bg-white/50 backdrop-blur-xl': isSticky }">
    <div aria-hidden="false" ref="targetDiv" :class="{ 'p-40': isSticky }" class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 mt-4 gap-3 transition-all hidden md:flex isolate items-baseline lg:gap-4" role="tablist" aria-orientation="horizontal">
      <button :class="buttonClass.allButtonClass" @click="filterColorIcons(false)">
        全部
      </button>
      <button :class="buttonClass.colorButtonClass" @click="filterColorIcons(true)">
        彩色
      </button>
      <div class="ml-auto flex items-center gap-2 text-sm" role="none" aria-hidden="true">
        <div class="relative inline-block">
          <select
            class="appearance-none px-4 py-1 rounded-md border hover:bg-slate-50 border-slate-200 cursor-pointer focus-visible:outline-none pr-8 transition"
            @change="handleSortChange">
            <option value="date">最新</option>
            <option value="name">默认</option>
          </select>
          <IconArrowDown class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <div class="relative flex-auto">
          <IconSearch
            class="pointer-events-none absolute !flex justify-center items-center h-full w-8 transition" />
          <input type="search" v-model="searchQuery" aria-label="搜索所有图标" placeholder="搜索所有图标…"
            class="appearance-none block w-44 rounded-md border border-slate-200 transition py-1 pl-8 pr-4 focus:outline-none" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import IconSearch from '../icon/Search.vue'
import IconArrowDown from '../icon/ArrowDown.vue'

const props = defineProps({
  showColorIcons: Boolean,
  sortBy: String,
  searchQuery: String,
});

const emit = defineEmits(['onSortChange', 'onFilterColorIcons', 'onSearchChange']);

const searchQuery = ref(props.searchQuery);

watch(searchQuery, (newQuery) => {
  emit('onSearchChange', newQuery);
});

const handleSortChange = (event) => {
  emit('onSortChange', event.target.value);
};

const filterColorIcons = (show) => {
  emit('onFilterColorIcons', show);
};

const commonButtonClass = [
  "inline-flex",
  "px-3",
  "py-1.5",
  "text-sm",
  "font-medium",
  "leading-6",
  "duration-200",
  "rounded-md",
  "transition-all"
];

const getButtonClass = (isColor) => {
  const buttonClass = [...commonButtonClass];
  if (isColor) {
    buttonClass.push("text-slate-900", "bg-slate-100");
  } else {
    buttonClass.push("text-slate-500", "hover:text-slate-900", "hover:bg-slate-50");
  }
  return buttonClass;
};

const buttonClass = computed(() => ({
  allButtonClass: getButtonClass(!props.showColorIcons),
  colorButtonClass: getButtonClass(props.showColorIcons)
}));

// 滚动逻辑
const isSticky = ref(false);
const targetDiv = ref(null);
// 使用 ref 存储当前的顶部偏移
const topOffset = ref(0);

const handleScroll = () => {
  if (targetDiv.value) {
    const rect = targetDiv.value.getBoundingClientRect();
    console.log(rect.top, topOffset.value);
    isSticky.value = rect.top <= topOffset.value;
  }
};

// 监听媒体查询变化并设置对应的 topOffset
function updateTopOffset() {
  topOffset.value = 0;
  handleScroll();
}

onMounted(() => {
  const scrollContainer = document.querySelector("div[data-overlayscrollbars-contents]");
  scrollContainer.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateTopOffset);
  updateTopOffset(); // 初始化时即检查一次

  //观察更改和更新偏移的窗口宽度
  const resizeObserver = new ResizeObserver(updateTopOffset);
  resizeObserver.observe(document.body);
});

onUnmounted(() => {
  const scrollContainer = document.querySelector("div[data-overlayscrollbars-contents]");
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateTopOffset);
});
</script>
