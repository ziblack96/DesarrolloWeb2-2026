"use client";

import ContextIdiomas, { Lenguaje } from "@/Context/ContextIdiomas";
import { ViewReact } from "@/Modelos/ViewReact";
import { useContext, useState } from "react";
import data from "../shared/data.json";

export default function CambioIdioma(props: ViewReact) {
  const [lenguaje, setcambiarIdioma] = useState<Lenguaje>("Español");

  return (
    <ContextIdiomas.Provider
      value={{ lenguaje, traducciones: data, setcambiarIdioma }}
    >
      {props.children}
    </ContextIdiomas.Provider>
  );
}

export const useIdiomas = () => useContext(ContextIdiomas);
