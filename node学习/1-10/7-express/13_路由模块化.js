/**
 * 针对 /admin /setting 的请求，要求 URL携带 code = 711 参数，如未携带提示『暗号错误』
 */
// 导入 express 
const express = require('express');
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter')
// 创建应用对象
const app = express();

// 设置
app.use(homeRouter);
app.use(adminRouter);


app.all('*', (req,res) =>{
    res.send('<h1>404 Not Found</h1>');
});

// 监听端口，启动服务
app.listen(3511, () =>{
    console.log('服务已启动，端口 3511 正在监听中......');
})