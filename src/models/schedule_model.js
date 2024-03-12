const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database");

const Schedules = db.define(
  "schedule",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    day: {
      type: DataTypes.STRING,
    },
    startAt: {
      type: DataTypes.STRING,
    },
    endAt: {
      type: DataTypes.STRING,
    },
    teacher_name: {
      type: DataTypes.STRING,
    },
  },
  {
    schema: "public",
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

const Subjects = db.define(
  "subject",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

Subjects.hasMany(Schedules, { foreignKey: "subject_id" });
Schedules.belongsTo(Subjects, { foreignKey: "subject_id" });

module.exports = {
  Subjects,
  Schedules,
};
