"use client";
import React, { useEffect, useState } from "react";
import { Tareas } from "../models/tareas";

export type estado = "Pendiente" | "En Proceso" | "Completado";

export default function FormularioTareas() {
  // const [id, setId] = useState<number>(0);
  const [titulo, setTitulo] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [listaTareas, setlistaTareas] = useState<Tareas[]>([]);
  const [estadoActual, setestadoActual] = useState<estado>("Pendiente");

  function AgregarTareas() {
    const tareas: Tareas = {
      id: Date.now(),
      titulo: titulo,
      descripcion: descripcion,
      estado: estadoActual,
    };

    setlistaTareas([...listaTareas, tareas]);
    console.log({ listaTareas });
  }

  useEffect(() => {
    console.log(listaTareas);
  }, [listaTareas]);

  const cambiarEstado = (tipoEstado: estado) => {
    setestadoActual(tipoEstado);
  };

  return (
    <div className="flex flex-column">
      <h1 className="title">Agregar Tareas:</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Tarea de Desarrollo Web 2: "
          className="form-control"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />{" "}
        <br />
        <textarea
          placeholder="Realizar tarea de TO-DO-LIST: "
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <br />
        <button
          type="button"
          className="btn btn-success"
          onClick={AgregarTareas}
        >
          Guardar
        </button>
        <table className="table table-hover mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {listaTareas.map((tarea: Tareas) => (
              <tr key={tarea.id}>
                <td>{tarea.id}</td>
                <td>{tarea.titulo}</td>
                <td>{tarea.descripcion}</td>
                <td>
                  <div className="flex gap-2">
                    {/* Button para Estado Pendiente */}
                    <button
                      type="button"
                      onClick={() => cambiarEstado("Pendiente")}
                      className={`btn btn-primary 
                      ${
                        estadoActual === "Pendiente"
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-gray-50 text-black hover:bg-gray-100"
                      }`}
                    >
                      Pendiente
                    </button>

                    {/* Button para Estado en Proceso */}
                    <button
                      type="button"
                      onClick={() => cambiarEstado("En Proceso")}
                      className={`btn btn-primary 
                      ${
                        estadoActual === "En Proceso"
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-gray-50 text-black hover:bg-gray-100"
                      }`}
                    >
                      En Proceso
                    </button>

                    {/* Button para Estado Completado */}
                    <button
                      type="button"
                      onClick={() => cambiarEstado("Completado")}
                      className={`btn btn-primary 
                      ${
                        estadoActual === "Completado"
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-gray-50 text-black hover:bg-gray-100"
                      }`}
                    >
                      Completado
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
