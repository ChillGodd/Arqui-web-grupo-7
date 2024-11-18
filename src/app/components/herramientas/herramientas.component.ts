import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaruserComponent } from '../user/listaruser/listaruser.component';
import { ListarproyectosComponent } from "../proyectos/listarproyectos/listarproyectos.component";
<<<<<<< HEAD
import { ListarherramientasComponent } from "./listarherramientas/listarherramientas.component";
=======
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-herramientas',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, ListarproyectosComponent, ListarherramientasComponent],
=======
  imports: [RouterOutlet, ListarproyectosComponent],
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css'
})
export class HerramientasComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
<<<<<<< HEAD
}
=======
}
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
