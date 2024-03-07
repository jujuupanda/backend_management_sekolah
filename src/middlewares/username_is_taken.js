//importing modules
const express = require("express");
const model = require("../models/models");

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const usernameTaken = async (req, res, next) => {
  //search the database to see if user exist
  try {
    const userUsername = await model.userModel.Users.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (userUsername) {
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
};

//exporting module
module.exports = usernameTaken;
