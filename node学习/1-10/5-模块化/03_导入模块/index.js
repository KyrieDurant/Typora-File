// 其实这里就说了 require('./me.js') 导入模块内容时可以省略后缀
// 名字一样的.js文件和.json文件时会优先查找.js文件

// 导入模块
const ball = require('./me.js');

// 调用函数
ball();
