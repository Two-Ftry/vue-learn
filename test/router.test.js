var should = require('should');
var app = require('../app');
var request = require('supertest');
describe('router testing', function () {
	it('users have not id response', function (done) {
		request(app)
			.get('/users')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

	it('users have id response', function (done) {
		request(app)
			.get('/users/1/')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exists(res.text);
				done();
			});
	});

  it('404 response', function (done) {
	request(app)
		.get('/non/')
		.expect(404)
		.end(function(err, res){
			if (err) throw err;
			done();
		});
});

  it('user list', function(done){
    request(app)
      .post('/users/getUserList')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end(function(err, res){
        if(err) throw err;
        should.exists(res.text);
        done();
      });
  });

  it('index', function (done) {
		request(app)
			.get('/')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});
});
