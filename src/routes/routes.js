const userRoute = require("./user_route");
const authRoute = require("./auth_route");

const route = {};

route.user = userRoute;
route.auth = authRoute;

module.exports = route;
