const ejs = require('ejs');
// 球星
const love = ['杜兰特', '欧文', '哈登','库里','乔治'];

// 原生 JS 
// let str = '<ul>';
// love.forEach(item => {
//     str += `<li>${item}</li>`;
// })
// // 闭合 ul 
// str += '</ul>'
// console.log(str);

// EJS 实现
const fs = require('fs');
let html = fs.readFileSync('./02_qx.html').toString();
let result = ejs.render(html,{love:love});
console.log(result);