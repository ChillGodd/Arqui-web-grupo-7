import { Routes } from '@angular/router';

// Importación de los componentes principales y secundarios de cada módulo
import { RolesComponent } from './components/roles/roles.component';
import { CreaeditarolesComponent } from './components/roles/creaeditaroles/creaeditaroles.component';

import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { CreaditaherramientasComponent } from './components/herramientas/creaditaherramientas/creaditaherramientas.component';

import { MensajesComponent } from './components/mensajes/mensajes.component';
import { CreaditarmensajesComponent } from './components/mensajes/creaditamensajes/creaditamensajes.component';

import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CreaditaproyectoComponent } from './components/proyectos/creaditaproyecto/creaditaproyecto.component';

import { UserComponent } from './components/user/user.component';
import { CreaditauserComponent } from './components/user/creaditauser/creaditauser.component';

export const routes: Routes = [
  {
    path: 'roles', component: RolesComponent,
    children: [
      { path: 'nuevo', component: CreaeditarolesComponent },
      { path: 'crear-rol', component: CreaeditarolesComponent },
      { path: 'ediciones/:id', component: CreaeditarolesComponent }
    ]
  },
  {
    path: 'herramientas', component: HerramientasComponent,
    children: [
      { path: 'nuevo', component: CreaditaherramientasComponent },
      { path: 'editar/:id', component: CreaditaherramientasComponent }
    ]
  },
  {
    path: 'mensajes', component: MensajesComponent,
    children: [
      { path: 'nuevo', component: CreaditarmensajesComponent },
      { path: 'editar/:id', component: CreaditarmensajesComponent }
    ]
  },
  {
    path: 'proyectos', component: ProyectosComponent,
    children: [
      { path: 'nuevo', component: CreaditaproyectoComponent },
      { path: 'editar/:id', component: CreaditaproyectoComponent }
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'nuevo', component: CreaditauserComponent },
      { path: 'editar/:id', component: CreaditauserComponent }
    ]
  },
  { path: '', redirectTo: '/roles', pathMatch: 'full' }
];
