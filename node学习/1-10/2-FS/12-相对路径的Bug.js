// 1. 导入  fs  模块
const fs  = require('fs');

// 相对路径的参照物： 命令行工作目录   命令行工作目录在哪里，它就在那里指向命令
// fs.writeFileSync('./index.html', '冲冲冲！');

// 绝对路径 '全局变量'  保存的是：所在文件的所在目录的绝对路径
console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', '冲冲冲！');
