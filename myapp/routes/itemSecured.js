var express = require('express');
var router = express.Router();
var ImageResize = require('node-image-resize');	// resize an image
var fs = require('fs');
var sizeOf = require('image-size');	// get dimensions of an image
var mysql = require('mysql');

// Create connection to db
var db = mysql.createConnection({
  host : 'localhost',
  user : 'matt',
  password : '',
  database : 'WheresItAtDB'
});

/* GET /submitComment page. */
router.get('/', function(req, res, next) {
	//res.render('login', { title: 'Log in to your account' });
	
});

/* POST /itemSecured */
router.post('/', function(req, res, next) {

	// go back if ther was no file or item name
	if (!req.files || req.body.itemName < 1) {
		res.render('profilePage', {
			title: 'Where\'s it at?',
			jumboHeading: 'Secure an item below.'
		});
	}
	let file = req.files.itemPicture;

	file.mv("public/images/" + file.name, function(err) {
		if (err) {
			console.log("Image could not be saved to file system");
			throw err;
		}
	});
  	let post = {
		email: global.userEmail,
		itemName: req.body.itemName,
		itemDescription: req.body.itemDescription,
		fileName: req.files.itemPicture.name,
		imagePath: "public/images/" + file.name
	};

	// '?' is a placeholder for the second argument
	// db.query(query, placeholder, callback function)
	let sql = "INSERT INTO images SET ?";
	let query = db.query(sql, post, function(err, result) {
		if (err) {
			// if query errors move the image to the trash
			file.mv("public/trash/images/" + file.name, function(err) {
				if (err) {
					console.log("Couldnt move \"" + file.name + "\" to trash directory. Delete manually.");
					throw err;
				}
			});
			throw err;
		}

		res.render("itemSecured", {
		itemname: post.itemName
	});
	});

});


module.exports = router;
