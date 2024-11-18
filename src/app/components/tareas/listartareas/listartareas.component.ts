import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Tareas } from '../../../models/tareas.model';
import { TareasService } from '../../../services/tareas.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listartareas',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, MatPaginatorModule,CommonModule,MatCardModule],
  templateUrl: './listartareas.component.html',
  styleUrl: './listartareas.component.css'
})
export class ListartareasComponent {
  displayedColumns: string[] = ['idTareas','nombre', 'descripcion','fechaLimite', 'horasEmpleadas', 'estado', 'proyecto', 'accion01' ];
  dataSource: MatTableDataSource<Tareas> = new MatTableDataSource();

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private tS: TareasService){}

  ngOnInit(): void{
    this.tS.list().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  eliminar(id: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este rol?');
    if (confirmacion) {
      this.tS.delete(id).subscribe(() => {
        this.tS.list().subscribe((data) => {
          this.tS.setList(data);
        });
      });
    }
  }
}