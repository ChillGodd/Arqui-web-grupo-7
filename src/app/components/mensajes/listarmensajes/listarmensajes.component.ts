<<<<<<< HEAD
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
=======
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MensajesService } from '../../../services/mensajes.service';
import { Mensajes } from '../../../models/mensajes.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
=======

>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-listarmensajes',
  standalone: true,
<<<<<<< HEAD
  imports: [MatTableModule, MatIconModule, RouterModule,MatPaginatorModule,CommonModule,MatCardModule],
=======
  imports: [MatTableModule, MatIconModule, RouterModule,MatPaginatorModule],
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
  templateUrl: './listarmensajes.component.html',
  styleUrls: ['./listarmensajes.component.css']
})
export class ListarmensajesComponent implements OnInit, AfterViewInit {
<<<<<<< HEAD
  displayedColumns: string[] = ['idMensaje', 'contenido', 'fecha', 'leido', 'user', 'accion01', 'accion02'];
=======
  displayedColumns: string[] = ['idMensaje', 'Contenido', 'Fecha', 'Leido', 'user', 'accion01', 'accion02'];
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
  dataSource: MatTableDataSource<Mensajes> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mS: MensajesService) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.mS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

=======
    this.mS.list().subscribe(data => {
      this.dataSource.data = data;
    });
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
<<<<<<< HEAD
    this.dataSource.paginator!._changePageSize(4); 
  }

  eliminar(id: number): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta notificacion?');
    if (confirmacion) {
=======
  }

  eliminar(id: number): void {
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
    this.mS.delete(id).subscribe(() => {
      this.mS.list().subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }
<<<<<<< HEAD
} 
}
=======
}

>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
