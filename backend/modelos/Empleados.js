const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

const Empleados = sequelize.define(
  "empleados",
  {
    EMPLOYEE_ID: {
      type: DataTypes.INTEGER,
    },
    FIRST_NAME: {
      type: DataTypes.STRING,
    },
    LAST_NAME: {
      type: DataTypes.STRING,
    },
    EMAIL: {
      type: DataTypes.STRING,
    },
    PHONE_NUMBER: {
      type: DataTypes.STRING,
    },
    HIRE_DATE: {
      type: DataTypes.STRING,
    },
    JOB_ID: {
      type: DataTypes.STRING,
    },
    SALARY: {
      type: DataTypes.INTEGER,
    },
    COMMISSION_PCT: {
      type: DataTypes.STRING,
    },
    MANAGER_ID: {
      type: DataTypes.INTEGER,
    },
    DEPARTMENT_ID: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "empleados",
    timestamps: false,
  },
);

module.exports = Empleados;
