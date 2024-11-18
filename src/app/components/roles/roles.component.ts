import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListRolesComponent } from './list-roles/list-roles.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [RouterOutlet, ListRolesComponent],  // Asegúrate de que ListRolesComponent es standalone
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent {
  constructor(public route: ActivatedRoute) {}
}