var express = require('express');
var path = require('path');
var fs = require('fs');
var Vue = require('vue');
var renderer = require('vue-server-renderer').createRenderer();
var app = express();

// 定义全局的Vue为了服务端的app.js
global.Vue = require('vue');

app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

var layouts = fs.readFileSync('./myIndex.html', 'utf-8').split('<div id="app"></div>');
var preHtml = layouts[0];
var postHtml = layouts[1];

var myApp = require('../assets/myApp')();

app.get('*', function(req, res){
  var stream = renderer.renderToStream(myApp);

  res.write(preHtml);

  stream.on('data', function(chunk){
    res.write(chunk);
  });

  stream.on('end', function(){
    res.end(postHtml);
  });

  stream.on('error', function(error){
    console.log(error);
    res.status(500).send('Server Error');
  });

});

app.listen(5001);
