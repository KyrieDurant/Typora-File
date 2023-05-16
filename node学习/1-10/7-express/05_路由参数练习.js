// 导入 express
const express = require('express');
// 导入 json 文件 
const barber = require('./JSON/barber.json');
console.log(barber.player);

// 创建应用对象
const app = express();

// 创建路由
app.get('/NBA/:id.html', (req,res) =>{
    // 获取路由参数
    let {id} = req.params;
    // 在对象中寻找对应 id 的数据
    let result = barber.player.find(item =>{
        if(item.number === Number(id)){
            return true;
        }
    });
    console.log(result);
    // 判断
    if(!result){
        res.statusCode = 404;
        res.end(`<h1>404 Not Found</h1>`);
        return;
    }

    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>form表单</title>
    </head>
    <body>
        <h2>${result.name}</h2>
        <h3>号码：${result.number}</h3>
        <div style=" position: relative; width: 200px; height: 200px;">
            <img src="${result.image}" width=100% height=100%  />
        </div>
    </body>
    </html>
    `);
});

// 监听端口，启动服务
app.listen(9001, () =>{
    console.log('服务已启动，端口9001 正在监听中...');
})