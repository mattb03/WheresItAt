var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.user) {
  	res.render('index', { 
  		title: 'Where\'s it at?',
  		jumboHeading: 'You are now logged in'
  	});
  }
  res.render('profilePage', {
  	title: 'Where\'s it at?',
  	jumboHeading: 'Welcome to Where\'s It At\n Secure an item below.'
  });
});

module.exports = router;
