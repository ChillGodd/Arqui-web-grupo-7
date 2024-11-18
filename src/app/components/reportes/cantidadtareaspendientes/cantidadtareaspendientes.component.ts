import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../../models/tareas.model';
import { TareasService } from '../../../services/tareas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cantidadtareaspendientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cantidadtareaspendientes.component.html',
  styleUrls: ['./cantidadtareaspendientes.component.css']
})
export class CantidadtareaspendientesComponent implements OnInit {
  tareasPendientes: Tareas[] = [];
  totalPendientes: number = 0;
  isLoading = false;
  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.obtenerTareasPendientes();
  }

  obtenerTareasPendientes(): void {
    this.isLoading = true; // Set loading indicator to true

    this.tareasService.getTareasPendientes().subscribe((data: Tareas[]) => {
      this.tareasPendientes = data;
      this.totalPendientes = data.length;
      this.isLoading = false;
    });
  }
}