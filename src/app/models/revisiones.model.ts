import { Proyecto } from "./proyectos.model";

export class Revisiones {
    idRevision: number=0
    comentario: string=''
    puntuacion: number=0
    fecha: Date = new Date()
    proyecto:Proyecto=new Proyecto()
}