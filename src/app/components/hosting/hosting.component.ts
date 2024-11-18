import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { ListarhostingComponent } from './listarhosting/listarhosting.component';

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [RouterOutlet,MatPaginator,MatPaginatorModule,ListarhostingComponent],
  templateUrl: './hosting.component.html',
  styleUrl: './hosting.component.css'
})
export class HostingComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
    
  }
}
