import { createContext } from "react";
import { Preguntas } from "../Modelos/Preguntas";

export const ContextTrivia = createContext({
  listaPreguntas: [] as Preguntas[],
  preguntaActual: [] as Preguntas[],
  guardarPuntajeActual: (respuestaCorrecta: number) => {},
  estadopreguntaActual: (listaPreguntas: Preguntas) => {},
  guardarpreguntasRespondidas: (preguntaRespondida: number) => {},
  IncrementoPuntaje: (puntaje: number) => {},
});
