<template>
  <div>
    <ToolBar
      :showColorIcons="showColorIcons"
      :sortBy="sortBy"
      :searchQuery="searchQuery"
      @onSortChange="handleSortChange"
      @onFilterColorIcons="filterColorIcons"
      @onSearchChange="updateSearchQuery"
    />
    <IconPreview :iconNames="filteredIconNames" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import iconsData from "~/icons.json";
import ToolBar from "./ToolBar.vue";
import IconPreview from "./IconPreview.vue";

const iconNames = ref([]);

// 状态和属性
const sortBy = ref("date");
const showColorIcons = ref(false);
const showAnimationIcons = ref(false); // 控制是否显示动画图标
const searchQuery = ref("");

// 过滤和排序图标
const sortIcons = () => {
  let sortedIcons = [...iconsData];
  if (sortBy.value === "date") {
    sortedIcons.sort((a, b) => new Date(b.modifiedTime) - new Date(a.modifiedTime));
  } else {
    sortedIcons.sort((a, b) => a.componentName.localeCompare(b.componentName));
  }
  if (showColorIcons.value) {
    sortedIcons = sortedIcons.filter((icon) => icon.componentName.includes("Color"));
  }
  if (showAnimationIcons.value) {
    sortedIcons = sortedIcons.filter((icon) =>
      icon.componentName.includes("Animation")
    );
  }
  iconNames.value = sortedIcons.map((icon) => icon.componentName);
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

const updateSearchQuery = (query) => {
  searchQuery.value = query;
};

// 计算属性用于根据搜索框输入过滤图标列表
const filteredIconNames = computed(() => {
  return iconNames.value.filter((iconName) => iconName.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>
