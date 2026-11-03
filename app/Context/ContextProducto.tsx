import { createContext } from "react";
import { Producto } from "../modelos/Producto";

export const ContextProducto = createContext({
  productos: [] as Producto[],
  carritoProducto: [] as Producto[],
  agregarCarrito: (producto: Producto) => {},
  eliminarCarrito: (idProducto: number) => {},
});
