
module.exports = function(callback){
  setTimeout(function(){
    callback && callback(10);
  }, 100);
};
