import { Component } from '@angular/core';
import { BuscaruserpornombreComponent } from "./buscaruserpornombre/buscaruserpornombre.component";
import { ActivatedRoute,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RouterOutlet,BuscaruserpornombreComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  constructor (public route: ActivatedRoute){}
  ngOnInit(): void {
      
  }

}
