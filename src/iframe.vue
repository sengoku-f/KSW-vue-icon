<script setup>
import ToolBar from "./components/ToolBar.vue";
import IconsItem from "./components/IconsItem.vue";
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbarsComponent,useOverlayScrollbars } from "overlayscrollbars-vue";
import { OverlayScrollbars, ClickScrollPlugin } from 'overlayscrollbars';

OverlayScrollbars.plugin([ClickScrollPlugin]);

import { ref, provide, onMounted } from 'vue';

const options = ref({
  scrollbars: {
    autoHide: 'leave', // 自动隐藏滚动条
    clickScroll: true,
    // theme: 'os-theme-light',
  },
});

var osRef = ref(null);
const osInstance = ref(null); // 用于存储 osInstance
provide('osInstance', osInstance); // 提供osInstance

const [initialize, instance] = useOverlayScrollbars({
  defer: true,
  options,
  events: {
    initialized: () => {
      osInstance.value = osRef.value?.osInstance(); // 更新 osInstance
      if (osInstance) {
        console.log('osInstance initialized', osInstance);
        console.log('osInstance initialized', osInstance.value.elements());
      }
    },
    destroyed: () => {
      console.log('osInstance destroyed');
    },
  },
});

onMounted(() => {
  initialize(document.body);
});


</script>

<template>
  <OverlayScrollbarsComponent ref="osRef" :options="options" class="h-full" defer>
    <IconsItem />
  </OverlayScrollbarsComponent>
</template>

<style>
#app {
  height: 100vh;
}
</style>
