import { Proyecto } from "./proyectos.model";
export class Tareas {
    idTareas: number = 0;
    nombre: string='';
    descripcion: string ='';
    fechaLimite: string=''; 
    horasEmpleadas: number = 0; 
    estado: boolean = false;   
    proyecto:Proyecto=new Proyecto();
}