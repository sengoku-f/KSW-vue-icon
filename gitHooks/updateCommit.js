// const fs = require('fs');
import fs from 'fs'
import {execSync} from 'child_process'
const packageJsonPath = './package.json';

const args = process.argv.slice(2)

// // 读取 package.json 文件
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

// 获取当前版本号
const currentVersion = packageJson.version;

// 运行 git commit -m "Bump version to ${packageJson.version}" 命令
// const { execSync } = require('child_process'); 
execSync(`git commit -m "${args}Bump version to ${packageJson.version}"`);