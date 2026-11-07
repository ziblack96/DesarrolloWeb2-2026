import { createContext } from "react";
import { Preguntas } from "../Modelos/Preguntas";

export const ContextTrivia = createContext({
  listaPreguntas: [] as Preguntas[],
  preguntaActual: [] as Preguntas[],
  guardarPreguntaActual: (respuestaCorrecta: number) => {},
  guardarpreguntasRespondidas: (preguntaRespondida: number) => {},
  IncrementoPuntaje: (puntaje: number) => {},
});
