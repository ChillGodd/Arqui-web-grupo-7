import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Notificaciones } from '../../../models/notificaciones.model';
import { NotificacionesService } from '../../../services/notificaciones.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notificacionesportipo',
  standalone: true,
  imports: [FormsModule,MatTableModule, MatIconModule,MatPaginatorModule, CommonModule, MatInputModule],
  templateUrl: './notificacionesportipo.component.html',
  styleUrl: './notificacionesportipo.component.css'
})
export class NotificacionesportipoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idNotificacion','fechaNotificacion','mensaje','tipoNotificacion','user'];
  dataSource: MatTableDataSource<Notificaciones> = new MatTableDataSource();
  tipoFiltro: string = ''; //Campo para el filtro 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private notificacionesService: NotificacionesService) {}

  ngOnInit(): void {
    this.notificacionesService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.filter = this.tipoFiltro.trim().toLowerCase();
  }

  applyFilter(): void {
    this.dataSource.filter = this.tipoFiltro.trim().toLowerCase();
  }

}
