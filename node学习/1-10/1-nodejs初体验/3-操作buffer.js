// buffer 与字符串的转换
// let buf_4 = Buffer.from([105,108,111,118,101,121,111,117]);

// console.log(buf_4.toString()); // utf-8的转换方式 得到   iloveyou

// []
// let buf = Buffer.from('hello');
// console.log(buf[0]); //104
// console.log(buf[0].toString(2)); //  01101000  命令行打出来的第一个0被省略了
// console.log(buf); // <Buffer 68 65 6c 6c 6f>
// buf[0] = 95;
// console.log(buf); // <Buffer 5f 65 6c 6c 6f>

// 溢出
// let buf = Buffer.from('hello');
// buf[0] = 361;// 舍弃高位数字 0001 0110 1001 => 0110 1001
// console.log(buf); // <Buffer 69 65 6c 6c 6f>

// 中文
let buf = Buffer.from('你好');
console.log(buf); // <Buffer e4 bd a0 e5 a5 bd>

