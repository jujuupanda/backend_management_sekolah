const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const createJWT = ({ username, role }) => {
  jwt.sign(
    {
      username: username,
      role: role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXP,
      noTimestamp: true,
    }
  );
  return createJWT;
};

module.exports = createJWT;
