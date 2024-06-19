import upperCamelCase from 'uppercamelcase';

/**
 * 解析名称
 * @param {string} name - 原始名称
 * @param {string} defaultStyle - 默认样式
 * @returns {Object} 包含解析后的名称、组件名称和样式的对象
 */

// 获取默认样式，如果没有设置则为 'fill'
const defaultStyle = process.env.npm_package_config_style || 'fill'

const parseName = (name) => {
  // 将名称中的所有 '/' '_' ' ' 替换为 '-'
  const cleanedName = name.replaceAll('/', '-').replaceAll('_', '-').replaceAll(' ', '-')
  // 将处理后的名称按 '-' 切分为数组
  const nameSlices = cleanedName.split('-')
  // 取数组的最后一个元素作为样式
  const style = nameSlices[nameSlices.length - 1]

  // 判断样式是否为 'fill'、'stroke' 或 'color'，如果不是，则使用默认样式
  let finalStyle;
  if (style === 'fill' || style === 'stroke' || style === 'color') {
    finalStyle = style;
  } else {
    finalStyle = defaultStyle;
  }

  return {
    name,
    // 将处理后的名称转换为驼峰形式作为组件名称
    componentName: upperCamelCase(cleanedName),
    // 最终确定的样式
    style: finalStyle
  }
}

export default parseName;