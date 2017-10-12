var express = require('express');
var router = express.Router();
var fs = require('fs');
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
		res.redirect('/profilePage');
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

function getFilename(longName) {
	var filename = longName;
	var extension = "";
	if ((i = filename.indexOf(".png")) > -1) {
		// .png file
		extension = ".png";

	} else if ((i = filename.indexOf(".jpeg") > -1)) {
		// .jpeg file
		extension = ".jpeg";
	} else if ((i = filename.indexOf(".jpg") > -1)) {
		// .jpg file
		extension = ".jpg";
	} else {
		// ??
		res.send("wtf is that??");
	}
	i += extension.length();	// chop off end junk of filename
	filename = filename.substring(0, i);
	return filename;
}

function validateDBFS(filename, email) {
	let sql = 
		"SELECT * FROM images WHERE email=\"matt_b03@yahoo.com\";";
}

module.exports = router;
