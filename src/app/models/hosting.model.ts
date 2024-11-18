import { Proyecto } from "./proyectos.model";

export class Hosting {
    idHosting: number = 0;
    tipo: string = '';
    url: string = '';
    fechaAdquisicion: Date = new Date();
    fechaExpiracion: Date = new Date();
    proyecto: Proyecto = new Proyecto();
}
