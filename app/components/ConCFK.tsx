import React from "react";
import { ValorIngresado } from "../modelos/ValorIngresado";

export default function ConversionCFK(props: ValorIngresado) {
  const valorInicial = props.valorI;
  const fahrenheitT = (valorInicial * 9) / 5 + 32;
  const kelvinT = valorInicial + 273.15;

  return (
    <div>
      Valor en Celsius: {valorInicial}
      <div>
        Celsius a Farenheit: {valorInicial} °C = {fahrenheitT} °F
      </div>
      <div>
        {" "}
        Celsius a Kelvin: {valorInicial} °C = {kelvinT} K
      </div>
    </div>
  );
}
