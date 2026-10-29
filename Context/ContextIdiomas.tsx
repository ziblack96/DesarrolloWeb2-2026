import { Idiomas } from "@/Modelos/Idiomas";
import { createContext } from "react";

// Se limita la cantidad de Idiomas
export type Lenguaje = "Español" | "Ingles";

// Definir la estructura que se va a utilizar al usar el useContext
type IdiomaContext = {
  lenguaje: Lenguaje;
  traducciones: Idiomas[];
  setcambiarIdioma: (lenguaje: Lenguaje) => void;
};

// Darle un valor inicial al createContext
const ContextIdiomas = createContext<IdiomaContext>({
  lenguaje: "Español",
  traducciones: [],
  setcambiarIdioma: () => {},
});

// Se export el objeto para usarlo en otros archivos.
export default ContextIdiomas;
