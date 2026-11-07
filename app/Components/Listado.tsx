import { useState } from "react";

import { useContextTrivia } from "../ProviderTrivia/ProviderTrivia";
import { Preguntas } from "../Modelos/Preguntas";

export default function Listado(listaPreguntas: Preguntas) {
  const { preguntaActual, guardarPuntajeActual, estadopreguntaActual } =
    useContextTrivia();

  return (
    <div className="card">
      <div>{listaPreguntas.idPreguntas}</div>
      <p>{listaPreguntas.DescripcionPregunta}</p>
      <div>
        <p>Opcion 1: Tegucigalpa{listaPreguntas.opcion1Respuesta}</p>
        <p>Opcion 2: San Pedro Sula{listaPreguntas.opcion1Respuesta}</p>

        <button type="button" onClick={() => guardarPuntajeActual}>
          Guardar Pregunta
        </button>
        <p>Respuesta Correcta: {listaPreguntas.respuestaCorrecta}</p>
      </div>
      <p>Puntaje Actual: {listaPreguntas.puntajePregunta}</p>
      <button type="button" onClick={() => estadopreguntaActual}>
        Siguiente Pregunta
      </button>
    </div>
  );
}
