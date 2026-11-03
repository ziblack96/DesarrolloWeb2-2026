"use client";
import { Producto } from "../modelos/Producto";

interface productoProps {
  producto: Producto;
  children: React.ReactNode;
}

export default function CardProducto({ producto, children }: productoProps) {
  return (
    <>
      <div className="card">
        <span>{producto.idProducto}</span>
        <h1 className="card-header">{producto.nombreProducto}</h1>
        <section className="card-body">
          <p>Precio Producto - Lps {producto.precioProducto} </p>
          <p>Isv Producto - Lps {producto.isvProducto} </p>
          <img
            className="w-8"
            src={producto.imgProducto}
            alt="Producto del carrito"
          />
        </section>
        <div>{children}</div>
        <div className="card-footer"></div>
      </div>
    </>
  );
}
