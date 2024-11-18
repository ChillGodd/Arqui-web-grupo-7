import { User } from './user.model';

export class Proyecto {
  idProyecto: number = 0;          
  nombre: string = '';              
  descripcion: string = '';        
  estado: boolean=false;              
  fechaInicio: Date = new Date();   
  fechaFin: Date = new Date();  
  presupuesto: number = 0;          
  user: User = new User();               
}