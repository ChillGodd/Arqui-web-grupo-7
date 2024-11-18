import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListartareasComponent } from './listartareas/listartareas.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [RouterOutlet, ListartareasComponent,MatPaginator,MatPaginatorModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
  }