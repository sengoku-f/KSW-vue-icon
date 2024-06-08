import * as Icons from './map'; // 引入所有图标组件

export const KswIcon = {
  install(Vue) {
    // 遍历并注册所有图标组件
    Object.keys(Icons).forEach(key => {
      Vue.component(key, Icons[key]);
    });
  }
};

// 同时导出所有图标组件，以支持按需导入
export * from './map';