import { useContext, useState } from "react";
import { Props } from "../Modelos/ViewReact";
import { ContextPM } from "../Contexts/ContextPM";

export default function ProviderPM({ children }: Props) {
  const [presupuestoMensual, setpresupuestoMensual] = useState<number>(0);

  const [limite, setLimite] = useState<number>(0);

  const guardarPresupuesto = () => {
    const almostlimit = presupuestoMensual * 0.8;

    if (presupuestoMensual === almostlimit) {
      alert("Ha alcanzado el 80% del presupuesto");
    } else if (presupuestoMensual > limite) {
      alert("Ha superado el limite establecido de tu limite");
    } else {
      setpresupuestoMensual(presupuestoMensual);
    }
  };

  async function obtenerProductos() {
    try {
      const res = await fetch("http://localhost:5000/gasto");
      const data = res.json();
    } catch (error) {
      alert("Ocurrio un error al intentar obtener el registro de gastos");
    }
  }

  return (
    <ContextPM.Provider
      value={{ presupuestoMensual, limite, guardarPresupuesto }}
    >
      {children}
    </ContextPM.Provider>
  );
}

export function useContextPM() {
  return useContext(ContextPM);
}
