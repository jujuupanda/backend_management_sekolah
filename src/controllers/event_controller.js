const model = require("../models/models");
const sequelize = require("sequelize");
const controller = {};

controller.addEvent = async (req, res) => {
  const { event_name, author, date, event_data } = req.body;

  try {
    await model.eventModel.create(
      {
        event_name: event_name,
        author: author,
        date: date,
        event_data: event_data,
      },
      {
        field: ["event_name", "author", "date", "event_data"],
      }
    );
    res.status(200).json({
      message: `Success created event`,
    });
  } catch (error) {
    res.status(401).json({
      message: `Error when creating event ${event_name}`,
      error: error,
    });
  }
};

controller.getEventForUser = async (req, res) => {
  try {
    const events = await model.eventModel.findAll();
    res.status(200).json({
      message: `Success get event`,
      data: events,
    });
  } catch (error) {
    res.status(401).json({
      message: `Error when get event for all user`,
      error: error,
    });
  }
};
controller.getEventForAdmin = async (req, res) => {
  const { author } = req.query;
  try {
    const events = await model.eventModel.findAll({
      where: {
        author: author,
      },
    });
    res.status(200).json({
      message: `Success get event`,
      data: events,
    });
  } catch (error) {
    res.status(401).json({
      message: `Error when get event for all admin`,
      error: error,
    });
  }
};

module.exports = controller;
