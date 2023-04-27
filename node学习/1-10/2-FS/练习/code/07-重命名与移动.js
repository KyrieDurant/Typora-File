// 1. 引入 fs 模块
const fs = require('fs');

// 2.调用 rename 方法  fs.rename(旧的文件的名字，新的文件的名字)
fs.rename('./座右铭.txt', './激励自己.txt', err => {
    if(err){
        console.log('操作失败~');
        return;
    }
    console.log('操作成功~');
});

// 文件移动   fs.rename(旧的文件位置，新的文件的位置)
fs.rename('./data.txt','../文件/data.txt', err => {
    if(err){
        console.log('操作失败~');
        return;
    }
    console.log('操作成功~');
});


// rename可以进行文件的位置和名字修改