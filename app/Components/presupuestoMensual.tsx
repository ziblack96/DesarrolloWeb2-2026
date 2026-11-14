import React from "react";
import { useContextPM } from "../Providers/ProviderPM";

export default function PresupuestoMensual() {
  const { presupuestoMensual, limite, guardarPresupuesto } = useContextPM();

  return (
    <div>
      <div>
        <h1>Presupuesto Mensual</h1>
        <input
          type="text"
          name="nombre"
          value={` ${presupuestoMensual > limite ? 'message: "Presupuesto mayor al limite' : presupuestoMensual > limite * 0.8 ? 'message: "Ha alcanzado el 80% del presupuesto' : ""}`}
        />
        <button type="button" onClick={guardarPresupuesto}>
          Guardar Presupuesto
        </button>
      </div>
    </div>
  );
}
