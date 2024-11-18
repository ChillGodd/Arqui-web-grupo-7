import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Hosting } from '../models/hosting.model';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class HostingService {
  private url = `${base_url}/hosting`;
  private listaCambio = new Subject<Hosting[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Hosting[]>(this.url)
  }

  insert(hosting: Hosting) {
    return this.http.post(this.url, hosting)
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Hosting[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
    
  }

  listId(id: number) {
    return this.http.get<Hosting>(`${this.url}/${id}`)
  }

  update(hosting: Hosting, id: number) {
    return this.http.put(`${this.url}/${id}`, hosting)
    
  }

  
}
