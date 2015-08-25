var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var model = {
		title: 'public area'
	};

	res.render('public/index', model);
});

router.get('/locations', function(req, res, next) {
	var model = {
		title: 'public area'
	};

	res.render('public/locations', model);
});

router.get('/menu', function(req, res, next) {
	var model = {
		title: 'public area'
	};

	res.render('public/menu', model);
});

module.exports = router;
