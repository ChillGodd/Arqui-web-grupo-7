import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../../services/proyectos.service';
import { Proyecto } from '../../../models/proyectos.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-encontrarproyectomascaro',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule],
  templateUrl: './encontrarproyectomascaro.component.html',
  styleUrls: ['./encontrarproyectomascaro.component.css'],
})
export class EncontrarproyectomascaroComponent implements OnInit {
  proyectoConMayorCosto: Proyecto | null = null;
  proyectosConMayorPresupuesto: Proyecto[] = [];
  presupuesto: string = '';
  loadingMayorCosto: boolean = false;
  loadingPresupuesto: boolean = false;
  displayedColumns: string[] = ['nombre', 'descripcion', 'fechaInicio', 'fechaFin', 'presupuesto', 'usuario'];

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {}

  getProyectoConMayorCosto() {
    this.loadingMayorCosto = true;
    this.proyectosService.getProyectomascaro().subscribe(
      (data) => {
        this.proyectoConMayorCosto = data;
        this.loadingMayorCosto = false;
      },
      (error) => {
        console.error('Error al obtener el proyecto con mayor costo', error);
        this.loadingMayorCosto = false;
      }
    );
  }

  getProyectosConMayorPresupuesto() {
    this.loadingPresupuesto = true;
    this.proyectosService
      .getProyectosConMayorPresupuesto(this.presupuesto)
      .subscribe(
        (data) => {
          this.proyectosConMayorPresupuesto = data.filter(
            (proyecto) => proyecto.presupuesto > parseFloat(this.presupuesto)
          );
          this.loadingPresupuesto = false;
        },
        (error) => {
          console.error(
            'Error al obtener proyectos con mayor presupuesto',
            error
          );
          this.loadingPresupuesto = false;
        }
      );
  }
}
