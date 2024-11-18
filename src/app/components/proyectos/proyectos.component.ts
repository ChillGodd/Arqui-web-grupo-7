import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarproyectosComponent } from './listarproyectos/listarproyectos.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterOutlet,ListarproyectosComponent,MatPaginator,MatPaginatorModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
    
  }
}