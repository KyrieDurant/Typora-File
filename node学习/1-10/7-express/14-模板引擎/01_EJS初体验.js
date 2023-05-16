// 1. 安装 EJS
// 2. 导入 EJS
const ejs = require('ejs');
const fs = require('fs');

// 字符串
let name = '杜小帅';
// let str  = `祝你能健康打球，${name}`;
let weather = '今天天气不错~';

// console.log(str);

// 声明变量
let str = fs.readFileSync('./01_html.html').toString();

// 使用 ejs 渲染
let result = ejs.render(str, {name: name, weather});
console.log(result);