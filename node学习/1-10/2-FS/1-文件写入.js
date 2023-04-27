/**
 * 需求：
 * 新建一个文件，座右铭.txt， 写入内容，天空越黑，星星就会越亮
 */

// 1.导入fs模块
const fs = require('fs');

// 2.写入文件
fs.writeFile('./座右铭.txt', '天空越黑，星星就会越亮', err =>{
    // err 写入失败： 错误对象   写入成功： null
    if(err){
        console.log('写入失败');
        return;
    }
});

// 同步写入
fs.writeFileSync('./data.txt','test');