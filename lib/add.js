
module.exports = function(x, y){
  if( x < 0){
    x = 0;
  }
  if(y < 0){
    y = 0;
  }
  return x + y;
};
