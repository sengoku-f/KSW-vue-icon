import * as baseIcons from "./icons/base"; // 引入所有图标组件
import * as guangfaIcons from "./icons/guangfa"; // 引入广发组件

// 创建一个映射对象，将项目名称映射到相应的图标集
export const ProjectIconsMap = {
  Base: baseIcons,
  Guangfa: guangfaIcons,
};

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
  const projectIcons = ProjectIconsMap[projectName] || {};
  return { ...ProjectIconsMap["Base"], ...projectIcons };
}

// 同时导出所有图标组件，以支持按需导入
export * from "./icons/base";