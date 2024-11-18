import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaruserComponent } from "../user/listaruser/listaruser.component";
import { ListarmensajesComponent } from "./listarmensajes/listarmensajes.component";

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [RouterOutlet,  ListarmensajesComponent],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
}