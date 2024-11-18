import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Revisiones } from '../../../models/revisiones.model';
import { RevisionesService } from '../../../services/revisiones.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listarrevisiones',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './listarrevisiones.component.html',
  styleUrl: './listarrevisiones.component.css',
})
export class ListarrevisionesComponent {
  displayedColums: string[] = [
    'idRevision',
    'Comentario',
    'Puntuacion',
    'Fecha',
    'proyecto',
    'accion01',
    'accion02',
  ];
  idProyecto!: number;
  dataSource: MatTableDataSource<Revisiones> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rS: RevisionesService) {}

  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.rS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngAfertViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  eliminar(id: number): void {
    const confirmacion = confirm(
      '¿Estás seguro de que deseas eliminar esta revision?'
    );
    if (confirmacion) {
      this.rS.delete(id).subscribe(() => {
        this.rS.list().subscribe((data) => {
          this.dataSource.data = data;
        });
      });
    }
  }
}
