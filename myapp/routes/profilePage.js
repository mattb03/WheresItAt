var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fsys = require('fs');
var multer = require('multer');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})
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
  console.log("MySQL connected in profilePage.js....");
});

router.get('/', function(req, res, next) {
  res.render('profilePage', { title: 'Welcome to your page account' });
});

// '/' is relative to the page youre on. the page youre on
// is your root path ie. the root path for this file is '/profilePage'
// so '/profilePage' = '/'
router.post('/', function isAuthenticated(req, res, next) {
    let sql = "SELECT * FROM users WHERE email=\"" + req.body.email + "\"";
    console.log(req.body);
    let query = db.query(sql, function(err, result) {
      if (result.length > 0) {
        // user not in databse
        res.render('/');
      }
      try {
        console.log(result[0].password);
        var userPassword = result[0].password;
        console.log(req.body.password);
        if (!bcrypt.compareSync(req.body.password, userPassword)) {
          // wrong password
          res.render('index');
        }
        // valid password
        res.render('profilePage');
      } catch(err) {
        // user not registered in database/website
        console.log("USER NOT FOUND");
        res.render('index');
      }

  }
  );
});




module.exports = router;
