import type{ estado} from '../components/formularioTareas';

export interface Tareas {
    id: number;
    titulo: string;
    descripcion:string;
    estado:estado;
}