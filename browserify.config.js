
var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');

var b = new browserify({
  entries:['./test/main.js'],
  cache:{},
  packageCache:{},
  plugins: [watchify]
});

b.on('update', bundle);
bundle();

function bundle(){
  b.bundle().pipe(fs.createWriteStream('./test/main.bundle.js'));
}
