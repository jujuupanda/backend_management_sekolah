//importing modules
const express = require("express");
const sequelize = require("sequelize");
const model = require("../models/models");

//this is to avoid having two users with the same subject
const subjectExist = async (req, res, next) => {
  //search the database to see if subject exist
  try {
    const subject = await model.scheduleModel.Subjects.findOne({
      where: {
        name: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("name")),
          "LIKE",
          "%" + req.body.name.toLowerCase() + "%"
        ),
      },
    });
    if (subject) {
      return res.status(400).json({
        message: `Mata pelajaran sudah ada!`,
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      message: `Terjadi kesalahan ketika membuat mata pelajaran!`,
    });
  }
};

//exporting module
module.exports = { subjectExist };
