var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

var layout = fs.readFileSync('./myIndex.html', 'utf-8');

app.get('*', function(req, res){
  res.send(layout);
});

app.listen(5001);
