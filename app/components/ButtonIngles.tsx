"use client";

import ContextIdiomas from "@/Context/ContextIdiomas";
import { useContext } from "react";

export const ButtonIngles = () => {
  const { lenguaje, setcambiarIdioma } = useContext(ContextIdiomas);

  return (
    <div className="flex flex-row my-2 px-4">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setcambiarIdioma("Ingles")}
        disabled={lenguaje === "Ingles"}
      >
        Cambiar Idioma Ingles
      </button>
    </div>
  );
};
