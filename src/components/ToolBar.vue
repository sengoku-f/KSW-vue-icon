<template>
  <div class="sticky top-0 w-full bg-white my-4" :class="{ 'border-b bg-white/50 backdrop-blur-xl shadow-sm': isSticky }">
    <div aria-hidden="false" ref="targetDiv" :class="{ 'px-0': isSticky }" class="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 gap-3 transition-all flex isolate items-baseline lg:gap-4" role="tablist" aria-orientation="horizontal">
      <div class="relative">
        <IconSearch
          class="pointer-events-none absolute !flex justify-center items-center h-full w-9 transition" />
        <input type="search" v-model="searchQuery" aria-label="搜索所有图标" placeholder="搜索所有图标…"
          class="appearance-none block w-56 rounded-lg border border-slate-200 text-sm transition py-2 pl-8 pr-4 focus:outline-none shadow-sm" />
      </div>
      <div class="ml-auto flex items-center gap-4 text-sm" role="none" aria-hidden="true">
        <label class="flex items-center gap-1 cursor-pointer select-none">
          <input class="size-4" type="checkbox" @change="toggleAnimationIcons">
          动画图标
        </label>
        <div class="relative inline-block">
          <select
            class="appearance-none text-sm px-4 py-2 rounded-lg border hover:bg-slate-50 border-slate-200 cursor-pointer focus-visible:outline-none pr-8 transition"
            @change="handleColorFilterChange">
            <option value="all">全部</option>
            <option value="monochrome">单色</option>
            <option value="color">彩色</option>
          </select>
          <IconArrowDown class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <div class="relative inline-block">
          <select
            class="appearance-none text-sm px-4 py-2 rounded-lg border hover:bg-slate-50 border-slate-200 cursor-pointer focus-visible:outline-none pr-8 transition"
            @change="handleSortChange">
            <option value="date">最新</option>
            <option value="name">默认</option>
          </select>
          <IconArrowDown class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import IconSearch from './icon/Search.vue'
import IconArrowDown from './icon/ArrowDown.vue'

const props = defineProps({
  showColorIcons: Boolean,
  sortBy: String,
  searchQuery: String,
});

const emit = defineEmits(['onSortChange', 'onFilterColorIcons', 'onToggleAnimationIcons', 'onSearchChange']);

const searchQuery = ref(props.searchQuery);

watch(searchQuery, (newQuery) => {
  emit('onSearchChange', newQuery);
});

const handleSortChange = (event) => {
  emit('onSortChange', event.target.value);
};

const handleColorFilterChange = (event) => {
  const value = event.target.value;
  if (value === "all") {
    emit('onFilterColorIcons', 'all');
  } else if (value === "color") {
    emit('onFilterColorIcons', 'color');
  } else {
    emit('onFilterColorIcons', 'monochrome');
  }
};

const toggleAnimationIcons = () => {
  emit('onToggleAnimationIcons');
};

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
