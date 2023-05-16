// 导入 express 
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/other', (req,res) =>{
    // 跳转响应
    // res.redirect('http://baidu.com');
    // 下载响应
    // res.download(__dirname + './JSON/barber.json');
    // JSON 响应
    // res.json({
    //     name:'杜兰特',
    //     number: 35
    // })
    // 响应文件内容
    res.sendFile(__dirname + './02_form.html');

});

// 监听端口，启动服务
app.listen(3511, () =>{
    console.log('服务已启动，端口 3511 正在监听中......');
})