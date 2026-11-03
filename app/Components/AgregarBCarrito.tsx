"use client";

import { useContextProducto } from "../Provider/ProviderProducto";
import { Producto } from "../modelos/Producto";

interface agregarProductosProps {
  producto: Producto;
}

export default function AgregarBCarrito({ producto }: agregarProductosProps) {
  const { agregarCarrito } = useContextProducto();
  return (
    <div>
      <button
        className="btn btn-info btn-sm mx-2"
        onClick={() => agregarCarrito(producto)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}
