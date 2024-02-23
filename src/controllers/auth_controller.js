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
    //Student
    const student = await model.userModel.Students.findOne({
      where: {
        username: username,
      },
    });
    //Teacher
    const teacher = await model.userModel.Teachers.findOne({
      where: {
        username: username,
      },
    });
    //Check user success or failed login
    if (student) {
      //Check users password is valid
      const passwordValid = await bcrypt.compare(password, student.password);

      if (passwordValid) {
        const token = jwt.sign(
          {
            username: student.username,
            role: student.role,
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
    } else if (teacher) {
      //Check users password is valid
      const passwordValid = await bcrypt.compare(password, teacher.password);

      if (passwordValid) {
        const token = jwt.sign(
          {
            username: teacher.username,
            role: teacher.role,
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
    res.status(402).json({
      message: "Terjadi kesalahan!",
      error: err,
    });
  }
};

module.exports = controller;
