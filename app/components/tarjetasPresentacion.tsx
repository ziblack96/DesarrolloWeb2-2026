import { Tarjetas } from "../models/tarjetas";

export default function TarjetasPersonas(tarjeta: Tarjetas) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{tarjeta.nombre}</h3>
        <p>{tarjeta.ocupacion}</p>
      </div>
      <p>{tarjeta.pais}</p>
    </div>
  );
}
