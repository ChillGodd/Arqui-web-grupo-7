import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Hosting } from '../../../models/hosting.model';
import { HostingService } from '../../../services/hosting.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tipodehosting',
  standalone: true,
  imports: [FormsModule,MatTableModule,MatIconModule,MatPaginatorModule,CommonModule,MatInputModule],
  templateUrl: './tipodehosting.component.html',
  styleUrl: './tipodehosting.component.css'
})
export class TipodehostingComponent implements OnInit{
  displayedColumns: string[] = ['idHosting', 'tipo', 'url', 'fechaAdquisicion', 'fechaExpiracion', 'proyecto']
  dataSource: MatTableDataSource<Hosting> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  tipoHosting: string = '';

  constructor(private hostingService: HostingService){}

  ngOnInit(): void {
    this.hostingService.list().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(): void{
    this.dataSource.filter= this.tipoHosting.trim().toLowerCase();
  }
}
