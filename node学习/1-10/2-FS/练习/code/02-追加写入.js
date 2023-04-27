// 1.引入 fs 模块
const fs = require('fs');

// 写入和追加想换行就使用 \r\n

// 2. 调用 appendFile
// fs.appendFile('./座右铭.txt', '\r\nPatience is key in life.', err =>{
//     // 判断
//     if(err){
//         console.log('写入失败~');
//         return;
//     }
//     console.log('追加写入成功~');
// })

// 同步追加 
// fs.appendFileSync('./座右铭.txt','\r\n学无止境');

// writeFile  也可以实现追加写入 在第三个参数添加  {flag:'a'}
fs.writeFile('./座右铭.txt', '\r\n每个人都有属于自己的节奏，不必去和别人比较。',{flag:'a'}, err => {
    // err 写入失败： 错误对象   写入成功： null
    if (err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功~');
});