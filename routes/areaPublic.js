var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var model = {
		title: 'public area'
	};

	res.render('public/index', model);
});

module.exports = router;
