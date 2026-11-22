"use client";

// -- 12. Calcular el valor total de productos en cada brandCode: --
// Select brand_Code as "Codigo de marca",SUM(value) as "Valor Total"
// from productos
// Group By brand_Code;

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchPromedioCodigoMarca } from "@/app/Servicios/api";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

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
    fetchPromedioCodigoMarca().then((data) => {
      try {
        console.log(data);
        const labels = data.map((item: any) => item.brand_code);
        const valorpromedio = data.map((item: any) =>
          Number(item["Valor Total"]),
        );

        setchartData({
          labels: labels,
          datasets: [
            {
              data: valorpromedio,
              backgroundColor: ["rgba(255,99,132, 0.2)"],
            },
          ],
        });
      } catch (error) {
        console.log("Error al recibir datos", error);
      }
    });
  }, []);

  return <Bar data={chartData}></Bar>;
}
