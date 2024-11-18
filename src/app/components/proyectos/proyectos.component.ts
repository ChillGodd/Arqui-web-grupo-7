<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarproyectosComponent } from './listarproyectos/listarproyectos.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
=======
import { Component } from '@angular/core';
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-proyectos',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,ListarproyectosComponent,MatPaginator,MatPaginatorModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
    
  }
}
=======
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
