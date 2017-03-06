var express = require('express');
var path = require('path');
var fs = require('fs');
var Vue = require('vue');
var renderer = require('vue-server-renderer').createRenderer();
var app = express();

// 定义全局的Vue为了服务端的app.js
global.Vue = require('vue');

app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

var layout = fs.readFileSync('./myIndex.html', 'utf-8');

var myApp = require('../assets/myApp')();

app.get('*', function(req, res){
  //字符串形式的响应
  renderer.renderToString(myApp, function(err, html){
    if(err){
        console.error(err);
        return res.status(500).send('Server Error');
    }
    layout = layout.replace('<div id="app"></div>', html);
    res.send(layout);
  });
});

app.listen(5001);
