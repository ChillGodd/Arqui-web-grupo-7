import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HostingService } from '../../../services/hosting.service';
import { Hosting } from '../../../models/hosting.model';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-listarhosting',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule,MatPaginatorModule,CommonModule,MatCardModule],
  templateUrl: './listarhosting.component.html',
  styleUrl: './listarhosting.component.css'
})
export class ListarhostingComponent {
  displayedColumns: string[] = ['idHosting', 'tipo', 'url', 'fechaAdquisicion', 'fechaExpiracion','proyecto','accion01', 'accion02'];
  dataSource: MatTableDataSource<Hosting> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private hS: HostingService) {}

  ngOnInit(): void {
    this.hS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.hS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  
  

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.paginator.pageSize = 4; 
      this.dataSource.paginator = this.paginator;
    }
  }

  eliminar(id: number): void {
      const confirmacion = confirm('¿Estás seguro de que deseas eliminar este user?');
      if (confirmacion) {
    this.hS.delete(id).subscribe(() => {
      this.hS.list().subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }
}
}

