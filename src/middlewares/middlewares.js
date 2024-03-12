const checkToken = require("./check_token");
const usernameTaken = require("./username_is_taken");
const alreadyExist = require("./already_exist");

const middleware = {};

middleware.checkToken = checkToken;
middleware.usernameTaken = usernameTaken;
middleware.alreadyExist = alreadyExist;

module.exports = middleware;
