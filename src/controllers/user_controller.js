const model = require("../models/models");
const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const controller = {};

//CONTROLLER
//Find Data Single User
controller.getUser = async (req, res) => {
  const { username } = req.params;
  const { role } = req.query;
  //Find user by username
  switch (role) {
    case "1":
      const teacher = await model.userModel.Teachers.findOne({
        where: {
          username: username,
        },
      });
      if (teacher) {
        res.status(200).json({
          message: "Berhasil",
          data: teacher,
        });
      } else {
        res.status(402).json({
          message: `Data dengan user ${username} tidak ditemukan!`,
        });
      }

      break;
    case "2":
      const student = await model.userModel.Students.findOne({
        where: {
          username: username,
        },
      });
      if (student) {
        res.status(200).json({
          message: "Berhasil",
          data: student,
        });
      } else {
        res.status(402).json({
          message: `Data dengan user ${username} tidak ditemukan!`,
        });
      }
      break;

    default:
      res.status(402).json({
        message: "Terjadi kesalahan!",
      });
      break;
  }
};

controller.addUser = async (req, res) => {
  const { username, password, role, name } = req.body;

  //Find user by username
  try {
    const passwordHashed = await bcrypt.hash(password, 10);

    switch (role) {
      case "1":
        const teacher = await model.userModel.Teachers.create(
          {
            username: username,
            password: passwordHashed,
            role: role,
            name: name,
          },
          {
            field: ["username", "password", "role", "name"],
          }
        );
        if (teacher) {
          res.status(200).json({
            message: `Berhasil membuat user ${username}!`,
          });
        } else {
          res.status(402).json({
            message: `User ${username} gagal dibuat!`,
          });
        }
        break;
      case "2":
        const student = await model.userModel.Students.create(
          {
            username: username,
            password: passwordHashed,
            role: role,
            name: name,
          },
          {
            field: ["username", "password", "role", "name"],
          }
        );
        if (student) {
          res.status(200).json({
            message: `Berhasil membuat user ${username}!`,
          });
        } else {
          res.status(400).json({
            message: `User ${username} gagal dibuat!`,
          });
        }
        break;

      default:
        res.status(400).json({
          message:
            "Terjadi kesalahan! Role hanya tersedia 1 untuk Guru dan 2 untuk Murid!",
        });
        break;
    }
  } catch (err) {
    res.status(400).json({
      message: "Terjadi kesalahan!",
      error: err,
    });
  }
};

controller.getAllUser = async (req, res) => {
  const user = await model.userModel.Students.findAll();
  if (user) {
    res.json({
      data: user,
    });
  } else {
    res.json({
      message: "gagal",
    });
  }
};

module.exports = controller;
