const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

const PRODUCTES = sequelize.define(
  "productos",
  {
    partNumber: {
      type: DataTypes.STRING,
    },
    productType: {
      type: DataTypes.STRING,
    },
    category_code: {
      type: DataTypes.STRING,
    },
    brand_code: {
      type: DataTypes.STRING,
    },
    family_code: {
      type: DataTypes.STRING,
    },
    line_code: {
      type: DataTypes.STRING,
    },
    productSegment_code: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.DOUBLE,
    },
    valueCurrency: {
      type: DataTypes.STRING,
    },
    defaultQuantityUnits: {
      type: DataTypes.STRING,
    },
    productoname: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    plannerCode: {
      type: DataTypes.STRING,
    },
    sourceLink: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "productos",
    timestamps: false,
  },
);

module.exports = PRODUCTES;
