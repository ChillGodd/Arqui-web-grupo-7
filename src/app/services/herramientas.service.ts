import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Herramientas } from '../models/herramientas.model';
<<<<<<< HEAD
import { Observable, Subject,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const base_url = environment.base;

=======
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



const base_url = environment.base;
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
@Injectable({
  providedIn: 'root'
})
export class HerramientasService {
<<<<<<< HEAD
  private url = `${base_url}/herramientas`;
=======

  private url = `${base_url}/mensajes`;
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
  private listaCambio=new Subject<Herramientas[]>()

  constructor(private http: HttpClient) {}

  list() {
<<<<<<< HEAD
    return this.http.get<Herramientas[]>(this.url)
    ;
=======
    return this.http.get<Herramientas[]>(this.url);
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
  }
  insert(herramientas:Herramientas){
    return this.http.post(this.url,herramientas);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  setList(listaNueva:Herramientas[]){
    this.listaCambio.next(listaNueva)
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id:number){
    return this.http.get<Herramientas>(`${this.url}/${id}`);
  }
  update(herramientas: Herramientas, id: number){
    return this.http.put(`${this.url}/${id}`, herramientas);
  }
<<<<<<< HEAD

  buscarPorNombre(nombre: string): Observable<Herramientas[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<Herramientas[]>(`${this.url}/buscar?nombre=${nombre}`);
  }
}
=======
}
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
