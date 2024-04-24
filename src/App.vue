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
        <component :is="iconComponentName" :size="36" />
        <div>{{ iconComponentName }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import "../styles/icon.css";
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    Banner,
  },
  data() {
    return {
      iconNames: this.ICON_NAMES,
    };
  },
  methods: {
    copyName(name) {
      // 构建包含名称的 Vue 组件字符串
      const vueComponent = `<${name} :size="24" color="#333" />`;

      // 创建一个包含组件字符串的文本输入框
      const input = document.createElement("input");
      input.setAttribute("readonly", "readonly");
      input.value = vueComponent;

      // 添加输入框到 DOM 中
      document.body.appendChild(input);

      // 选择并复制输入框的值到剪贴板
      input.select();
      document.execCommand("copy");

      // 从 DOM 中移除输入框
      document.body.removeChild(input);

      // 显示复制成功消息
      this.$message.success("复制成功: " + vueComponent, { duration: 3000 });
    },
  },
};
</script>

<style lang="css">
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
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  color: #333333;
  transition: background-color 0.2s;
}
.item:hover {
  background-color: rgb(242, 243, 245);
}
</style>
