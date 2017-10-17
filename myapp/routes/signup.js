var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fsys = require('fs');
var multer = require('multer');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt-nodejs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage })
var $ = require('jQuery');
// Create connection to db
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
  console.log("MySQL connected in signup.js....");
});

// setup passport LocalStrategy
passport.use(new LocalStrategy(function(username, password, done) {
  console.log(username);
}));

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Welcome to your page account' });
});


// '/' is relative to the page youre on. the page youre on
// is your root path ie. the root path for this file is '/profilePage'
// so '/profilePage' = '/'
router.post('/', function doesUserExist(req, res) {
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
      // log hte user in globally
      global.userEmail = req.body.email;
      global.userFirstName = req.body.firstName;
      global.userLastName = req.body.lastName;
      req.session.user = req.body.email;
      req.session.userFirstName = req.body.firstName;
      req.session.userLastName = req.body.lastName;
      res.render('profilePage', {
        title: 'Where\'s it at?',
        jumboHeading: 'Secure an item below.'
      });
    });
  

  });

});




module.exports = router;
