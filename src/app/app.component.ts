import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListRolesComponent } from './components/roles/list-roles/list-roles.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awgrupo7-frontend';
}
