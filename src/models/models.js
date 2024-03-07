const userModel = require("./user_model");
const eventModel = require("./event_model");

const model = {};
model.userModel = userModel;
model.eventModel = eventModel;

module.exports = model;
