const User = require("../models/User.model");
var bcrypt = require("bcryptjs");
const { user } = require("../models");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.email ||
    !req.body.dateOfBirth
  ) {
    return res.status(400).send({
      message: "Required fields content can not be empty",
    });
  }
  // Create a user
  bcrypt.hash(req.body.password, 6).then((hash) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      dateOfBirth: req.body.dateOfBirth,
    });
    user
      .save()
      .then(() => {
        res.status(201).json({
          message: "User added successfully!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      });
  });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single user with username
exports.findOne = (req, res) => {
  User.findOne({
    username: req.params.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.send(user);
    } else {
      return res.status(404).send({
        message: "User not found with username " + req.params.username,
      });
    }
  });
};

// Update a user identified by the Id in the request
exports.update = async (req, res, next) => {
  try {
    const id = req.params.ObjectId;
    const updates = req.body;
    const options = { new: true };
    const result = await User.findByIdAndUpdate(id, updates, options);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

// Delete a user with the specified ID in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.ObjectId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with ObjectId " + req.params.ObjectId,
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with username " + req.params.ObjectId,
        });
      }
      return res.status(500).send({
        message: "Could not delete user with username " + req.params.ObjectId,
      });
    });
};
