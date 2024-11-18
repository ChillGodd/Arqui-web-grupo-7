<<<<<<< HEAD
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from '../../../services/users.service'; 
import { User } from '../../../models/user.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
=======
import { Component } from '@angular/core';
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-listaruser',
  standalone: true,
<<<<<<< HEAD
  imports: [MatTableModule, MatIconModule, RouterModule, MatPaginatorModule,CommonModule, NgIf,MatFormFieldModule],
  templateUrl: './listaruser.component.html',
  styleUrls: ['./listaruser.component.css']
})
export class ListaruserComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idUser', 'nombreUser', 'fecha', 'rol', 'accion01'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.userService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  eliminar(id: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este user?');
    if (confirmacion) {
      this.userService.delete(id).subscribe(() => {
        this.userService.list().subscribe((data) => {
          this.userService.setList(data);
        });
      });
    }
}
=======
  imports: [],
  templateUrl: './listaruser.component.html',
  styleUrl: './listaruser.component.css'
})
export class ListaruserComponent {

>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
}
