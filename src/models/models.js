const userModel = require("./user_model");
const eventModel = require("./event_model");
const scheduleModel = require("./schedule_model");

const model = {};
model.userModel = userModel;
model.eventModel = eventModel;
model.scheduleModel = scheduleModel;

module.exports = model;
