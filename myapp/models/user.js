module.exports = function(sequelize, Sequelize) {
	var User = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		
		firstName: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		
		lastName: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		/*
		username: {
			type: Sequelize.TEXT
		}, 
		
		about: {
			type: Sequelize.TEXT
		},
		*/
		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},

		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		/*
		last_login: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}
		*/
	},
	{
		timestamps: false
	}
	);
	return User;
};