import * as Icons from './map.js'; // 引入所有图标组件

const KswIcon = {
  install(Vue) {
    // 遍历并注册所有图标组件
    Object.keys(Icons).forEach(key => {
      Vue.component(key, Icons[key]);
    });
  }
};

export default KswIcon;