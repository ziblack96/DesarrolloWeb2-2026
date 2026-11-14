"use client";
import { createContext } from "react";

export const ContextPM = createContext({
  presupuestoMensual: 0,
  limite: 0,
  guardarPresupuesto: () => {},
});
