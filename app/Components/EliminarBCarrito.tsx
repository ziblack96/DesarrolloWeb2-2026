"use client";
import { useContextProducto } from "../Provider/ProviderProducto";
import { Producto } from "../modelos/Producto";

interface eliminarCarritoProps {
  producto: Producto;
}

export default function EliminarBCarrito({ producto }: eliminarCarritoProps) {
  const { eliminarCarrito } = useContextProducto();

  return (
    <div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => eliminarCarrito(producto.idProducto)}
      >
        Eliminar
      </button>
    </div>
  );
}
