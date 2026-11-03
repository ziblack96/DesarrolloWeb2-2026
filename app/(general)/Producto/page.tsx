"use client";
import AgregarBCarrito from "@/app/Components/AgregarBCarrito";
import CardProducto from "@/app/Components/CardProducto";
import { Producto } from "@/app/modelos/Producto";
import { useContextProducto } from "@/app/Provider/ProviderProducto";

export default function Page() {
  const { productos } = useContextProducto();

  return (
    <>
      <h3>Lista de Productos:</h3>
      <p>Total productos :{productos.length}</p>
      {productos.map((nuevoproducto: Producto) => (
        <CardProducto key={nuevoproducto.idProducto} producto={nuevoproducto}>
          <AgregarBCarrito producto={nuevoproducto}></AgregarBCarrito>
        </CardProducto>
      ))}
    </>
  );
}
