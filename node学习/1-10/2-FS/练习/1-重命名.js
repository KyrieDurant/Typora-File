// 1. 导入  fs  模块
const fs  = require('fs');

// 读取 code 文件夹
const files = fs.readdirSync('./code');

// console.log(files);
// 遍历数组
files.forEach(item =>{
    // console.log(item);
    // 拆分文件名
    let data = item.split('-');
    // console.log(data);
    let [num,name] = data;
    // console.log(num,name);
    // 判断
    if(Number(num) < 10){
        num = '0' + num;
    }
    // 创建新的文件名
    let newName = num + '-' + name;
    // console.log(newName);
    // 重命名
    fs.renameSync(`./code/${item}`, `./code/${newName}`);

})