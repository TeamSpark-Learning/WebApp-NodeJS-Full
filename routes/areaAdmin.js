var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var model = {
		title: 'admin area'
	};

	res.render('admin/login', model);
});

module.exports = router;
