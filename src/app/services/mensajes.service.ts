import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Mensajes } from '../models/mensajes.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

<<<<<<< HEAD
=======


>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private url = `${base_url}/mensajes`;
  private listaCambio=new Subject<Mensajes[]>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Mensajes[]>(this.url);
  }
  insert(mensajes:Mensajes){
    return this.http.post(this.url,mensajes);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  setList(listaNueva:Mensajes[]){
    this.listaCambio.next(listaNueva)
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id:number){
    return this.http.get<Mensajes>(`${this.url}/${id}`);
  }
  update(mensajes: Mensajes, id: number){
    return this.http.put(`${this.url}/${id}`, mensajes);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
