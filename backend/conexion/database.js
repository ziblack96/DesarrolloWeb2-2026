const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("clasepractica", "root", "Honduras2026", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Conexion Exitosa"))
  .catch((error) => console.log(error));

module.exports = sequelize;
