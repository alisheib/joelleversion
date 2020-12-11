const db = require("../models");
const User = db.user;

checkExistingUsernameOrEmailForUpdate = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user && (user.email != req.body.email) ) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user && (user.username != req.body.username)) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};



const verifyUpdate = {
  checkExistingUsernameOrEmailForUpdate,
};

module.exports = verifyUpdate;
