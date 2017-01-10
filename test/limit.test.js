
var lib = require('../index');
var should = require('should');
var fs = require('fs');
var muk = require('muk');

describe('module', function(){
  //limit
  describe('limit', function(){
    it('limit should success', function(){
      lib.limit(10).should.be.equal(10);
    });
    it('limit less than 0', function(){
      lib.limit(-1).should.be.equal(0);
    });
    it('limit greater than 0', function(){
      lib.limit(101).should.be.equal(100);
    });
  });
  //async
  describe('async', function(){
    it('async should be done', function(done){
      lib.async(function(result){
        done();
      });
    });
    it('should.reject', function(){
      (new Promise(function(resolve, reject){
        reject(new Error('wrong'));
      })).should.be.rejectedWith('wrong');
    });
    it('should fulfilled', function(){
      (new Promise(function(resolve, reject){
        resolve({username: 'jc', age: 26});
      })).should.be.fulfilled().then(function(r){
        r.should.have.property('username', 'jc');
      });
    });
  });
  //mock
  describe('mock', function(){
    // var _readFile;
    before(function(){
      // _readFile = fs.readFileSync;
      // fs.readFileSync = function(filename, encoding, callback){
      //   // process.nextTick(function(){
      //   //   callback(new Error("mock readFile error"));
      //   // });
      //   throw new Error('mock readFileSync error');
      // };
      muk(fs, 'readFileSync', function(filename, encoding, callback){
        throw new Error('mock readFileSync error');
      })
    });
    it('get content should not error', function(){
      lib.getContent('E:/test.txt').should.be.ok();
    });
    after(function(){
      // fs.readFileSync = _readFile;
      muk.restore();
    });
  });
});
