const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];

	if (!token)
		return res.status(401).send(
			{ auth: false, message: 'No token provided.' }
		);


	jwt.verify(
		token,
		config.get('privateAuthKey'),
		(err, decoded) => {
			if (err)
				return res.status(401).send({ message: "Unauthorized!" });

			req.userId = decoded.id;
			next();
		});

	res.status(500).json({ msg: "Server Error" });

};

const authJwt = {
	verifyToken,
};

module.exports = authJwt;
