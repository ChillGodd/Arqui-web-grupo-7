import { Component, ViewChild } from '@angular/core';
import { Herramientas } from '../../../models/herramientas.model';
import { HerramientasService } from '../../../services/herramientas.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-buscarherramientaspornombre',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CommonModule,
    MatTableModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
  ],
  templateUrl: './buscarherramientaspornombre.component.html',
  styleUrl: './buscarherramientaspornombre.component.css',
})
export class BuscarherramientapornombreComponent {
  displayedColumns: string[] = ['idHerramienta', 'nombre', 'descripcion', 'proyecto'];
  herramientas: Herramientas[] = [];
  nombre: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private herramientasService: HerramientasService) {}

  ngOnInit(): void {}

  buscarHerramientas() {
    if (this.nombre.trim()) {
      this.herramientasService.buscarPorNombre(this.nombre).subscribe(
        (data) => {
          if (data.length > 0) {
            this.herramientas = data;
          } else {
            alert('No se encontraron herramientas con ese nombre.');
            this.herramientas = [];
          }
        },
        (error) => {
          alert('Error al realizar la búsqueda. Intenta nuevamente.');
          this.herramientas = [];
        }
      );
    } else {
      alert('Por favor, ingresa un nombre válido para la búsqueda.');
    }
  }
}
