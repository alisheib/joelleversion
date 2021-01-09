const config = require("config");
const User = require('../models/User');

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



exports.login = (req, res, next) => {
	User.findOne({ email: req.body.email }).then(
		(user) => {
			if (!user) {
				return res.status(401).json({
					error: 'User not found!'
				});
			}
			bcrypt.compare(req.body.password, user.password).then(
				(valid) => {
					if (!valid) {
						return res.status(401).json({
							error: 'Incorrect password!'
						});
					}
					const token = jwt.sign(
						{ userId: user._id },
						config.get('privateAuthKey'),
						{ expiresIn: '24h' });

					res.status(200).json(token);
				}
			).catch(
				(error) => {
					res.status(500).json({
						error: error
					});
				}
			);
		}
	).catch(
		(error) => {
			res.status(500).json({
				error: error
			});
		}
	);
}

exports.findUserFromToken = (req, res, next) => {
	let token = req.headers['x-access-token'];

	if (!token)
		return res.status(401).send({ auth: false, message: 'No token provided.' });

	jwt.verify(token, config.get('privateAuthKey'), (err, decoded) => {

		if (err)
			return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

		User.findById(decoded.userId, (err, user) => {
			if (err)
				return res.status(500).send("There was a problem finding the user.");

			if (!user)
				return res.status(404).send("No user found.");

			res.status(200).send(user);
		});
	});
};