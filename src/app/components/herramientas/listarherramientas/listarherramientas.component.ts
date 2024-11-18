import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Herramientas } from '../../../models/herramientas.model';
import { HerramientasService } from '../../../services/herramientas.service';
<<<<<<< HEAD
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
=======
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-listarherramientas',
  standalone: true,
<<<<<<< HEAD
  imports: [MatTableModule, MatIconModule, RouterModule, MatPaginatorModule,MatCardModule,CommonModule],
=======
  imports: [MatTableModule, MatIconModule, RouterModule, MatPaginatorModule],
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
  templateUrl: './listarherramientas.component.html',
  styleUrl: './listarherramientas.component.css'
})
export class ListarherramientasComponent {
  displayedColumns: string[] = ['idHerramienta', 'nombre', 'descripcion', 'proyecto', 'accion01', 'accion02'];
  dataSource: MatTableDataSource<Herramientas> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private hS: HerramientasService) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.hS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.hS.getList().subscribe((data) => {

      this.dataSource = new MatTableDataSource(data);
=======
    this.hS.list().subscribe(data => {
      this.dataSource.data = data;
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  eliminar(id: number): void {
    this.hS.delete(id).subscribe(() => {
      this.hS.list().subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }
}
