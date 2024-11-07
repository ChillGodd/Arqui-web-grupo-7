import { Routes } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { CreaeditarolesComponent } from './components/roles/creaeditaroles/creaeditaroles.component';

export const routes: Routes = [
  { path: 'roles', component: RolesComponent,
    children:[
      {
        path: 'nuevo', component:CreaeditarolesComponent
      },
      { path: 'crear-rol', component: CreaeditarolesComponent 

      },
      {
        path: 'ediciones/:id',component:CreaeditarolesComponent
      }
    ] 
  },
  { path: '', redirectTo: '/roles', pathMatch: 'full' }
];
