import { useContext } from "react";
import { ContextUsuario } from "../Contexts/ContextUsuario";
import { Props } from "../Modelos/ViewReact";

export default function ProviderUsuario({ children }: Props) {
  const usuarioValido = {
    usuario: "admin",
    clave: "admin123",
  };

  const validarUsuario = (usuario: string, clave: string) => {
    if (usuario === usuarioValido.usuario && clave === usuarioValido.clave) {
      alert("Valores Ingresados Correctamente");
    } else {
      console.log("Hubo un problema con el usuario ingresado");
    }
  };

  return (
    <ContextUsuario.Provider value={{ validarUsuario }}>
      {children}
    </ContextUsuario.Provider>
  );
}
export function useContextUsuario() {
  return useContext(ContextUsuario);
}
