/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import React, { useEffect, useState } from "react";
import { fetchPromedioMarcaCategoria } from "@/app/Servicios/api";

// -- 10. Calcular el valor promedio de productos por cada categoryCode--
// SELECT categoryCode as "Codigo de Categoria", ROUND(AVG(value),2) as "Valor Promedio"
// from productos
// Group By categoryCode;

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Page() {
  const [chartData, setchartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        data: [] as string[],
        backgroundColor: [] as any,
        border: [] as any,
        borderWidth: 0,
      },
    ],
  });

  useEffect(() => {
    fetchPromedioMarcaCategoria().then((data) => {
      try {
        console.log(data);
        const labels = data.map((item: any) => item.category_code);
        const valorpromedio = data.map((item: any) =>
          Number(item["Valor Promedio"]),
        );

        setchartData({
          labels: labels,
          datasets: [
            {
              data: valorpromedio,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(46, 204, 113, 0.2)",
                "rgba(63, 81, 181, 0.2)",
                "rgba(38, 166, 154, 0.2)",
                "rgba(120, 144, 156, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 112, 67, 0.2)",
                "rgba(171, 71, 188, 0.2)",
              ],
              border: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255,1)",
                "rgba(255, 159, 64, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255,1)",
                "rgba(46, 204, 113, 1)",
                "rgba(63, 81, 181,  1)",
                "rgba(38, 166, 154, 1)",
                "rgba(120, 144, 156,1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255,1)",
                "rgba(255, 112, 67, 1)",
                "rgba(171, 71, 188, 1)",
              ],
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.log("Error al recibir los datos", error);
      }
    });
  }, []);

  return <Doughnut data={chartData}></Doughnut>;
}
