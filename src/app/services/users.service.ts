import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${base_url}/User`;
  private listaCambio = new Subject<User[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<User[]>(this.url);
  }

  insert(user: User) {
    return this.http.post(this.url, user);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: User[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  update(user: User, id: number) {
    return this.http.put(`${this.url}/${id}`, user);
  }

  buscarPorNombre(nombre: string): Observable<User[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<User[]>(`${this.url}/buscar`, { params });
  }
}