const fs = require('fs');
const packageJsonPath = './package.json';

// // 读取 package.json 文件
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

// 获取当前版本号
const currentVersion = packageJson.version;

// 运行 git commit -m "Bump version to ${packageJson.version}" 命令
const { execSync } = require('child_process'); 
execSync(`git commit -m "Bump version to ${packageJson.version}"`);