<script setup>
import { ref } from 'vue';
import Head from "./components/Head.vue";
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
    <Head />
    <IconsItem />
  </OverlayScrollbarsComponent>
</template>

<style>
#app {
  height: 100vh;
}
</style>
