var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("^^^ SESSION ^^^");
  console.log(req.session);
  res.render('about', {
    isUserLoggedIn: req.session.isUserLoggedIn
  });
});

module.exports = router;
