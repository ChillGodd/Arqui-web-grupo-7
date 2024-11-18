import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tareas } from '../models/tareas.model';
import { Observable, Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private url = `${base_url}/tareas`;
  private listaCambio = new Subject<Tareas[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Tareas[]>(this.url);
  }
  insert(tareas: Tareas) {
    return this.http.post(this.url, tareas);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Tareas[]) {
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id: number) {
    return this.http.get<Tareas>(`${this.url}/${id}`);
  }
  update(tareas: Tareas, id: number) {
    return this.http.put(`${this.url}/${id}`, tareas);
  }
  getTareasByProyecto(idProyecto: number) {
    return this.http.get<Tareas[]>(`${this.url}/proyecto/${idProyecto}`);
  }
  
  getCantidadTareasCumplidas() {
    return this.http.get<number>(`${this.url}/cumplidas`);
  }
  getCantidadTareasnoCumplidas() {
    return this.http.get<number>(`${this.url}/pendientes`);
  }

  getTareasPendientes(): Observable<Tareas[]> {
    return this.http.get<Tareas[]>(`${this.url}/pendientes/detalles`);
  }
}
