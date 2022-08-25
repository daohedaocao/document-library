# AJAX

## XML



## HTTP

(HTTP)协议，超文本传输协议，协议规定了浏览器和万维网服务器之间互相通信的规则

```bash
##请求报文
重点是格式与参数
、、、
行  GET/POST   /s?ie=utf-8  HTTP/1.1
头  Host:atguigu.com
    Cookie:name=guigu
    Content-type:application/x-www-form-urlencoded
    User-Agent:chrome 83
 空行
 体   username=admin&passworld=admin
 #GET请求请求头是空的
    




##响应报文
行  HTTP/1.1 200 ok
头  Content-tType:text/html;charset=utf-8
    Content-length:2048
    content-encoding:gzip

空行  <html>
   <head>
   <body>
   <h1> 你好</h1>
   </body>
   </head>
      </html>
体 
*404
*403
*401
*500









```

## node.js

安装

检测是否安装成功 dos窗口 node -v

```bash
express框架安装

#在vscode中打开终端：
npm init --yes    #初始化
#安装express
npm i express  #安装
```

## express基本使用

```javascript
// 1，引入express
const { request } = require('express');
const express = require('express');
// 2,创建应用对象
const app = express();
// 3,创建路由规则  request, response参数
// request 请求报文的封装
// response  响应报文的封装
app.get('/', (request, response) => {
    //设置响应
    response.send('HELLO EXPRESS');

})
// 4，监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中....");
})
    
// 打开终端 输入 node express基本使用.js ||  node 需要执行的文件名称
// 然后浏览器输入：127.0.0.1:8000/
// 打开被占用的端口终端
//ctrl+c释放端口


```

## nodemon npm使用

```javascript
//安装服务
npm install -g nodemon 
//启动需要启动的服务文件
nodemon server.js
node server.js
npx nodemon server.js
```



## nodemysql

### 查询数据



### 插入数据





### 更新数据





### 删除数据



### 标记删除



## 身份认证

## 在Express中使用Session认证



## JWT认证机制

> **能解决跨域问题**

## 安装使用jwt



