import { useContext, useState } from "react";
import { Plantilla } from "../modelos/Plantilla";
import { Producto } from "../modelos/Producto";
import { ContextProducto } from "../Context/ContextProducto";

export default function ProviderProducto({ children }: Plantilla) {
  const [productos, setProducto] = useState<Producto[]>([
    {
      idProducto: 1,
      nombreProducto: "papas",
      precioProducto: 10,
      isvProducto: 2,
      imgProducto: "img/out-of-stock.png",
    },
    {
      idProducto: 2,
      nombreProducto: "arroz",
      precioProducto: 80,
      isvProducto: 20,
      imgProducto: "img/out-of-stock.png",
    },
    {
      idProducto: 3,
      nombreProducto: "Manzanas",
      precioProducto: 15,
      isvProducto: 4,
      imgProducto: "img/out-of-stock.png",
    },
    {
      idProducto: 4,
      nombreProducto: "uvas",
      precioProducto: 90,
      isvProducto: 7,
      imgProducto: "img/out-of-stock.png",
    },
    {
      idProducto: 5,
      nombreProducto: "zanahorias",
      precioProducto: 67,
      isvProducto: 6,
      imgProducto: "img/out-of-stock.png",
    },
  ]);

  const [carritoProducto, setCarritoProducto] = useState<Producto[]>([]);

  function agregarCarrito(producto: Producto) {
    alert("Producto Agregado al carrito");
    setCarritoProducto([...carritoProducto, producto]);
  }

  function eliminarCarrito(idProductoEliminar: number) {
    const nuevalistaCarrito = carritoProducto.filter(
      (producto) => producto.idProducto !== idProductoEliminar,
    );
    setCarritoProducto(nuevalistaCarrito);
  }

  return (
    <ContextProducto.Provider
      value={{ productos, carritoProducto, agregarCarrito, eliminarCarrito }}
    >
      {children}
    </ContextProducto.Provider>
  );
}

export function useContextProducto() {
  return useContext(ContextProducto);
}
