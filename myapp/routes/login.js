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

/* GET login. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log in to your account' });
});

/* POST login page */
router.post('/', function(req, res, next) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;

	// send the query
	connection.query(query, function (err, rows, fields) {
			if (err) throw err
			console.log('Insertion successful');
		});
	
	res.send('successful');

});


module.exports = router;
