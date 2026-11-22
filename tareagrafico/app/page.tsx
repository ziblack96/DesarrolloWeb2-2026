import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href="/PromTipoMoneda" className="btn btn-primary">
        7.Promedio de Productos por Tipo de Moneda
      </Link>
      <br />
      <Link href="/PromCodeCategoria" className="btn btn-primary">
        10. Promedio de Productos por Codigo de Categoria
      </Link>
      <br />

      <Link href="/TotalCodigoMarca" className="btn btn-primary">
        12. Valor Total Productos en Codigo de Marca
      </Link>
    </div>
  );
}
