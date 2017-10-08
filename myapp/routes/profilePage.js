var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fsys = require('fs');
var multer = require('multer');
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
// so '/upload' = '/profilePage/upload'
router.post('/upload', upload.any(), function(req, res, next) {
  
  //console.log(req.files, 'files');
  //console.log(req);
  console.log(req.body);
  let image = {
    filename: req.files[0].filename,
    itemname: req.body.itemName,
    email: req.body.email,
    description: req.body.itemDescription
  };
  let sql = "INSERT INTO images SET ?";
  let query = db.query(sql, image, function(err, result) {
    if (err)
      throw err;
    console.log(result);
    console.log("image inserted into table");
  });
}); 

// '/' is relative to the page youre on. the page youre on
// is your root path ie. the root path for this file is '/profilePage'
// so '/profilePage' = '/'
router.post('/', function(req, res, next) {
  console.log(req.body);
  req.app.set("userEmail", req.body.email);
  console.log("The user " + req.app.get("userEmail") + " is now logged in");
  let sql = "SELECT * FROM profiles WHERE email=\"" + req.body.email + "\"";
  let query = db.query(sql, function (err, result) {
  	if (err)
  		throw err;
  	res.render('profilePage', 
  		{ title: 'Welcome to your page account',
  			/*
        firstname : result[0].firstname,
  			lastname : result[0].lastname,
        profilePicture : result[0].picture
        */
  		});

  });
  
});




module.exports = router;
