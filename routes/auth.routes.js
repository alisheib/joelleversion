const router = require('express').Router();
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

router.post("/signin", controller.login);

module.exports = router;
