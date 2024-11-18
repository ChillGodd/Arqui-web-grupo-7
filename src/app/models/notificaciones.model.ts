import { User } from "./user.model";

export class Notificaciones {
    idNotificacion: number = 0;
    fechaNotificacion: Date = new Date();
    mensaje: string = '';
    tipoNotificacion: string = '';
    user: User = new User();
}