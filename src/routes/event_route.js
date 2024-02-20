const express = require("express");
const controller = require("../controllers/contollers");
const router = express.Router();

//ROUTE
router.post("/addEvent", controller.event.addEvent);
router.get("/getEventForUser", controller.event.getEventForUser);
router.get("/getEventForAdmin/", controller.event.getEventForAdmin);

module.exports = router;
