const userRoute = require("./user_route");
const authRoute = require("./auth_route");
const eventRoute = require("./event_route");
const scheduleRoute = require("./schedule_route");

const route = {};

route.user = userRoute;
route.auth = authRoute;
route.event = eventRoute;
route.schedule = scheduleRoute;

module.exports = route;
