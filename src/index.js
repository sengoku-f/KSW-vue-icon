import * as Icons from "./map"; // 引入所有图标组件
import "../styles/icon.css";

export const KswIcon = {
  install(Vue) {
    // 遍历并注册所有图标组件
    Object.entries(Icons).forEach(([key, component]) => {
      Vue.component(key, component);
    });
  },
};

// 同时导出所有图标组件，以支持按需导入
export * from "./map";
