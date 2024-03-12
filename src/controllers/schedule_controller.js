const model = require("../models/models");
const sequelize = require("sequelize");
const controller = {};

controller.getSchedule = async (req, res) => {
  const { class_id } = req.params;

  try {
    const schedule = await model.scheduleModel.Schedules.findAll({
      include: [
        {
          model: model.scheduleModel.Subjects,
        },
      ],
      where: {
        class_id: class_id,
      },
    });
    if (schedule) {
      res.status(200).json({
        message: "Berhasil!",
        data: schedule,
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Terjadi kesalahan!",
      error: error,
    });
  }
};

controller.addSubject = async (req, res) => {
  const { name } = req.body;
  try {
    const subject = await model.scheduleModel.Subjects.create(
      {
        name: name,
      },
      {
        field: ["name"],
      }
    );

    if (subject) {
      res.status(200).json({
        message: `Berhasil membuat mata pelajaran ${name}!`,
      });
    } else {
      res.status(400).json({
        message: `Gagal membuat mata pelajaran ${name}!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Terjadi kesalahan!",
      error: error,
    });
  }
};

controller.addSchedule = async (req, res) => {
  const { class_id, subject_id, day, startAt, endAt, teacher_name } = req.body;
  try {
    const schedule = await model.scheduleModel.Schedules.create(
      {
        class_id: class_id,
        subject_id: subject_id,
        day: day,
        startAt: startAt,
        endAt: endAt,
        teacher_name: teacher_name,
      },
      {
        field: [
          "class_id",
          "subject_id",
          "day",
          "startAt",
          "endAt",
          "teacher_name",
        ],
      }
    );

    if (schedule) {
      res.status(200).json({
        message: `Berhasil membuat jadwal!`,
      });
    } else {
      res.status(400).json({
        message: `Gagal membuat jadwal!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Terjadi kesalahan!",
      error: error,
    });
  }
};

module.exports = controller;
