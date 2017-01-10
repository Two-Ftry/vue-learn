
// exports.limit

module.exports = function (num) {
  if (num < 0) {
    return 0;
  }else if(num > 100){
    return 100;
  }
  return num;
};
