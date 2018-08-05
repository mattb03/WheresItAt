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
    if (!req.session.user) {
      console.log("USER IS LOGEGD IN ");
      res.render('index', { 
        title: 'Where\'s it at?',
        jumboHeading: 'You are now logged in'
      }); 
    } 
    res.render('profilePage', {
      title: 'Where\'s it at?',
      jumboHeading: 'Secure an item below.'
    });
});

// '/' is relative to the page youre on. the page youre on
// is your root path ie. the root path for this file is '/profilePage'
// so '/profilePage' = '/'
router.post('/', function authenticateUser(req, res, next) {
    let sql = "SELECT * FROM users WHERE email=\"" + req.body.email + "\"";
    console.log(req.body);
    let query = db.query(sql, function(err, result) {
      if (result.length > 0) {
        // user not in databse
        res.render('/');
      }
      try {
        var userPassword = result[0].password;

        if (!bcrypt.compareSync(req.body.password, userPassword)) {
          // wrong password
          res.render('index');
        }
        // valid password
        // log hte user in globally
        global.userEmail = result[0].email;
        global.userFirstName = result[0].firstName;
        global.userLastName = result[0].lastName;
        req.session.user = result[0].email;
        req.session.userFirstName = result[0].firstName;
        req.session.userLastName = result[0].lastName;
        console.log(req.session.user);
        console.log(req.session.userFirstName);
        console.log(req.session.userLastName);
        res.render('profilePage', {
          title: 'Where\'s it at?',
          jumboHeading: 'Secure an item below.'
        });
      } catch(err) {
        // user not registered in database/website
        console.log("USER NOT FOUND");
        res.render('signup');
      }

  }
  );
});




module.exports = router;
