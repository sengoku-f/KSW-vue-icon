<template>
  <ToolBar
    id="ToolBar"
    :showColorIcons="showColorIcons"
    :showAnimationIcons="showAnimationIcons"
    :sortBy="sortBy"
    :searchQuery="searchQuery"
    @onSortChange="handleSortChange"
    @onFilterColorIcons="filterColorIcons"
    @onToggleAnimationIcons="toggleAnimationIcons"
    @onSearchChange="updateSearchQuery"
  />
  <div class="flex mx-auto max-w-7xl gap-6 mt-6 mb-12 px-4 sm:px-6 lg:px-8">
    <aside class="sidebar flex-shrink-0 w-56 overflow-auto overscroll-auto sticky top-[84px]">
      <ul class="flex flex-col gap-1">
        <li v-for="category in categories" :key="category">
          <div @click="changeCategory(category)" class="w-full px-3 py-2 rounded-lg cursor-pointer select-none text-slate-500 font-normal hover:bg-slate-50 transition-all text-sm" :class="{ 'is-active': selectedCategory === category }">
            {{ category }}
          </div>
        </li>
      </ul>
    </aside>
    <IconPreview :icons="filteredIcons" :iconComponents="iconSet" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import ToolBar from "./ToolBar.vue";
import IconPreview from "./IconPreview.vue";

// 从 map 中引入所有 icons 组件
import { ProjectIconsMap } from "@/map";
import { iconsDataBase } from "~/icons-base.js";
import { iconsDataGuangfa } from "~/icons-guangfa.js";
import { iconsDataKingAutometa } from "~/icons-KingAutometa.js";

const iconsData = [ ...iconsDataBase, ...iconsDataGuangfa, ...iconsDataKingAutometa ];

// 基于 name 去重
const uniqueIconsData = Array.from(
  new Map(iconsData.map((icon) => [icon.name, icon])).values()
);

const extendedIconsData = uniqueIconsData.flatMap((icon) => {
  // 原始图标项
  const mainIcon = { ...icon, isAlias: false };

  // 别名图标项
  const aliasIcons = (icon.componentAlias || []).map((alias, index) => ({
    ...icon,
    componentName: alias,
    name: `${icon.name}-alias-${index}`,
    isAlias: true, // 标记为别名图标
  }));

  return [mainIcon, ...aliasIcons];
});

// 将 ProjectIconsMap 中的值从后往前合并为一个
const iconSet = Object.values(ProjectIconsMap).reduceRight((acc, current) => {
  return { ...acc, ...current };
}, {});

// 状态和属性
const icons = ref([]);
const sortBy = ref("date");
const showColorIcons = ref("all");
const showAnimationIcons = ref(false); // 控制是否显示动画图标
const searchQuery = ref("");
const selectedCategory = ref("全部");

// 获取所有类别
const categories = computed(() => {
  const allCategories = iconsData.map(icon => icon.categoryCN);
  return ["全部", ...new Set(allCategories)];
});

// 过滤和排序图标
const sortIcons = () => {
  let sortedIcons = [...extendedIconsData];
  if (sortBy.value === "date") {
    sortedIcons.sort((a, b) => new Date(b.modifiedTime) - new Date(a.modifiedTime));
  } else {
    sortedIcons.sort((a, b) => a.componentName.localeCompare(b.componentName));
  }
  if (showColorIcons.value === 'color') {
    sortedIcons = sortedIcons.filter((icon) => icon.componentName.includes("Color"));
  } else if (showColorIcons.value === 'monochrome') {
    sortedIcons = sortedIcons.filter((icon) => !icon.componentName.includes("Color"));
  }
  if (showAnimationIcons.value) {
    sortedIcons = sortedIcons.filter((icon) => icon.componentName.includes("Animation"));
  }
  if (selectedCategory.value !== "全部") {
    sortedIcons = sortedIcons.filter(icon => icon.categoryCN === selectedCategory.value);
  }
  icons.value = sortedIcons.map((icon) => ({ componentName: icon.componentName, title: icon.title, projectName: icon.projectName, isAlias: icon.isAlias }));
};

// 初始排序
onMounted(() => {
  sortIcons();
});

// 外部更改处理方法
const handleSortChange = (newSortBy) => {
  sortBy.value = newSortBy;
  sortIcons();
};

// 切换是否显示彩色图标
const filterColorIcons = (show) => {
  showColorIcons.value = show;
  sortIcons();
};

// 切换是否显示动画图标
const toggleAnimationIcons = () => {
  showAnimationIcons.value = !showAnimationIcons.value;
  sortIcons();
};

// 更新搜索查询
const updateSearchQuery = (query) => {
  searchQuery.value = query;
};

// 切换类别
const changeCategory = (category) => {
  selectedCategory.value = category;
  sortIcons();
};

// 计算属性用于根据搜索框输入过滤图标列表
const filteredIcons = computed(() => {
  return icons.value.filter((icon) => icon.componentName.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>

<style scoped>
.is-active {
  @apply font-medium text-blue-600 bg-blue-50;
}
.sidebar {
  max-height: calc(100vh - 84px);
}
</style>