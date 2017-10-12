var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt');
var mysql = require('mysql');
var db = mysql.createConnection({
	host : 'localhost',
	user : 'matt',
	password : '',
	database : 'WheresItAtDB'
});

// Connect to db
db.connect(function (err) {
  if (err)
    throw err;
  console.log("MySQL connected in login.js....");
});
module.exports = function(app, passport) {
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log in to your account' });
});

/* POST login page */
router.post('/login', function(req, res, next) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;

	// send the query
	connection.query(query, function (err, rows, fields) {
			if (err) throw err
			console.log('Insertion successful');
		});
	
	res.send('successful');

});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Welcome to your page account' });
});


// '/' is relative to the page youre on. the page youre on
// is your root path ie. the root path for this file is '/profilePage'
// so '/profilePage' = '/'
router.post('/signup', function doesUserExist(req, res) {
  let sql = "SELECT * FROM users WHERE email=\"" + req.body.email +
    "\"";

  let query = db.query(sql, function(err, result) {
    console.log(result);
    console.log(result.length);
    console.log(req.body);
    if (result.length > 0) {
      // email is already taken, error
      res.redirect('/');
    }
  
    // user doesnt exist, add them to the db
    var userPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: userPassword
    }
    let insertUser = "INSERT INTO users SET ?";
    let insertQuery = db.query(insertUser, newUser, function(err, result) {
      if (err)
        throw err;
      console.log(result);
      res.send("New user \"" + newUser.email + "\" inserted into db");
    });
  

  });

});


router.get('/userItems', function(req, res, next) {
	console.log(req.app.get("userEmail"));
	let sql = "SELECT * FROM images WHERE email=\"matt_b03@yahoo.com\";"
	let query = db.query(sql, function(err, result) {
		if (err)
		  throw err;

		console.log(result);

		res.render('userItems', { 
		  title: 'Your secured items',
		  userItems: result
		});
	});
});


// '/' is relative to the page youre on. the page youre on
// is your root path ie. the root path for this file is '/userItems'
// so '/userItems' = '/'
router.post('/userItems', function(req, res, next) {

  
});

router.get('/profilePage', function(req, res, next) {
	res.render('profilePage', {
	title: 'Where\'s it at?',
	jumboHeading: 'Secure an item'
	});	
});

	// '/' is relative to the page youre on. the page youre on
	// is your root path ie. the root path for this file is '/profilePage'
	// so '/profilePage' = '/'
	router.post('/profilePage', passport.authenticate('local', { failureRedirect: '/signup'}),
	  function(req, res) {
	    res.send("user logged in");
	  }
	);

}





module.exports = router;