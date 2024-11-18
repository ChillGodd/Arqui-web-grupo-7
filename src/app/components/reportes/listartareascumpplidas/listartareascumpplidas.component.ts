import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartDataset,
  ChartOptions,
  ChartType,
  registerables,
} from 'chart.js';
import { TareasService } from '../../../services/tareas.service';

Chart.register(...registerables);

@Component({
  selector: 'app-listartareascumpplidas',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './listartareascumpplidas.component.html',
  styleUrls: ['./listartareascumpplidas.component.css'],
})
export class ListartareascumpplidasComponent implements OnInit {
  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Posición de la leyenda
      },
    },
  };
  pieChartLabels: string[] = ['Cumplidas', 'Pendientes']; // Etiquetas para el gráfico
  pieChartType: ChartType = 'pie'; // Tipo de gráfico: pie
  pieChartLegend = true; // Mostrar leyenda
  pieChartData: number[] = [0, 0]; // Datos para el gráfico (inicialmente 0)

  cantidadTareasCumplidas: number = 0;
  cantidadTareasPendientes: number = 0;

  constructor(private tareaService: TareasService) {}

  ngOnInit(): void {
    this.loadTareasCumplidas();
    this.loadTareasPendientes();
  }

  loadTareasCumplidas() {
    this.tareaService.getCantidadTareasCumplidas().subscribe(
      (response) => {
        console.log('Tareas Cumplidas:', response);
        this.cantidadTareasCumplidas = response;
        this.updateChartData(); // Actualiza los datos del gráfico
      },
      (error) => {
        console.error('Error cargando tareas cumplidas', error);
      }
    );
  }

  loadTareasPendientes() {
    this.tareaService.getCantidadTareasnoCumplidas().subscribe(
      (response) => {
        console.log('Tareas Pendientes:', response);
        this.cantidadTareasPendientes = response;
        this.updateChartData(); // Actualiza los datos del gráfico
      },
      (error) => {
        console.error('Error cargando tareas pendientes', error);
      }
    );
  }

  updateChartData() {
    this.pieChartData = [
      this.cantidadTareasCumplidas,
      this.cantidadTareasPendientes,
    ];
  }
}
