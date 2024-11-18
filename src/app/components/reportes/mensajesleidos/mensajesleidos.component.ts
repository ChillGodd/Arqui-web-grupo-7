import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Mensajes } from '../../../models/mensajes.model';
import { MensajesService } from '../../../services/mensajes.service';

@Component({
  selector: 'app-mensajesleidos',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatPaginatorModule,MatInputModule,CommonModule],
  templateUrl: './mensajesleidos.component.html',
  styleUrl: './mensajesleidos.component.css'
})
export class MensajesleidosComponent implements OnInit, AfterViewInit{
  displatyedColumns: string[]=['idMensaje', 'contenido', 'fecha', 'user'];
  dataSource: MatTableDataSource<Mensajes> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private mensajesService: MensajesService){}

  ngOnInit(): void {
    this.mensajesService.list().subscribe((data) => {
      const mensajesLeidos = data.filter(Mensajes => Mensajes.leido == true);
      this.dataSource = new MatTableDataSource(mensajesLeidos);
      this.dataSource.paginator=this.paginator;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

  applyFilter(event: Event):void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
