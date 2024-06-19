# ksw-vue-icon

## 介绍

图标自动化是一个可以帮助你将 SVG 转换为 VUE 组件代码，并上传至 NPM 以便开发直接使用命令行安装和更新。设计师可以通过此插件快速交付图标文件，它能省去很多不必要的中间环节，从而达到让设计师轻轻一点就更新，开发一条命令就下载的效果，整个过程中两人都不用离开座位多说一句话。

### NPM包
请访问 https://www.npmjs.com/package/ksw-vue-icon

### ICON 展示页面

请访问 [KSW-vue-icon](https://sengoku-f.github.io/KSW-vue-icon/)

- 复制Vue图标组件
- 查看ICON

## 入门

### 安装 NPM 包

```
npm install ksw-vue-icon --save
yarn add ksw-vue-icon
```

### 引用

```
import { IconName } from 'ksw-vue-icon'
// or
import { KswIcon } from 'ksw-vue-icon'
Vue.use(KswIcon)
```

### 用法

```
<IconImage :size="24" color="#333" />
// 设置 spin 为 true 使图标旋转
<IconLoading :size="24" color="#333" :spin="true" />
```

## 展示页配置

### 安装依赖
```
yarn install
```

### 编译和热重新加载用于开发
```
yarn dev
```

### 编译和缩小以供生产
```
yarn build

```

### 编译 NPM 包
```
yarn build-packages

```

### Lints and fixes files
```
yarn lint
```

## 部署方法

1. 将 `svg` 图标放入 `src/svg` 文件夹中

2. 更改 `package.json` 中的 `version`

3. 推送到 `github` 仓库

## 图标规范

确保图标基础尺寸是 `24×24`

如果是彩色图标可以在命名中包含 `color` 例如 `social-color`

图标命名请使用英文（不可以含 `/`）和 `-`，例如 `dewu-logo-original`

图标一般有描边 `stroke` 和填充 `fill` 两种样式，一个图标只能采用一种形式，不可以混合，默认 `fill`。想要转为 `fill` 样式，你可以使用 `Outline Stroke（Shift+Command+O）` 将图标转换为填充形状。

通过图标命名我们对 `svg` 处理成单色（去掉原始颜色设置 `fill="currentColor"`）、彩色（保留原始颜色）。

## 属性
|    属性名称	 | 介绍  | 类型  | 默认值 | 注释 |
| ---------- | --- | --- | --- | --- |
| size | 图标的大小，宽高相同 | number &#124; string |  '1em' |
| spin |  给图标加旋转效果 | boolean | false |
| color |  图标的颜色，默认为当前颜色 | string &#124; string[]|  'currentColor' |


## 项目更新指令

使用 `upv` 命令, `commit信息` 自定义, 示例如下:
```
    npm run upv commit信息
```