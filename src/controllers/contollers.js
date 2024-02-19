const userController = require("./user_controller");
const authController = require("./auth_controller");

const controller = {};

controller.user = userController;
controller.auth = authController;

module.exports = controller;
