const express = require("express");
const cors = require("cors");
const Empleados = require("./modelos/Empleados");
const PRODUCTES = require("./modelos/Productos");
const sequelize = require("./conexion/database");

const app = express();

app.use(cors());
app.use(express.json());

// La Rtua
// Metodo (Get, Post, Put, Delete * patch)
// Entrada <(-:-)>  Salida, (request, response)
// Codigo de Respuesta sum-salary-by-depto

// Select SUM(SALARY) as 'SUMA SALARIO POR DEPTO' , department_id from employees
// group by department_id;

app.get("/", (req, res) => {
  res.send("Puerto Raiz Funcionando");
});

app.get(
  "/sum-salary-by-depto",
  async (req, res) => {
    try {
      const result = await Empleados.findAll({
        attributes: [
          "DEPARTMENT_ID",
          [
            sequelize.fn("SUM", sequelize.col("SALARY")),
            "SUMA SALARIO POR DEPTO",
          ],
        ],
        group: ["DEPARTMENT_ID"],
      });

      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ " mensaje": "No hay datos que mostrar" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ " mensaje": "Ocurrio un error", error });
    }
  },

  //   -- 7. Calcular el valor promedio de los productos por cada tipo de moneda(valueCurrency) --
  // SELECT valueCurrency as "Tipo de Moneda", ROUND(AVG(value),2) as "Valor Promedio"
  // from productos
  // Group By valueCurrency;
  app.get("/promedio-tipomoneda", async (req, res) => {
    try {
      const result = await PRODUCTES.findAll({
        attributes: [
          "valueCurrency",
          [sequelize.fn("AVG", sequelize.col("VALUE")), "Valor Promedio"],
        ],
        group: ["valueCurrency"],
      });

      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ " mensaje": "No hay datos que mostrar" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ " mensaje": "Ocurrio un error", error });
    }
  }),

  // -- 10. Calcular el valor promedio de productos por cada categoryCode--
  // SELECT categoryCode as "Codigo de Categoria", ROUND(AVG(value),2) as "Valor Promedio"
  // from productos
  // Group By categoryCode;

  app.get("/promedio-categoriacode", async (req, res) => {
    try {
      const result = await PRODUCTES.findAll({
        attributes: [
          "category_code",
          [sequelize.fn("AVG", sequelize.col("VALUE")), "Valor Promedio"],
        ],
        group: ["category_code"],
      });

      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ " mensaje": "No hay datos que mostrar" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ " mensaje": "Ocurrio un error", error });
    }
  }),

  // -- 12. Calcular el valor total de productos en cada brandCode: --
  // Select brand_Code as "Codigo de marca",SUM(value) as "Valor Total"
  // from productos
  // Group By brand_Code;
  app.get("/total-brandcode", async (req, res) => {
    try {
      const result = await PRODUCTES.findAll({
        attributes: [
          "brand_code",
          [sequelize.fn("SUM", sequelize.col("VALUE")), "Valor Total"],
        ],
        group: ["brand_code"],
      });

      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ " mensaje": "No hay datos que mostrar" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ " mensaje": "Ocurrio un error", error });
    }
  }),
);

app.listen(3000, () => console.log("Ejecutando Backend"));
