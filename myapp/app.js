// app.js = server.js
// express app() = server
var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var profilePage = require('./routes/profilePage');
var itemSecured = require('./routes/itemSecured');
var userItems = require('./routes/userItems');

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
	secret: 'learn node',	// encrypt sessions, should be unique for app
	resave: true,	// updates session on each page view, even if 
	// it didnt change. this is so pages dont expire
	saveUninitialized: false	// sessions arent stored from 
	// brand new sessions that are empty. they wont be stored until something is in them.
	// this cuts down on database traffic for an anonymous user.
}));
// For Passport
app.use(session ({
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true
}));	// session secret
app.use(passport.initialize());
app.use(passport.session());
var env = require('dotenv').load();

// Models
var models = require('./models');

// Routes
var authRoute = require('./routes/auth.js')(app, passport);

// load passport strategies
require('./config/passport/passport.js')(passport, models.user);


// Sync Database
models.sequelize.sync().then(function() {
	console.log("Database \"looks fine\"");
}).catch(function(err) {
	console.log(err, "Something went wrong with the database update!");
});

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
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
