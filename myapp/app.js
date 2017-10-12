var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(session({
	cookie: {
		path: '/',
		httpOnly: false,
		maxAge: 24 * 60 * 60 * 1000
	},
	secret: "my secret",
	saveUninitialized: true,
	resave: true
}));

var index = require('./routes/index');
var login = require('./routes/login');
var signup = require('./routes/signup');
var profilePage = require('./routes/profilePage');
var itemSecured = require('./routes/itemSecured');
var userItems = require('./routes/userItems');

app.use('/', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/profilePage', profilePage);
app.use('/itemSecured', itemSecured);
app.use('/userItems', userItems);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
