const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database");

const MajorClass = db.define(
  "majorclass",
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

const Lessons = db.define(
  "lesson",
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
    majorclass_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teacher: {
      type: DataTypes.STRING,
    },
    startAt: {
      type: DataTypes.STRING,
    },
    endAt: {
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

MajorClass.hasMany(Lessons, { foreignKey: "majorclass_id" });
Lessons.belongsTo(MajorClass, { foreignKey: "majorclass_id" });

module.exports = {
  MajorClass,
  Lessons,
};
