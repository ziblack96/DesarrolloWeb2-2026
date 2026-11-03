"use client";
import { useContext, useState } from "react";
import { Plantilla } from "../modelos/Plantilla";
import { ContextUsuario } from "../Context/ContextUsuario";

export default function ProviderUsuario({ children }: Plantilla) {
  const [nombreUsuario, setNombreUsuario] = useState<string>("");

  return (
    <ContextUsuario.Provider value={{ nombreUsuario, setNombreUsuario }}>
      {children}
    </ContextUsuario.Provider>
  );
}

export const useUsuario = () => useContext(ContextUsuario);
