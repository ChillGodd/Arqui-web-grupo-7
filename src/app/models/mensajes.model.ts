import { User } from "./user.model";

export class Mensajes {
    idMensaje: number = 0;
    Contenido: string = '';
    Fecha: Date = new Date();
    Leido: boolean=false;
    user:User=new User();

  }
  