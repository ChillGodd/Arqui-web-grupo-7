import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProyectosService } from '../../../services/proyectos.service'; // Ajusta la ruta según tu estructura
import { Proyecto } from '../../../models/proyectos.model'; // Ajusta la ruta según tu estructura
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { TareasService } from '../../../services/tareas.service';
import { Tareas } from '../../../models/tareas.model';
import { RevisionesService } from '../../../services/revisiones.service';



@Component({
  selector: 'app-listarproyectos',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, MatPaginatorModule,CommonModule,MatCardModule],
  templateUrl: './listarproyectos.component.html',
  styleUrls: ['./listarproyectos.component.css']
})
export class ListarproyectosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['proyectoID', 'nombre', 'descripcion', 'fechaInicio', 'fechaTermina', 'presupuesto', 'user', 'accion01'];
  dataSource: MatTableDataSource<Proyecto> = new MatTableDataSource();
  tareas: Tareas[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private proyectosService: ProyectosService,
    private router: Router,
    private tareasService: TareasService,
    private revisionesService: RevisionesService // Inyectar el servicio de revisiones
  ) {}

  ngOnInit(): void {
    this.proyectosService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.proyectosService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  cargarTareasDeProyecto(idProyecto: number): void {
    this.tareasService.getTareasByProyecto(idProyecto).subscribe({
      next: (data) => {
        this.tareas = data; // Guarda las tareas en la lista
      },
    });
    // Redirigir a la vista de tareas para el proyecto
    this.router.navigate([`/proyectos/${idProyecto}/tareas`]);
  }

  verRevisiones(idProyecto: number): void {
    // Redirigir a la vista de revisiones para el proyecto
    this.router.navigate([`/proyectos/${idProyecto}/revisiones`]);
  }

  eliminar(id: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este proyecto?');
    if (confirmacion) {
      this.proyectosService.delete(id).subscribe(() => {
        this.proyectosService.list().subscribe((data) => {
          this.proyectosService.setList(data);
        });
      });
    }
  }
}