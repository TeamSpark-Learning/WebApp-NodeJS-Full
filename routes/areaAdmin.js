var express = require('express');
var router = express.Router();

function getAdminModelBase() {
	return {
		partials: {
			header: 'admin/partial/header',
			footer: 'admin/partial/footer',
			layout: 'admin/partial/layout'
		}
	};
};

router.get('/', function(req, res, next) {
	var model = getAdminModelBase();
	
	model.title = 'admin area';

	res.render('admin/index', model);
});

router.get('/login', function(req, res, next) {
	var model = getAdminModelBase();

	res.render('admin/login', model);
});

router.get('/locations', function(req, res, next) {
	var model = getAdminModelBase();

	res.render('admin/locations', model);
});

router.get('/menu', function(req, res, next) {
	var model = getAdminModelBase();

	res.render('admin/menu', model);
});



module.exports = router;
