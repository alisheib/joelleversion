const router = require('express').Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

// TODO add create update delete routes

// CHANGE to get all users => only for personal use => check for custom header in the request
router.get("/all", controller.allAccess);

// CHANGE get user by id
router.get("/:id", [authJwt.verifyToken], controller.userBoard);

// ADD update user info based on provided fields
// router.put('user/:id', )

module.exports = router;
