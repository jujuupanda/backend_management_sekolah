const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("../routes/routes");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", routes.user);
app.use("/auth", routes.auth);

module.exports = app;
