"use client";

import { useState } from "react";
import { useContextUsuario } from "../Providers/ProviderUsuario";

export default function UsuarioLogin() {
  const { validarUsuario } = useContextUsuario();
  const [usuario, setusuario] = useState("");
  const [clave, setclave] = useState("");

  return (
    <div className="w-full bg-gray-200 min-h-screen justify-center items-center flex">
      <div className="flex flex-col justify-center items-center gap-2 bg-gray-200 rounded-lg ">
        <h1 className="font-bold text-2xl text-center">
          Mis Gastos / Inicio de Sesion
        </h1>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setusuario(e.target.value)}
          placeholder="Usuario"
          className="text-black rounded-lg w-full ring-2 ring-emerald-200"
        />
        <input
          type="password"
          value={clave}
          onChange={(e) => setclave(e.target.value)}
          placeholder="Contraseña"
          className="text-black rounded-lg w-full ring-2 ring-emerald-200"
        />
        <button
          type="button"
          onClick={() => validarUsuario(usuario, clave)}
          className="bg-blue-400 py-3  text-white rounded-lg w-full"
        >
          Iniciar Sesion
        </button>
      </div>
    </div>
  );
}
