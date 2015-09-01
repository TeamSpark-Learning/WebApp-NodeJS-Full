var express = require('express');
var router = express.Router();

var getModelBase = function() {
	return {
		partials: {
			header: 'public/partial/header',
			footer: 'public/partial/footer',
			layout: 'public/partial/layout'
		}
	};
};

router.get('/', function(req, res, next) {
	var model = getModelBase();

	model.title = 'public area';

	res.render('public/index', model);
});

router.get('/locations', function(req, res, next) {
	var model = getModelBase();

	model.title = 'locations';

	res.render('public/locations', model);
});

router.get('/menu', function(req, res, next) {
	var model = getModelBase();

	model.title = 'menu';

	res.render('public/menu', model);
});

module.exports = router;
