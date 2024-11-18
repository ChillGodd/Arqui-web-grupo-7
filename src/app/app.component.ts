import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListRolesComponent } from './components/roles/list-roles/list-roles.component';
import { LoginService } from './services/login.service';
import { RolesComponent } from './components/roles/roles.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListRolesComponent,MatToolbarModule,MatIconModule,MatMenuModule,MatButtonModule,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awgrupo7-frontend';
  role: string = '';
  username: string | null = ''; //se declara MIO 
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    if (typeof window !== 'undefined') {                //agregado KIO
      this.role = this.loginService.showRole(); //agregado MOIO
      this.username = this.loginService.getUsername();           //agregado MIO
    }
  }
 //agregado
 cerrar() {
  sessionStorage.clear();
  this.username = null; 
  this.role = '';
}

  verificar(){
    this.role=this.loginService.showRole();
    return this.loginService.verificar();
  }
  isAdmin(){
    return this.role === 'ADMIN'
  } 
  isProgramador(){
    return this.role === 'PROGRAMADOR'
  }
  isCliente(){
    return this.role ==='CLIENTE'
  }

}
