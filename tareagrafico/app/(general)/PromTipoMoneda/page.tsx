/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { fetchPromedioTipoMoneda } from "@/app/Servicios/api";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
//   -- 7. Calcular el valor promedio de los productos por cada tipo de moneda(valueCurrency) --
// SELECT valueCurrency as "Tipo de Moneda", ROUND(AVG(value),2) as "Valor Promedio"
// from productos
// Group By valueCurrency;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export default function Page() {
  const [chartData, setchartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        data: [] as string[],
        backgroundColor: [] as any,
      },
    ],
  });

  useEffect(() => {
    fetchPromedioTipoMoneda().then((data) => {
      try {
        console.log(data);
        const labels = data.map((item: any) => item.valueCurrency);
        const valorpromedio = data.map((item: any) =>
          Number(item["Valor Promedio"]),
        );

        setchartData({
          labels: labels,
          datasets: [
            {
              data: valorpromedio,
              backgroundColor: ["rgba(255, 99, 132, 0.5)"],
            },
          ],
        });
      } catch (error) {
        console.log("Error al recibir los datos", error);
      }
    });
  }, []);

  return <Bar options={options} data={chartData}></Bar>;
}
