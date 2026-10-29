import ProviderIdioma from "@/Providers/ProviderIdioma";
import { ButtonEspanol } from "./components/ButtonEspanol";
import { ButtonIngles } from "./components/ButtonIngles";
import { MostrarIdioma } from "./components/MostrarIdioma";

export default function Home() {
  // "flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans"
  return (
    <div className="flex flex-column">
      <h3>Cambiar el Idioma de las siguientes palabras: </h3>
      <div>
        <ProviderIdioma>
          <ButtonEspanol />
          <ButtonIngles />
          <MostrarIdioma />
        </ProviderIdioma>
      </div>
    </div>
  );
}
