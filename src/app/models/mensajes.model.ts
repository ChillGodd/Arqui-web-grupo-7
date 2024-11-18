import { User } from "./user.model";

export class Mensajes {
  idMensaje: number = 0;
  contenido: string = '';
  fecha: Date = new Date();
  leido: boolean = false;
  user: User = new User();
} 

