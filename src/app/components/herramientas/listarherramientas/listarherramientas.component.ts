import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Herramientas } from '../../../models/herramientas.model';
import { HerramientasService } from '../../../services/herramientas.service';

@Component({
  selector: 'app-listarherramientas',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, MatPaginatorModule],
  templateUrl: './listarherramientas.component.html',
  styleUrl: './listarherramientas.component.css'
})
export class ListarherramientasComponent {
  displayedColumns: string[] = ['idHerramienta', 'nombre', 'descripcion', 'proyecto', 'accion01', 'accion02'];
  dataSource: MatTableDataSource<Herramientas> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private hS: HerramientasService) {}

  ngOnInit(): void {
    this.hS.list().subscribe(data => {
      this.dataSource.data = data;
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
