import { Component, OnInit, ViewChild } from '@angular/core';
import { Revisiones } from '../../../models/revisiones.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RevisionesService } from '../../../services/revisiones.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listarrevisionesporidproyecto',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,],
  templateUrl: './listarrevisionesporidproyecto.component.html',
  styleUrl: './listarrevisionesporidproyecto.component.css'
})
export class ListarrevisionesporidproyectoComponent implements OnInit {
  displayedColumns: string[] = [
    'idRevision',
    'comentario',
    'puntuacion',
    'fecha',
    'proyecto',
    'acciones',
  ];
  dataSource: MatTableDataSource<Revisiones> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  idProyecto!: number;

  constructor(
    private revisionesService: RevisionesService,
    private route: ActivatedRoute // Para obtener el ID del proyecto desde la URL
  ) {}

  ngOnInit() {
    // Captura el ID del proyecto desde la URL
    this.idProyecto = +this.route.snapshot.paramMap.get('idProyecto')!;
    this.cargarRevisiones();
  }

  cargarRevisiones() {
    if (this.idProyecto > 0) {
      this.revisionesService.getRevisionesPorProyecto(this.idProyecto).subscribe((data) => {
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
      this.revisionesService.delete(id).subscribe(() => {
        this.cargarRevisiones(); // Recarga las revisiones después de eliminar
      });
    }
  }
}
