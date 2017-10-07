var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET /submitComment page. */
router.get('/', function(req, res, next) {
	//res.render('login', { title: 'Log in to your account' });
	
});

/* POST /submitComment */
router.post('/', function(req, res, next) {
	//res.render('login', { title: 'Log in to your account' });
	res.send("swell job");
	console.log(req.body);

});

module.exports = router;
