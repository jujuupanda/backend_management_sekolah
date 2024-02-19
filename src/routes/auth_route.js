const express = require("express");
const controller = require("../controllers/contollers");
const router = express.Router();

//ROUTE
router.post("/login", controller.auth.login);

module.exports = router;
