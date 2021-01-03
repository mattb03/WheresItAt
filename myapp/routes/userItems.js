var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//var mysqlx = require('@mysql/xdevapi');

const options = { user: 'root', password: 'MyNewPass', schema: 'mySchema' };


// Create connection to db
var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'WheresItAtDB'
});

// Connect to db
db.connect(function (err) {
  if (err)
    throw err;
  console.log("MySQL connected in userItems.js....");
});

router.get('/', function(req, res, next) {
  if (!req.session.user) {
    res.render('index');
  } 
  let sql = "SELECT * FROM images WHERE email=\"" + req.session.user + "\";"
  let query = db.query(sql, function(err, result) {
    if (err)
      throw err;
  var i;
  req.session.result = result;
  console.log("GET useritems RESULT: ", result);
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
