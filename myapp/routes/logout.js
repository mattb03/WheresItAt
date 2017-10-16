var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("ROUTE IS FOUND");
    console.log(req.session.user);
    let sql = "SELECT * FROM users WHERE email=\"" + req.session.user + "\"";
    console.log(req.body);
    delete req.session.user;
    delete req.session.userFirstName;
    delete req.session.userLastName;
    res.render('index', { 
      title: 'Where\'s it at?',
      jumboHeading: 'You are now logged in'
    });
    /*
    let query = db.query(sql, function(err, result) {
      if (result.length > 0) {
        // user not in databse
        res.render('index');
      }
      try {
      	// set all user variables to empty
        global.userEmail = "";
        global.userFirstName = "";
        global.userLastName = "";
        req.session.user = "";
        req.session.userFirstName = "";
        req.session.userLastName = "";
        console.log(req.session.user);
        console.log(req.session.userFirstName);
        console.log(req.session.userLastName);
        res.render('index', {
          title: 'Where\'s it at?',
          jumboHeading: 'Login to Where\'s It At'
        });
      } catch(err) {
        // user not registered in database/website
        console.log("ERROR: Logout route requested but user not found in database.");
        res.render('index');
      }

  }
  );
  */
});

router.post('/', function(req, res, next) {
    res.render('index', { 
      title: 'Where\'s it at?',
      jumboHeading: 'You are now logged in'
    });
});

module.exports = router;