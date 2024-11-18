import { Component, ViewChild } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/users.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-buscaruserpornombre',
  standalone: true,
  imports: [FormsModule,RouterLink ,CommonModule,MatTableModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,],
  templateUrl: './buscaruserpornombre.component.html',
  styleUrl: './buscaruserpornombre.component.css'
})
export class BuscaruserpornombreComponent {
  displayedColumns: string[] = ['idUser', 'nombreUser', 'contrasenia', 'fecha', 'rol', 'rolnombre','roldescripcion'];
  
  users: User[] = [];
  nombre: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  buscarUsuarios() {
    this.userService.buscarPorNombre(this.nombre).subscribe((data) => {
      if (data.length > 0) {
        this.users = data;
      } else {
        alert('No se encontraron usuarios con ese nombre.');
        this.users = [];  
      }
    }, error => {
      alert('Error al realizar la búsqueda. Intenta nuevamente.');  
      this.users = [];
    });
  }
}
