import { Component, ViewChild } from '@angular/core';
import { RolesService } from '../../../services/roles.service';
import { Roles } from '../../../models/roles.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-buscarrolespornombre',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    MatPaginatorModule,
  ],
  templateUrl: './buscarrolespornombre.component.html',
  styleUrls: ['./buscarrolespornombre.component.css']
})
export class BuscarrolespornombreComponent {
  displayedColumns: string[] = ['c1', 'c2', 'c3'];
  roles: Roles[] = [];
  nombre: string = ''; // Nombre a buscar
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<Roles> = new MatTableDataSource();

  constructor(private rolesService: RolesService) {}

  // Método para realizar la búsqueda
  buscarRoles() {
    this.rolesService.buscarPorNombre(this.nombre).subscribe((data) => {
      if (data.length > 0) {
        this.roles = data;
        this.dataSource = new MatTableDataSource(this.roles);
        this.dataSource.paginator = this.paginator; // Vincular el paginador
      } else {
        alert('No se encontraron roles con ese nombre.');
        this.roles = []; // Limpiar lista si no hay resultados
        this.dataSource = new MatTableDataSource(this.roles);
      }
    }, error => {
      alert('Error al realizar la búsqueda. Intenta nuevamente.');
      this.roles = [];
      this.dataSource = new MatTableDataSource(this.roles);
    });
  }
}
