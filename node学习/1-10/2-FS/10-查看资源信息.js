// 1. 引入 fs 模块
const fs = require('fs');

// 2. stat 方法   status  缩写 状态
fs.stat('../文件/kd.mp4', (err, data) =>{
    if(err){
        console.log('查看失败！');
        return;
    }
    // console.log(data);
    // 查看资源是不是一个文件   isFile
    console.log(data.isFile()); // true
    // 查看资源是不是一个文件夹   isDirectory
    console.log(data.isDirectory()); // false
})