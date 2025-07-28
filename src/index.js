import { ProjectIconsMap } from "./map";
import "/styles/icon.css";

export const KswIcon = {
  install(app, options = {}) {
    const { projectName } = options;
    // 动态导入项目图标集
    const iconSet = loadProjectIcons(projectName);
    // 遍历并注册所有图标组件
    Object.entries(iconSet).forEach(([key, component]) => {
      app.component(key, component);
    });
  },
};

// 动态加载图标集的函数
function loadProjectIcons(projectName) {
  const names = (Array.isArray(projectName) ? projectName : [projectName]).filter(name => name && ProjectIconsMap[name]);
  if (!names.length) {
    names.push(...['Base', 'KAPA', 'Animation']);
  }
  let icons = {};
  for (const name of names) {
    icons = Object.assign(icons, ProjectIconsMap[name]);
  }
  return icons;
}

// 同时导出所有图标组件，以支持按需导入
export * from "./icons/base";
export * from "./components/animation";
export default KswIcon;
