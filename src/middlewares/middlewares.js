const checkToken = require("./check_token");
const usernameTaken = require("./username_is_taken");

const middleware = {};

middleware.checkToken = checkToken;
middleware.usernameTaken = usernameTaken;

module.exports = middleware;
