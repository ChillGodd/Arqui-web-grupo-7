import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MensajesService } from '../../../services/mensajes.service';
import { Mensajes } from '../../../models/mensajes.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listarmensajes',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule,MatPaginatorModule,CommonModule,MatCardModule],
  templateUrl: './listarmensajes.component.html',
  styleUrls: ['./listarmensajes.component.css']
})
export class ListarmensajesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idMensaje', 'contenido', 'fecha', 'leido', 'user', 'accion01', 'accion02'];
  dataSource: MatTableDataSource<Mensajes> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mS: MensajesService) {}

  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.mS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator!._changePageSize(4); 
  }

  eliminar(id: number): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta notificacion?');
    if (confirmacion) {
    this.mS.delete(id).subscribe(() => {
      this.mS.list().subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }
} 
}