// 导入 http 模块
const http = require('http');
// 1. 导入 url 模块
const url = require('url');

// 创建服务对象
const server = http.createServer((request, response) => {
    // 实例化 URL 对象
    // let url = new URL('/search?a=7&b=35','http://127.0.0.1:8000');
    let url = new URL(request.url,'http://127.0.0.1');
    // console.log(url);
    // 输出路径
    // console.log(url.pathname);
    console.log(url.searchParams.get('keyword'));
    response.end('url new');
});

// 监听端口，启动服务
server.listen(8000, () => {
    console.log('服务已经启动...');
});