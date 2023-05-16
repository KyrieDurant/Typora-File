// 声明一个函数
function ball(){
    console.log('打篮球...');
}

function lianxi(){
    console.log('练习两年半...');
}

// 暴露数据
// module.exports = {
//     ball,
//     lianxi
// };

// exports 暴露数据
// exports.ball = ball;
// exports.lianxi = lianxi;

// 1. module.exports 可以暴露`任意`数据
// module.exports = '2.5';
// module.exports = '背带裤';

// 2. 不能使用 `expoets = value` 的形式暴露数据
// exports = '我是i坤！！！'  // 这样得到{}
