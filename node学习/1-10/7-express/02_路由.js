// 导入 express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/home', (req,res) =>{
    res.end('hello express');
});

app.get('/',(req,res) =>{
    res.end('home');
});

app.post('/login',(req,res) =>{
    res.end('login login');
});

// 匹配所有的方法
app.all('/test',(req,res) =>{
    res.end('test test');
});

// 404 响应
app.all('*',(req,res) =>{
    res.end('<h1>404 Not Found</h1>');
});

// 监听端口，启动服务
app.listen(9001, () =>{
    console.log('服务已启动，端口9001 正在监听中...');
})