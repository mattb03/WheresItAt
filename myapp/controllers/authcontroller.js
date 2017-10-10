var exports = module.exports = {};

exports.signup = function(req, res) {
	res.render('signup');
}

exports.login = function(req, res) {
	res.render('index');
}

exports.profilePage = function(req, res) {
	res.render('profilePage');
}

exports.logout = function(req, res) {
	req.session.destroy(function(err) {
		console.log("INcorrect password");
		res.redirect('/');

	});
	
}