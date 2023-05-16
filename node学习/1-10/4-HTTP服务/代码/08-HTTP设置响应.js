// 导入 http 模块
const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
    // 1.设置响应状态码
    // response.statusCode = 200;
    // 2.设置响应状态的描述
    // response.statusMessage = 'Patience';
    // 3.响应头 可以自定义设置
    response.setHeader('content-type', 'text/html;charset=utf-8');
    // 设置多个同名响应头
    response.setHeader('server', ['durant','kyrie','harden']);
    // 设置响应体
    response.write('冲冲冲！'); //可以多次调用
    response.end('response'); //必须有且只能有一个end方法

});

// 监听端口 启动服务
server.listen(8000, () => {
    console.log('服务已启动，端口8000监听中...');
})