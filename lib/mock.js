
var fs = require('fs');

module.exports = function(filename){
  try{
    return fs.readFileSync(filename, 'utf-8');
  } catch(e){
    return '';
  }
};
