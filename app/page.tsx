import ConversionCFK from "./components/ConCFK";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Conversion de Temperatura:</h1>
      <ConversionCFK valorI={10}></ConversionCFK>
    </div>
  );
}
