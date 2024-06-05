/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { processSvg } from './processSvg.js';
import parseName from './utils.js';
import { getAttrs, getElementCode } from './template.js';
// 获取默认样式，如果没有设置则为 'fill'
const defaultStyle = process.env.npm_package_config_style || 'fill'

// 获取当前模块文件的 URL (ES模块)
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块目录的路径
const __dirname = path.dirname(__filename);
// 定义项目的根目录
const rootDir = path.join(__dirname, '..')

// 定义源代码和图标代码的目录
const srcDir = path.join(rootDir, 'src')
const iconsDir = path.join(rootDir, 'src/icons')

// 生成 index 和 d.ts 文件
const generateIndex = () => {
  // 如果源代码目录不存在，则创建它和图标代码目录
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir)
    fs.mkdirSync(iconsDir)
  } else if (!fs.existsSync(iconsDir)) {
    // 如果图标代码目录不存在，则创建它
    fs.mkdirSync(iconsDir)
  }

  // 创建一个空的 map.js 文件
  fs.writeFileSync(path.join(rootDir, 'src', 'map.js'), '', 'utf-8');
}

// 生成属性代码
const attrsToString = (attrs, style) => {
  console.log(style)
  return Object.keys(attrs).map((key) => {
    // 应区分填充和描边
    if (key === 'width' || key === 'height' || key === style) {
      return key + '={' + attrs[key] + '}';
    }
    return key + '="' + attrs[key] + '"';
  }).join(' ');
};

// 分别生成图标代码
const generateIconCode = async (name) => {
  const names = parseName(name, defaultStyle)
  const location = path.join(rootDir, 'src/svg', `${names.name}.svg`)
  const destination = path.join(rootDir, 'src/icons', `${names.name}.vue`)
  // 读取 SVG 文件
  const code = fs.readFileSync(location)
  // 处理 SVG 文件
  const svgCode = await processSvg(code, names.style) // 将样式传递给 processSvg
  const ComponentName = names.componentName
  // 获取组件代码
  const component = getElementCode(ComponentName, attrsToString(getAttrs(names.style), names.style), svgCode)

  // 写入组件代码
  fs.writeFileSync(destination, component, 'utf-8');

  console.log('成功构建', ComponentName);
  return {ComponentName, name: names.name}
}

// 将导出代码追加到 map.js
const appendToIndex = ({ComponentName, name}) => {
  const exportString = `export { default as Icon${ComponentName} } from './icons/${name}.vue';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'map.js'),
    exportString,
    'utf-8',
  );
}

// 生成 index 文件
generateIndex()

// 从 src/svg 目录读取 SVG 文件
const svgDir = path.join(rootDir, 'src/svg')
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  // 遍历所有文件
  files.forEach((file) => {
    // 如果文件是 SVG 文件
    if (path.extname(file) === '.svg') {
      // 获取文件名（不含扩展名）
      const name = path.basename(file, '.svg')
      // 生成图标代码
      generateIconCode(name)
        .then(({ComponentName, name}) => {
          // 将图标代码追加到 map.js
          appendToIndex({ComponentName, name})
        })
    }
  });
})
