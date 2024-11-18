import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Roles } from '../models/roles.model';
import { Observable, Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private url = `${base_url}/Roles`;
  private listaCambio=new Subject<Roles[]>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Roles[]>(this.url);
  }
  insert(rol:Roles){
    return this.http.post(this.url,rol);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  setList(listaNueva:Roles[]){
    this.listaCambio.next(listaNueva)
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id:number){
    return this.http.get<Roles>(`${this.url}/${id}`);
  }
  buscarPorNombre(nombre: string): Observable<Roles[]> {
    const params = new HttpParams().set('n', nombre);
    return this.http.get<Roles[]>(`${this.url}/busquedas`, { params });
  }
}