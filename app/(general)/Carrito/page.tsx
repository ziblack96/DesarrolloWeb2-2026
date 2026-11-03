"use client";
import CardProducto from "@/app/Components/CardProducto";
import EliminarBCarrito from "@/app/Components/EliminarBCarrito";
import { Producto } from "@/app/modelos/Producto";
import { useContextProducto } from "@/app/Provider/ProviderProducto";

export default function page() {
  const { carritoProducto } = useContextProducto();

  return (
    <>
      <h3>Lista de Productos:</h3>
      <p>Total productos :{carritoProducto.length}</p>
      {carritoProducto.map((nuevoproducto: Producto) => (
        <CardProducto key={nuevoproducto.idProducto} producto={nuevoproducto}>
          <EliminarBCarrito producto={nuevoproducto}></EliminarBCarrito>
        </CardProducto>
      ))}
    </>
  );
}
