var express = require('express');
var router = express.Router();

function getPublicModelBase() {
	return {
		partials: {
			header: 'public/partial/header',
			footer: 'public/partial/footer',
			layout: 'public/partial/layout'
		}
	};
};

router.get('/', function(req, res, next) {
	var model = getPublicModelBase();

	model.title = 'public area';

	res.render('public/index', model);
});

router.get('/locations', function(req, res, next) {
	var model = getPublicModelBase();

	model.title = 'locations';
	model.locations = [
		{title: 'downtown', phones: '555-00-11', workHours: '0-24', description: ''},
		{title: 'north', phones: '', workHours: '12-22', description: ''},
		{title: 'south', phones: '', workHours: '', description: ''},
		{title: 'west', phones: '', workHours: '8-16', description: ''},
		{title: 'east', phones: '', workHours: '16-24', description: ''}
	];

	res.render('public/locations', model);
});

router.get('/menu', function(req, res, next) {
	var model = getPublicModelBase();

	model.title = 'menu';
	model.dishes = [
		{title: 'tea', description: 'tea in a cup', price: 0.99, imageUrl: '/cdn/img/1437442997_handdrawn-graduation-cap.png'}
	];

	res.render('public/menu', model);
});

module.exports = router;
