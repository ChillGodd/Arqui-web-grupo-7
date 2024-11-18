import { Component, OnInit } from '@angular/core';
import { ListarNotificacionesComponent } from './listarnotificaciones/listarnotificaciones.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [ListarNotificacionesComponent,RouterOutlet,MatPaginatorModule,MatPaginator,],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css',
})
export class NotificacionesComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}
