import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarrevisionesComponent } from '../revisiones/listarrevisiones/listarrevisiones.component'
import { ListarproyectosComponent } from "../proyectos/listarproyectos/listarproyectos.component";

@Component({
  selector: 'app-revisiones',
  standalone: true,
  imports: [RouterOutlet, ListarrevisionesComponent],
  templateUrl: './revisiones.component.html',
  styleUrl: './revisiones.component.css'
})
export class RevisionesComponent implements OnInit {
  constructor(public route:ActivatedRoute) {}
  ngOnInit(): void{}
}
