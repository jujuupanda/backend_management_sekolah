const sequelize = require("sequelize");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_DIALECT = process.env.DB_DIALECT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const connection = new sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

module.exports = connection;
