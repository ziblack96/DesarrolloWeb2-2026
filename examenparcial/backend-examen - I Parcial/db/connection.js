import { Sequelize } from "sequelize";

const sequelize = new Sequelize("exameniparcial", "root", "Honduras2026", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Conexion se realizo exitosamente"))
  .catch((err) => console.log("Ocurrio un error con la conexion" + err));

export default sequelize;
