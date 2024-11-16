import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MensajesService } from '../../../services/mensajes.service';
import { Mensajes } from '../../../models/mensajes.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-listarmensajes',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule,MatPaginatorModule],
  templateUrl: './listarmensajes.component.html',
  styleUrls: ['./listarmensajes.component.css']
})
export class ListarmensajesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idMensaje', 'Contenido', 'Fecha', 'Leido', 'user', 'accion01', 'accion02'];
  dataSource: MatTableDataSource<Mensajes> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mS: MensajesService) {}

  ngOnInit(): void {
    this.mS.list().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  eliminar(id: number): void {
    this.mS.delete(id).subscribe(() => {
      this.mS.list().subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }
}

