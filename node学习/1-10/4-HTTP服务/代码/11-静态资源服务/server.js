/**
 * 创建一个 HTTP 服务， 端口为 8000 ，满足如下需求
 * GET   /index.html        响应   page/index.html 的文件内容
 * GET   /css/app.css       响应   page/app.css 的文件内容
 * GET   /images/logo.png   响应   /images/logo.png 的文件内容
 */
// 导入 http 模块
const http = require('http');
const fs = require('fs');
const path = require('path');
// 声明一个变量
let mimes = {
    html: 'text/html',
    css:'text/css',
    js: 'text/javascript',
    png:'image/png',
    jpg: 'image/jpeg',
    gif:'image/gif',
    mp4:'video/mp4',
    mp3: 'audio/mpeg',
    json:'application/json',
}

// 创建服务对象
const server = http.createServer((request, response) => {
    // 判断请求方法
    if(request.method !== 'GET'){
        response.statusCode = 405;
        response.end('<h1>405 Method Not Allowed</h1>')
    }
    // 获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    // 拼接文件路径
    let root = __dirname + '/page';
    let filePath = root + pathname;
    // console.log(filePath);
    // 读取 fs 文件 异步 API
    fs.readFile(filePath,(err, data) => {
        if(err){
            // 设置字符集
            response.setHeader('content-type', 'text/html;charset=utf-8');
            // 判断错误的代号
            switch(err.code){
                case 'ENOENT':
                    response.statusCode = 404;
                    response.end('<h1>404 Not Found</h1>');
                case 'EPERM':
                    response.statusCode = 403;
                    response.end('<h1>403 Forbirdden</h1>');
                default:
                    response.statusCode = 500;
                    response.end('<h1>Interal Server Error</h1>');
            }
            // response.statusCode = 500;
            // response.end('文件读取失败~~');
            return;
        }
        // 获取文件后缀名
        let ext = path.extname(filePath).slice(1);
        // console.log(ext);
        // 获取对应的类型
        let type = mimes[ext];
        console.log(type);
        if(type){
            // 匹配到了
            response.setHeader('content-type', type + ';charset=utf-8');
        } else{
            // 没有匹配到
            response.setHeader('content-type','application/octet-stream');
        }
        // 响应文件内容
        response.end(data);
    })


});

// 监听端口 启动服务
server.listen(8000, () => {
    console.log('服务已启动，端口8000监听中...');
})