const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database");
const Users = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identity_number: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    majorclass_id: {
      type: DataTypes.INTEGER,
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

MajorClass.hasMany(Users, { foreignKey: "majorclass_id" });
Users.belongsTo(MajorClass, { foreignKey: "majorclass_id" });

MajorClass.hasMany(Lessons, { foreignKey: "majorclass_id" });
Lessons.belongsTo(MajorClass, { foreignKey: "majorclass_id" });

module.exports = {
  Users,
  MajorClass,
  Lessons,
};
