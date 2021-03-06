var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.user) {
  	res.render('index', { 
  		title: 'Where\'s it at?',
		  jumboHeading: 'Login to Where\'s It At',		  
  	});
  }
  isUserLoggedIn = true;
  res.render('profilePage', {
  	title: 'Where\'s it at?',
	  jumboHeading: 'Secure an item below.'
  });
});

module.exports = router;
