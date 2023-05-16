// 导入 express 
const express = require('express');

// 创建应用对象
const app = express();

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'));

// 创建路由
app.get('/home', (req,res) =>{
    res.send('hello');
});

// 监听端口，启动服务
app.listen(3511, () =>{
    console.log('服务已启动，端口 3511 正在监听中......');
})