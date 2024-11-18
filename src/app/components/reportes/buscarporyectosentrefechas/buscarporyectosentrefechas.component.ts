import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../../services/proyectos.service';
import { Proyecto } from '../../../models/proyectos.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-buscarporyectosentrefechas',
  standalone: true,
  imports: [FormsModule,CommonModule,MatCardModule,MatIconModule,MatPaginatorModule],
  templateUrl: './buscarporyectosentrefechas.component.html',
  styleUrl: './buscarporyectosentrefechas.component.css'
})
export class BuscarporyectosentrefechasComponent implements OnInit{
  proyectos: Proyecto[] = []; // Lista de proyectos obtenidos
  fechaInicio: string = '';   // Fecha de inicio seleccionada por el usuario
  fechaFin: string = '';      // Fecha de fin seleccionada por el usuario
  mensajeError: string = '';  // Para mostrar errores si ocurren

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {}

  buscarProyectosPorFechas(): void {
    if (!this.fechaInicio || !this.fechaFin) {
      this.mensajeError = 'Por favor, selecciona ambas fechas.';
      return;
    }

    this.proyectosService.buscarPorFechas(this.fechaInicio, this.fechaFin).subscribe(
      (data) => {
        this.proyectos = data;
        this.mensajeError = ''; 
      },
      
    );
  }

}
