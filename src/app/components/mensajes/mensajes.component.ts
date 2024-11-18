import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaruserComponent } from "../user/listaruser/listaruser.component";
<<<<<<< HEAD
import { ListarmensajesComponent } from "./listarmensajes/listarmensajes.component";
=======
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-mensajes',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,  ListarmensajesComponent],
=======
  imports: [RouterOutlet, ListaruserComponent],
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
<<<<<<< HEAD
}
=======
}
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
