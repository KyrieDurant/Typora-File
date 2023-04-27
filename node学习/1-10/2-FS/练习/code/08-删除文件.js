// 1. 引入 fs 模块
const fs = require('fs');

// 2.调用 unilink 方法
fs.unlink('../文件/kd-2.mp4', err =>{
    if(err){
        console.log('删除失败~');
        return;
    }
    console.log('删除成功');
})

// 3.调用 rm 方法   (该方法为node.js 的14.4新产生的方法)
fs.rm('../文件/kd-3.mp4', err =>{
    if(err){
        console.log('删除失败~');
        return;
    }
    console.log('删除成功');
})


