import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaruserComponent } from '../user/listaruser/listaruser.component';
import { ListarproyectosComponent } from "../proyectos/listarproyectos/listarproyectos.component";
import { ListarherramientasComponent } from "./listarherramientas/listarherramientas.component";

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [RouterOutlet, ListarproyectosComponent, ListarherramientasComponent],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css'
})
export class HerramientasComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
}