import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Notificaciones } from '../../../models/notificaciones.model';
import { NotificacionesService } from '../../../services/notificaciones.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listarnotificaciones',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, MatPaginatorModule, CommonModule,RouterOutlet,MatCardModule],
  templateUrl: './listarnotificaciones.component.html',
  styleUrls: ['./listarnotificaciones.component.css']
})
export class ListarNotificacionesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idNotificacion', 'fechaNotificacion', 'mensaje', 'tipoNotificacion', 'user', 'accion01', 'accion02'];
  dataSource: MatTableDataSource<Notificaciones> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private notificacionesService: NotificacionesService) {}

  ngOnInit(): void {
    this.notificacionesService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.notificacionesService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  eliminar(id: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta notificacion?');
    if (confirmacion) {
      this.notificacionesService.delete(id).subscribe(() => {
        this.notificacionesService.list().subscribe((data) => {
          this.notificacionesService.setList(data);
        });
      });
    }
  }
}