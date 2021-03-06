var express = require('express');
var router = express.Router();
var ImageResize = require('node-image-resize');	// resize an image
var fs = require('fs');
var sizeOf = require('image-size');	// get dimensions of an image
var mysql = require('mysql');

// Create connection to db
var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'WheresItAtDB'
});

/* GET /removeItem page. */
router.get('/', function(req, res, next) {
	//res.render('login', { title: 'Log in to your account' });
	
});

/* POST /removeItem */
router.post('/', function(req, res, next) {
	console.log("FILENAME: ", req.body.fileName);
	console.log(req.body);
	let sql = "SELECT * FROM images WHERE email=\"" + req.session.user + "\" AND fileName=\"" + req.body.fileName + "\"";
	console.log("SQL: " + sql);
	let query = db.query(sql, function(err, result) {
		if (err) {
			console.log("Could not delete image row from database", err);
			throw err;
		}
		// get image path from row
		console.log(result[0]);
		fs.rm("public/images/" + result[0].fileName, function(err) {
			if (err) {
				console.log("Could not remove image.", err);
			}
			console.log("Image was removed successfully!");
		});

		let deleteRow = "DELETE FROM images WHERE email=\"" + req.session.user + "\" AND fileName=\"" + result[0].fileName + "\"";
		let deleteQuery = db.query(deleteRow, function(err, result) {
			if (err) {
				console.log("Could not remove image row from database");
			}
			console.log("Image row removed from database");
		})

	});
	res.end();
});



module.exports = router;
