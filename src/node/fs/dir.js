var fs = require('fs');
var path = require('path');

var testPath = path.resolve(__dirname, '../test');

//创建目录
// fs.mkdir(testPath, function(err){
//   if(err){
//     switch(err.code){
//       case 'EEXIST':
//       console.log('目录已存在', err);
//       break;
//       default:
//       console.log('创建目录失败', err);
//     }
//     return;
//   }
//   console.log('创建目录成功');
// });

//删除目录
// fs.rmdir(testPath, function(err){
//   if(err){
//     console.log('删除目录失败', err);
//     return;
//   }
//   console.log('删除目录成功', testPath);
// });

//修改目录
// fs.rename(testPath, path.resolve(__dirname, '../testNew'), function(err){
//   if(err){
//     console.log('修改目录名称失败', err);
//     return;
//   }
//   console.log('修改目录名称成功');
// });

//读取目录信息
// fs.stat(testPath, function(err, stats){
//   if(err){
//     console.log('读取目录信息失败');
//     return;
//   }
//   console.log('读取目录信息成功', stats);
//   if(stats.isFile()){
//     console.log('这是一个文件');
//   }
//   if(stats.isDirectory()){
//     console.log('这是一个目录');
//   }
// });


//遍历目录
var recursionFun = function(p){
  fs.readdir(p, function(err, files){
    if(err){
      console.log('读取目录信息失败', err);
      return;
    }
    console.log('读取目录信息成功', files);
    for(var i = 0, len = files.length; i < len; i++){
      var filename = files[i];
      var subPath = path.resolve(__dirname, '../test/' + filename);
      fs.stat(subPath, function(err, stats){
        if(err){
          console.log('fail', err);
          return;
        }
        if(stats.isFile()){
          console.log('filename:', subPath);
        }
        if(stats.isDirectory()){
          // 继续读取
          recursionFun(subPath);
        }
      });
    }
  });
};

// recursionFun(testPath);
