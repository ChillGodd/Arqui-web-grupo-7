import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Notificaciones } from '../models/notificaciones.model';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  private url = `${base_url}/notificaciones`;
  private listaCambio = new Subject<Notificaciones[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Notificaciones[]>(this.url);
  }

  insert(notificaciones: Notificaciones) {
    return this.http.post(this.url, notificaciones);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Notificaciones[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Notificaciones>(`${this.url}/${id}`);
  }

  update(notificaciones: Notificaciones, id: number) {
    return this.http.put(`${this.url}/${id}`, notificaciones);
  }

  
}
