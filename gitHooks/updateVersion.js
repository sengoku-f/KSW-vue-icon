const fs = require('fs');
const packageJsonPath = './package.json';

// // 读取 package.json 文件
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

// 获取当前版本号
const currentVersion = packageJson.version;

// 自增修订版本号
const versionParts = currentVersion.split('.');
versionParts[2] = parseInt(versionParts[2], 10) + 1;

// 更新package.json文件中的版本号
packageJson.version = versionParts.join('.');

// 将更新后的package.json文件写入磁盘
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// 输出更新后的版本号
console.log(`版本号已更新为 ${packageJson.version}`);

