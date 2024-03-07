const model = require("../models/models");
const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const controller = {};

//CONTROLLER
controller.login = async (req, res) => {
  //BODY JSON
  const { username, password } = req.body;

  try {
    //Check if user is exist
    const user = await model.userModel.Users.findOne({
      where: {
        username: username,
      },
    });
    //Check user success or failed login
    if (user) {
      //Check users password is valid
      const passwordValid = await bcrypt.compare(password, user.password);

      if (passwordValid) {
        const token = jwt.sign(
          {
            username: user.username,
            role: user.role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXP,
            noTimestamp: true,
          }
        );
        res.status(200).json({
          message: "Berhasil Login",
          data: token,
        });
      } else {
        res.status(401).json({
          message: "Password salah!",
        });
      }
    } else {
      res.status(401).json({
        message: "Pengguna tidak ditemukan!",
      });
    }
  } catch (err) {
    res.status(401).json({
      message: "Terjadi kesalahan saat login!",
      error: err,
    });
  }
};

module.exports = controller;
