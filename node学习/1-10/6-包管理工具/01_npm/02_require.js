// 1. 导入 uniq包
// 本质上是导入node_modules里面的uniq文件夹下的uniq.js
// const uniq = require('uniq');
// const uniq = require('./node_modules/uniq');
const uniq = require('./node_modules/uniq/uniq.js');

// 2. 使用函数
let arr = [1,2,3,4,5,4,3,2,1];

const result = uniq(arr);

console.log(result);