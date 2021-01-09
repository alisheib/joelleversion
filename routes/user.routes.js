const router = require("express").Router();
const { authJwt } = require("../middleware");
const { verifySignUp } = require("../middleware");
const userController = require("../controllers/user.controller.js");
const authController = require('../controllers/auth.controller.js');

// Retrieve all Users  - Tested done
router.get("/", userController.findAll);

router.get("/token", authController.findUserFromToken);

router.get("/fetch/:ObjectId", userController.findById)
// Create a new User
router.post("/", [verifySignUp.checkDuplicateUsernameOrEmail], userController.create);

// Update a user
router.put("/:ObjectId", userController.update);

// Update Password 
router.put('/updatepassword/:ObjectId', [authJwt.verifyToken], userController.updatePassword);

// Delete a user
router.delete("/:ObjectId", userController.delete);

module.exports = router;
