// 导入 express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/071113', (req,res) =>{

    res.end('商品详情');
});


// 监听端口，启动服务
app.listen(9001, () =>{
    console.log('服务已启动，端口9001 正在监听中...');
})                                         