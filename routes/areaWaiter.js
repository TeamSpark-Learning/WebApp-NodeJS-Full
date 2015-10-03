var express = require('express');
var router = express.Router();

function getWaiterModelBase() {
	return {
		partials: {
			header: 'waiter/partial/header',
			footer: 'waiter/partial/footer',
			layout: 'waiter/partial/layout'
		}
	};
};

router.get('/', function(req, res, next) {
	var model = getWaiterModelBase();

	model.tables = [{
		id: 1,
		orderId: 123,
		startTime: "10:00",
		waiter: "Ivan",
		isMyTable: false
	}, {
		id: 2,
		orderId: 987,
		startTime: "11:00",
		waiter: "Svetlana",
		isMyTable: true
	}, {
		id: 3,
		orderId: null,
		startTime: null,
		waiter: null,
		isMyTable: null
	}];

	res.render('waiter/index', model);
});

router.post('/', function(req, res, next) {
	var model = getWaiterModelBase();

	console.log(req.body.tableId);

	model.tables = [{
		id: 1,
		orderId: 123,
		startTime: "10:00",
		waiter: "Ivan"
	}, {
		id: 2,
		orderId: 987,
		startTime: "11:00",
		waiter: "Svetlana"
	}, {
		id: 3,
		orderId: null,
		startTime: null,
		waiter: null
	}];

	res.render('waiter/index', model);
});

router.get('/login', function(req, res, next) {
	var model = getWaiterModelBase();

	res.render('waiter/login', model);
});

router.get('/logout', function(req, res, next) {
	var model = getWaiterModelBase();

	res.render('waiter/login', model);
});

module.exports = router;