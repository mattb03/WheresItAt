var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('Sequelize');
module.exports = function(passport, user) {
	// initialize passport-local strategy and user model, which will be passed as an argument. Here's how we do this:
	var User = user;
	var LocalStrategy = require('passport-local').Strategy;
	// Then we define our custom strategy with our instance of the LocalStrategy like this:
	passport.use('local-signup', new LocalStrategy(
	{
		// define our request fields ie. are our passport variables
		firstName: 'firstName',
		lastName: 'lastName',
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true // allows us to pass back the entire request to the callback
	},
	function(req, email, password, done) {
		var generateHash = function(password) {
			return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
		};
		User.findOne({
			where: {
				email: email
			}
		}).then(function(user) {
			if (user) {
				return done(null, false, {
					message: "That email is taken"
				});
			}
			// create the user
			var newUser = new User();
			newUser.email = req.body.email;

			// set the user's local credentials
			var userPassword = generateHash(password);
			newUser.password = userPassword;
			newUser.firstName = req.body.firstName;
			newUser.lastName = req.body.lastName;

			// save the user
			newUser.save(function(err) {
				if (err) {
					console.log("Error saving user: " + err);
					throw err;
				}
				console.log("User registration successful!");
				return done(null, newUser);
			});
		});
	}
	));
	// serialize
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// deserialize user
	passport.deserializeUser(function(id, done) {
		User.findById(id).then(function(user) {
			if (user) {
				done(null, user.get());
			} else {
				done(user.errors, null);
			}
		})
	});

	passport.use('local-signin', new LocalStrategy(
		{
			// by default, local strategy uses username and password, we 
			// will override with email
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true // allows us to pass back the entire request to the callback

		},

		function(req, email, password, done) {
			var User = user;

			var isValidPassword = function(userpass, password) {
				return bcrypt.compareSync(password, userpass);
			};

			User.findOne({
				where: {
					email: email
				}
			}).then(function(user) {
				if (!user) {
					return done(null, false, {
						message: "Email does not exist"
					});
				}

				if (!isValidPassword(user.password, password)) {
					return done (null, false, {
						message: "Incorrect password."
					});
				}

				var userinfo = user.get();
				return done(null, userinfo);

			}).catch(function(err) {
				console.log("Error: ", err);
				return done(null, false, {
					message: "Something went wrong with your signin."
				});
			})
			
		}
		
	));
};