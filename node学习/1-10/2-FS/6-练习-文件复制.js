/**
 * 需求：
 *  复制『文件』 文件夹下的『kd.mp4』
 */

// 1. 引入 fs 模块
const fs = require('fs');

// 方式一： readFile
// 读取文件内容
let data = fs.readFileSync('../文件/kd.mp4');
// 写入文件
fs.writeFileSync('../文件/kd-2.mp4',data);
console.log(process.memoryUsage());// 查看内存占用量   37072896  => 大约35MB
    // 打印出来下面这个
    // {
    //     rss: 37072896,
    //     heapTotal: 5185536,
    //     heapUsed: 4628072,
    //     external: 15843943,
    //     arrayBuffers: 15536746
    //   }


// 方式二 流式操作
// 读取写入流对象
const rs = fs.createReadStream('../文件/kd.mp4');
// 创建写入流对象
const ws = fs.createWriteStream('../文件/kd-3.mp4');
// 绑定data事件
rs.on('data',chunk =>{
    ws.write(chunk);
});

rs.on('end', () =>{
    console.log(process.memoryUsage());// 查看内存占用量  27787264 => 大约26.5MB
    // 打印出来下面这个
    // {
    //     rss: 27787264,
    //     heapTotal: 4915200,
    //     heapUsed: 4055608,
    //     external: 7942336,
    //     arrayBuffers: 7708416
    //   }
    
})

// 此外还可以使用pipe进行复制(管道传入复制)   =>   用的不多
// rs.pipe(ws);