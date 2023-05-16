// 导入 http 模块
const http = require('http');
const fs = require('fs');

// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    if (pathname === '/') {
        // 读取文件内容
        let html = fs.readFileSync('./10-table.html');
        response.end(html); //必须有且只能有一个end方法
    } else if (pathname === '/10-table.css'){
        // 读取文件内容
        let css = fs.readFileSync('./10-table.css');
        response.end(css); //必须有且只能有一个end方法
    } else if (pathname === '/10-table.js'){
        // 读取文件内容
        let js = fs.readFileSync('./10-table.js');
        response.end(js); //必须有且只能有一个end方法
    } else {
        response.statusCode = 404;
        response.end('<h1>404 Not Found</h1>')
    }


});

// 监听端口 启动服务
server.listen(8000, () => {
    console.log('服务已启动，端口8000监听中...');
})