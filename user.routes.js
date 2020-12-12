const router = require("express").Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const { verifySignUp } = require("../middleware");
const { verifyUpdate } = require("../middleware/verifyUpdate");
const users = require("../controllers/user.controller.js");

// TODO add create update delete routes

// CHANGE to get all users => only for personal use => check for custom header in the request
router.get("/all", controller.allAccess);

// CHANGE get user by id
router.get("/:id", [authJwt.verifyToken], controller.userBoard);

// ADD update user info based on provided fields

// Create a new User - Tested done
router.post(
  "/users",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  users.create
);

// Retrieve all Users  - Tested done
router.get("/users", users.findAll);

// Retrieve a single Users with Username - Tested done
router.get("/users/:username", users.findOne);

// Update a Users with Id
router.put(
  "/users/:ObjectId",
  [checkExistingUsernameOrEmailForUpdate],
  users.update
);

// Delete a User with Id
router.delete("/users/:ObjectId", users.delete);

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

module.exports = router;
