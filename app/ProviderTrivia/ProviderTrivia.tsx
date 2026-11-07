import { useContext, useEffect, useState } from "react";
import { Preguntas } from "../Modelos/Preguntas";
import { Props } from "../Modelos/viewReact";
import { ContextTrivia } from "../ContextTrivia/ContextTrivia";

export default function Layout({ children }: Props) {

  const [listaPreguntas, setlistaPreguntas] = useState<Preguntas[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setlistaPreguntas([
      {
        idPreguntas: 1,
        DescripcionPregunta: "Cual es la Capital de Honduras",
        opcion1Respuesta: true,
        opcion2Respuesta: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPreguntas: 2,
        DescripcionPregunta: "Cual es la Capital de Guatemala",
        opcion1Respuesta: false,
        opcion2Respuesta: true,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPreguntas: 3,
        DescripcionPregunta: "Cual es la Capital de Costa Rica",
        opcion1Respuesta: true,
        opcion2Respuesta: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPreguntas: 4,
        DescripcionPregunta: "Cual es la Capital de Nicaragua",
        opcion1Respuesta: false,
        opcion2Respuesta: true,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPreguntas: 5,
        DescripcionPregunta: "Cual es la Capital de Panama",
        opcion1Respuesta: true,
        opcion2Respuesta: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
    ]);
  }, []);

    const [preguntaActual, setpreguntaActual] = useState<Preguntas[]>([]);

    const [puntajeAcumulado, setpuntajeAcumulado] = useState<number[]>([]);
  
    const [preguntasRespondidas, setpreguntasRespondidas] = useState<number[]>([]);

  function estadopreguntaActual(listaPreguntas: Preguntas){
    console.log('Pregunta Actual');
    setpreguntaActual([...preguntaActual,listaPreguntas]);
  };

  function guardarPreguntaActual(respuestaCorrecta:number) {
    console.log(respuestaCorrecta);
    setpuntajeAcumulado([...puntajeAcumulado]);
  }

  function guardarpreguntasRespondidas(preguntaRespondida:number){
    console.log(preguntaRespondida);
    setpreguntasRespondidas([...preguntasRespondidas]);
  }

  function IncrementoPuntaje(){
    console.log("Puntaje Incrementado");
    
  }


  return (
    <ContextTrivia.Provider
      value={{
        listaPreguntas,
        preguntaActual,
        guardarPreguntaActual,
        guardarpreguntasRespondidas,
        IncrementoPuntaje,
      }}
    >
      {children}
    </ContextTrivia.Provider>
  );
}

export function useContextTrivia() {
  return useContext(ContextTrivia);
}
