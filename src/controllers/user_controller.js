const model = require("../models/models");
const sequelize = require("sequelize");
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

// if (role == 1) {
//   const teacher = await model.userModel.Teachers.findOne({
//     where: {
//       username: username,
//     },
//   });
//   if (teacher) {
//     res.status(200).json({
//       message: "Berhasil",
//       data: teacher,
//     });
//   } else {
//     res.status(402).json({
//       message: `Data dengan user ${username} tidak ditemukan!`,
//     });
//   }
// } else if (role == 2) {
//   const student = await model.userModel.Students.findOne({
//     where: {
//       username: username,
//     },
//   });
//   if (student) {
//     res.status(200).json({
//       message: "Berhasil",
//       data: student,
//     });
//   } else {
//     res.status(402).json({
//       message: `Data dengan user ${username} tidak ditemukan!`,
//     });
//   }
// } else {
//   res.status(402).json({
//     message: "Terjadi kesalahan!",
//   });
// }
