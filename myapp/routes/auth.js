var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
	app.get('/signup', authController.signup);

	app.get('/login', authController.login);

	app.post('/signup', passport.authenticate('local-signup', {
			successRedirect: '/profilePage',
			failureRedirect: '/signup'
		}
	));

	app.post('/login', passport.authenticate('local-signin', {
			successRedirect: '/profilePage',
			failureRedirect: '/'
		}
	));

	app.get('/profilePage', isLoggedIn, authController.profilePage);
	app.get('/logout', authController.logout);

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		res.redirect('/'); 
	}
}