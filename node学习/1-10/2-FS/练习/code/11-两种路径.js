// 1. 导入  fs  模块
const fs  = require('fs');

// 相对路径
// 这两种创建的html文件都是一样的
// fs.writeFileSync('./index.html', 'love');

// 绝对路径 
// 例： 以D盘开头  以 / 开头
// fs.writeFileSync('D:/index.html', 'love');
// 以 / 开头则定义在该文件的最开始盘符创建文件
fs.writeFileSync('/index.html', 'love');


