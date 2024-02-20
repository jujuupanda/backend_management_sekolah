const userController = require("./user_controller");
const authController = require("./auth_controller");
const eventController = require("./event_controller");

const controller = {};

controller.user = userController;
controller.auth = authController;
controller.event = eventController;

module.exports = controller;
