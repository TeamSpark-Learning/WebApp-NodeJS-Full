var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');

var areaPublic = require('./routes/areaPublic');
var areaAdmin = require('./routes/areaAdmin');
var areaWaiter = require('./routes/areaWaiter');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(favicon(path.join(__dirname, 'cdn', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// less
app.use(lessMiddleware(path.join(__dirname, 'less'), {
  dest: __dirname,
  preprocess: {
    path: function(pathname, req) {
      var pathLess = pathname.replace(path.join('cdn', 'css'), '').replace('//', '/');
      return pathLess;
    }
  }
}));

// cdn
app.use('/cdn', express.static(path.join(__dirname, 'cdn')));

app.use('/', areaPublic);
app.use('/admin', areaAdmin);
app.use('/waiter', areaWaiter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
