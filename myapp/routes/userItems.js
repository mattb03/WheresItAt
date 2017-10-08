var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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
  console.log(req.app.get("userEmail"));
  let sql = "SELECT * FROM images WHERE email=\"" + req.app.get("userEmail") + "\"";
  let query = db.query(sql, function(err, result) {
    if (err)
      throw err;
    console.log(result);
    var images = {};

    for (var i = 0; i < result.length; i++) {
      // get each picture from the images directory

      
      
    }
    res.render('userItems', { 
      title: 'Your secured items',
      userItems: result
  });
  });
  
});


// '/' is relative to the page youre on. the page youre on
// is your root path ie. the root path for this file is '/userItems'
// so '/userItems' = '/'
router.post('/', function(req, res, next) {

  
});




module.exports = router;
