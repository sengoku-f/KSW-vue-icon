<script setup>
import "../styles/icon.css";
import Banner from "./components/Banner.vue";
import { ref, inject } from "vue";
import useClipboard from "vue-clipboard3";
import Message from 'vue-m-message'

const iconNames = ref(inject("ICON_NAMES"));
const { toClipboard } = useClipboard();

const copyName = async (name) => {
  try {
    // 构建包含名称的 Vue 组件字符串
    // const vueComponent = `<${name} />`;
    await toClipboard(name);
    // 显示复制成功消息
    Message.success("复制成功: " + name, { duration: 3000 });
  } catch (error) {
    console.error("复制失败:", error);
  }
};
</script>

<template>
  <div class="container">
    <Banner />
    <!-- 分割线 -->
    <div style="margin: 20px 0; border-top: 1px solid #e8e8e8"></div>
    <ul class="wrapper">
      <li
        class="item"
        v-for="iconComponentName in iconNames"
        :key="iconComponentName"
        :title="iconComponentName"
        @click="copyName(iconComponentName)"
      >
        <component :is="iconComponentName" />
        <div>{{ iconComponentName }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
}
.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 15px;
}
.wrapper {
  list-style: none;
  display: flex;
  flex-flow: wrap;
  margin: 0;
  padding: 15px 0;
  gap: 1rem;
  justify-content: center;
}
.item {
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  font-size: 2rem;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s;
}
.item:hover {
  background-color: rgb(242, 243, 245);
}
.item div {
  width: 100%;
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 使用省略符号 */
  text-align: center;
  font-size: 0.875rem;
}
</style>
