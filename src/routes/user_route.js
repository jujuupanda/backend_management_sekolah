const express = require("express");
const controller = require("../controllers/contollers");
const checkToken = require("../middlewares/check_token");
const router = express.Router();

//ROUTE
router.get("/getUser/:username", checkToken, controller.user.getUser);

module.exports = router;
