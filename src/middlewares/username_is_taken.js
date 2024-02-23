//importing modules
const express = require("express");
const model = require("../models/models");

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const usernameTaken = async (req, res, next) => {
  //search the database to see if user exist
  try {
    switch (req.body.role) {
      case "1":
        const teacher = await model.userModel.Teachers.findOne({
          where: {
            username: req.body.username,
          },
        });
        if (teacher) {
          return res.status(402).json({
            message: `Username ${req.body.username} sudah dipakai oleh orang lain!`,
          });
        } else {
          next();
        }
        break;
      case "2":
        const student = await model.userModel.Students.findOne({
          where: {
            username: req.body.username,
          },
        });
        if (student) {
          return res.status(402).json({
            message: `Username ${req.body.username} sudah dipakai oleh orang lain!`,
          });
        } else {
          next();
        }
        break;
      default:
        next();
        break;
    }
  } catch (error) {
    res.status(402).json({
      message: `Username ${req.body.username} sudah dipakai oleh orang lain!`,
    });
  }
};

//exporting module
module.exports = usernameTaken;
