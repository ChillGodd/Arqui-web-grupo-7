import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Revisiones } from '../models/revisiones.model'

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class RevisionesService{
    private url = `${base_url}/revisiones`;
    private listaCambio = new Subject<Revisiones[]>

    constructor(private http: HttpClient) {}

    list(){
        return this.http.get<Revisiones[]>(this.url);
    }
    insert(revisiones:Revisiones){
        return this.http.post(this.url,revisiones);
    }
    getList(){
        return this.listaCambio.asObservable();
    }
    setList(listaNueva:Revisiones[]){
        this.listaCambio.next(listaNueva);
    }
    delete(id:number){
        return this.http.delete(`${this.url}/${id}`);
    }
    listaId(id:number){
        return this.http.get<Revisiones>(`${this.url}/${id}`);
    }
    update(revisiones: Revisiones, id:number){
        return this.http.put(`${this.url}/${id}`, revisiones);
    }
    getRevisionesPorProyecto(idProyecto: number) {
        return this.http.get<Revisiones[]>(`${this.url}/proyecto/${idProyecto}/revisiones`);
    }
}