const express = require("express");
const controller = require("../controllers/contollers");
const middlewares = require("../middlewares/middlewares");
const router = express.Router();

//ROUTE
router.get(
  "/getUser/:username",
  middlewares.checkToken,
  controller.user.getUser
);

router.post("/createUser", middlewares.usernameTaken, controller.user.addUser);

module.exports = router;
