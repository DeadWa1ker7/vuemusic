
const express = require('express');
const app = express();

// 后端api路由
const index = require('./index')
const upload = require('./upload')
app.use('/',index)
app.use('/api',upload)


// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');