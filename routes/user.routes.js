const router = require("express").Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const { verifySignUp } = require("../middleware");
const users = require("../controllers/user.controller.js");

// Retrieve all Users  - Tested done
router.get("/", users.findAll);

// Retrieve a single Users with Username - Tested done
router.get("/:username", users.findOne);

router.get("/:id", [authJwt.verifyToken], controller.userBoard);

// ADD update user info based on provided fields

// Create a new User - Tested done
router.post(
  "/",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  users.create
);

router.put("/:ObjectId", users.update);

//Hash then Update Password 
router.put('/updatepassword/:ObjectId', users.updatePassword);

// Delete a User with Id
router.delete("/:ObjectId", users.delete);

module.exports = router;
