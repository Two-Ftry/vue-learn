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
  renderer.renderToString(myApp, function(err, html){
      layout = layout.replace('<div id="app"></div>', html);
      console.log(layout);
      res.send(layout);
  });
});

app.listen(5001);
