// 导入 http 模块
const http = require('http');

// 2.创建服务对象
const server = http.createServer((request, response) => {
    // console.log(request.method); // 获取请求方法
    // 获取请求的url
    // console.log(request.url); // 只包含 url 中的路径与查询字符串
    // 获取 HTTP 协议的版本号
    // console.log(request.httpVersion);
    // 获取 HTTP 的请求头
    console.log(request.headers);
    response.end('Hello HTTP'); // 设置响应体
});

// 3.监听端口，启动服务
server.listen(8000, () => {
    console.log('服务已经启动...');
});