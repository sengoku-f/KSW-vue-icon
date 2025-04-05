<script setup>
import { ref } from 'vue';
import ToolBar from "./components/ToolBar.vue";
import IconsItem from "./components/IconsItem.vue";
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbarsComponent,useOverlayScrollbars } from "overlayscrollbars-vue";
import { OverlayScrollbars, ClickScrollPlugin } from 'overlayscrollbars';

OverlayScrollbars.plugin([ClickScrollPlugin]);

const options = ref({
  scrollbars: {
    autoHide: 'leave', // 自动隐藏滚动条
    clickScroll: true,
    // theme: 'os-theme-light',
  },
});

</script>

<template>
  <OverlayScrollbarsComponent :options="options" class="h-full" defer>
    <IconsItem />
  </OverlayScrollbarsComponent>
</template>

<style>
#app {
  height: 100vh;
}

#ToolBar {
  @apply mt-0;
}

#ToolBar > div {
  @apply max-w-full;
}

#ToolBar + div {
  @apply max-w-full;
}

#ToolBar + div > aside {
  @apply top-[87px];
}
</style>
