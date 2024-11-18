import { Roles } from "./roles.model";

export class User {
  idUser: number = 0;            
  nombreUser: string = '';      
  contrasenia: string = '';       
  fecha: Date = new Date(); 
  enabled:boolean=false;     
  rol: Roles = new Roles();         
}