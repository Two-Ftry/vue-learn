var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
	var msg = 'no user';
	res.send(msg);
});
router.get('/:id', function (req, res) {
	var msg = 'user: ' + req.params.id;
	res.send(msg);
});
router.post('/getUserList', function (req, res) {
	var msg = [{name: 'jianfeng_huang', age: 18}];
	res.send(msg);
});

module.exports = router;
