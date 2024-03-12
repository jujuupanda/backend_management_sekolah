const model = require("../models/models");
const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const controller = {};

//CONTROLLER
//Find Data Single User
controller.getUser = async (req, res) => {
  const { username } = req.params;

  try {
    //Find user by username
    const user = await model.userModel.Users.findOne({
      include: [
        {
          model: model.userModel.MajorClass,
        },
      ],
      where: {
        username: username,
      },
    });
    if (user) {
      res.status(200).json({
        message: "Berhasil",
        data: user,
      });
    } else {
      res.status(401).json({
        message: `Data dengan user ${username} tidak ditemukan!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

controller.addUser = async (req, res) => {
  const { username, password, role, name } = req.body;

  //Find user by username
  try {
    const passwordHashed = await bcrypt.hash(password, 10);

    if (role == "1" || role == "2" || role == "3") {
      const user = await model.userModel.Users.create(
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
      if (user) {
        res.status(200).json({
          message: `Berhasil membuat user ${username}!`,
        });
      } else {
        res.status(400).json({
          message: `User ${username} gagal dibuat!`,
        });
      }
    } else {
      res.status(400).json({
        message: "Terjadi kesalahan! Role hanya tersedia 1, 2, 3!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Terjadi kesalahan!",
      error: error,
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
