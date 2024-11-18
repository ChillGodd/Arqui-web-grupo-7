import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Herramientas } from '../models/herramientas.model';
import { Observable, Subject,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {
  private url = `${base_url}/herramientas`;
  private listaCambio=new Subject<Herramientas[]>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Herramientas[]>(this.url)
    ;
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

  buscarPorNombre(nombre: string): Observable<Herramientas[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<Herramientas[]>(`${this.url}/buscar?nombre=${nombre}`);
  }
}