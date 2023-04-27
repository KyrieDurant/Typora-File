// 1. 引入 fs 模块
const fs = require('fs');

// 2.创建读取流对象
const rs = fs.createReadStream('../文件/kd.mp4');

// 3.绑定 data 事件   chunk  块  
rs.on('data', chunk =>{
    console.log(chunk.length); // 65536 字节 => 64kb
});

// 4. end 可选事件
rs.on('end', () =>{
    console.log('读取完成');
})
