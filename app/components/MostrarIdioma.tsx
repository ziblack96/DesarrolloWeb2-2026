"use client";

import ContextIdiomas from "@/Context/ContextIdiomas";
import { useContext, useEffect } from "react";

export const MostrarIdioma = () => {
  const { lenguaje, traducciones, setcambiarIdioma } =
    useContext(ContextIdiomas);

  useEffect(() => {
    console.log("Se actualiza el Idioma");
  }, [setcambiarIdioma]);

  return (
    <div>
      <h3>Mostrar Idioma: {lenguaje} </h3>
      <div className="text-xl">
        {traducciones.map((traduccion, index) => (
          <div key={index}>
            {lenguaje === "Español" ? traduccion.es : traduccion.en}
          </div>
        ))}
      </div>
    </div>
  );
};
