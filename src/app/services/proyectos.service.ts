import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Proyecto } from '../models/proyectos.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private url = `${base_url}/proyectos`;
  private listaCambio = new Subject<Proyecto[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Proyecto[]>(this.url);
  }

  insert(proyecto: Proyecto) {
    return this.http.post(this.url, proyecto);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Proyecto[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }

  update(proyecto: Proyecto, id: number) {
    return this.http.put(`${this.url}/${id}`, proyecto);
  }

  getProyectomascaro(): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.url}/mayorCosto`);
  }

  getProyectosConMayorPresupuesto(presupuesto: string): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.url}/presupuesto?presupuesto=${presupuesto}`);
  }
  buscarPorFechas(fechaInicio: string, fechaFin: string): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.url}/buscarPorFechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }
}
