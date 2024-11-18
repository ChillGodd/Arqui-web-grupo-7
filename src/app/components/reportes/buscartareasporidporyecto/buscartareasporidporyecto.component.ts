import { Component, OnInit, ViewChild } from '@angular/core';
import { Tareas } from '../../../models/tareas.model';
import { TareasService } from '../../../services/tareas.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-buscartareasporidporyecto',
  standalone: true,
  imports: [FormsModule,RouterLink ,CommonModule,MatTableModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,],
  templateUrl: './buscartareasporidporyecto.component.html',
  styleUrl: './buscartareasporidporyecto.component.css'
})
export class BuscartareasporidporyectoComponent implements OnInit{
  displayedColumns: string[] = [
    'idTarea',
    'nombre',
    'descripcion',
    'horasEmpleadas',
    'fechaLimite',
    'proyecto',
    'nombreUser',
    'Eliminar',
  ];
  dataSource: MatTableDataSource<Tareas> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  idProyecto!: number;

  constructor(
    private tareasService: TareasService,
    private route: ActivatedRoute // Para obtener el ID del proyecto desde la URL
  ) {}

  ngOnInit() {
    // Captura el ID del proyecto desde la URL
    this.idProyecto = +this.route.snapshot.paramMap.get('idProyecto')!;
    this.cargarTareas();
  }

  cargarTareas() {
    if (this.idProyecto > 0) {
      this.tareasService.getTareasByProyecto(this.idProyecto).subscribe((data) => {
        this.dataSource.data = data;
      });
    } else {
      alert('ID de proyecto no válido');
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  eliminar(id: number): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta revisión?');
    if (confirmacion) {
      this.tareasService.delete(id).subscribe(() => {
        this.cargarTareas(); // Recarga las revisiones después de eliminar
      });
    }
  }
}
  



  

