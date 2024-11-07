import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { RolesService } from '../../../services/roles.service';
import { Roles } from '../../../models/roles.model';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-list-roles',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],  // Agregar CommonModule para habilitar *ngFor
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {
  dataSource: MatTableDataSource<Roles> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2','c3', 'accion01','accion02'];

  constructor(private rolesService: RolesService) {}

  ngOnInit(): void {
    this.rolesService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.rolesService.getList().subscribe((data) => {

      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
      const confirmacion = confirm('¿Estás seguro de que deseas eliminar este rol?');
      if (confirmacion) {
        this.rolesService.delete(id).subscribe(() => {
          this.rolesService.list().subscribe((data) => {
            this.rolesService.setList(data);
          });
        });
      }
  }
}
