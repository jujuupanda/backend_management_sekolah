const userModel = require("./user_model");
const eventModel = require("./event_model");
const majorclassModel = require("./majorclass_model");

const model = {};
model.userModel = userModel;
model.eventModel = eventModel;
model.majorclassModel = majorclassModel;

module.exports = model;
