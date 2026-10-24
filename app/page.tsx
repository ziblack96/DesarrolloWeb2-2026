"use client";
import { Tarjetas } from "./models/tarjetas";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TarjetasPersonas from "./components/tarjetasPresentacion";
import { useEffect, useState } from "react";

export default function Home() {
  const [listadoTarjetas, setlistadoTarjetas] = useState<Tarjetas[]>([]);

  useEffect(() => {
    const listado: Tarjetas[] = [
      {
        nombre: "Cristian Mauricio",
        ocupacion: "Estudiante",
        pais: "Honduras",
      },
      {
        nombre: "Roberto Hernandez",
        ocupacion: "Profesor",
        pais: "El Salvador",
      },
      {
        nombre: "Maria Lopez",
        ocupacion: "Abogada",
        pais: "Mexico",
      },
      {
        nombre: "Sofia Murillo",
        ocupacion: "Arquitecta",
        pais: "Colombia",
      },
      {
        nombre: "Kevin Chavez",
        ocupacion: "Diputado",
        pais: "Nicaragua",
      },
    ];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setlistadoTarjetas(listado);
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {listadoTarjetas.map((tarjeta) => (
        <div key={tarjeta.nombre}>
          <h3>{tarjeta.nombre}</h3>
          <p>{tarjeta.ocupacion}</p>
          <p>{tarjeta.pais}</p>
        </div>
      ))}
    </div>
  );
}
