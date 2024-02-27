//importing modules
const express = require("express");
const model = require("../models/models");

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const usernameTaken = async (req, res, next) => {
  //search the database to see if user exist
  try {
    const teacherUsername = await model.userModel.Teachers.findOne({
      where: {
        username: req.body.username,
      },
    });
    const studentUsername = await model.userModel.Students.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (teacherUsername || studentUsername) {
      return res.status(400).json({
        message: `Username sudah dipakai oleh orang lain!`,
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      message: `Terjadi kesalahan ketika membuat akun!`,
    });
  }

  // try {
  //   switch (req.body.role) {
  //     case "1":
  //       const teacherUsername = await model.userModel.Teachers.findOne({
  //         where: {
  //           username: req.body.username,
  //         },
  //       });
  //       if (teacherUsername) {
  //         return res.status(400).json({
  //           message: `Username ${req.body.username} sudah dipakai oleh orang lain!`,
  //         });
  //       } else {
  //         const teacherEmail = await model.userModel.Teachers.findOne({
  //           where: {
  //             email: req.body.email,
  //           },
  //         });
  //         if (teacherEmail) {
  //           return res.status(400).json({
  //             message: `Email ${req.body.username} sudah dipakai oleh orang lain!`,
  //           });
  //         } else {
  //           next();
  //         }
  //       }
  //       break;
  //     case "2":
  //       const studentUsername = await model.userModel.Students.findOne({
  //         where: {
  //           username: req.body.username,
  //         },
  //       });
  //       if (studentUsername) {
  //         return res.status(400).json({
  //           message: `Username ${req.body.username} sudah dipakai oleh orang lain!`,
  //         });
  //       } else {
  //         const studentEmail = await model.userModel.Teachers.findOne({
  //           where: {
  //             email: req.body.email,
  //           },
  //         });
  //         if (studentEmail) {
  //           return res.status(400).json({
  //             message: `Email ${req.body.username} sudah dipakai oleh orang lain!`,
  //           });
  //         } else {
  //           next();
  //         }
  //       }
  //       break;
  //     default:
  //       next();
  //       break;
  //   }
  // } catch (error) {
  //   res.status(400).json({
  //     message: `Username ${req.body.username} sudah dipakai oleh orang lain!`,
  //   });
  // }
};

//exporting module
module.exports = usernameTaken;
