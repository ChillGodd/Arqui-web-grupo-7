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
import { ListarherramientasComponent } from './components/herramientas/listarherramientas/listarherramientas.component';
import { RevisionesComponent } from './components/revisiones/revisiones.component';
import { CreaditarevisionesComponent } from './components/revisiones/creaditarevisiones/creaditarevisiones.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { CreaditatareasComponent } from './components/tareas/creaditatareas/creaditatareas.component';
import { ListartareasComponent } from './components/tareas/listartareas/listartareas.component';
import { HostingComponent } from './components/hosting/hosting.component';
import { CreaditahostingComponent } from './components/hosting/creaditahosting/creaditahosting.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { CreaditaNotificacionesComponent } from './components/notificaciones/creaditanotificaciones/creaditanotificaciones.component';
import { ListarmensajesComponent } from './components/mensajes/listarmensajes/listarmensajes.component';
import { ListarproyectosComponent } from './components/proyectos/listarproyectos/listarproyectos.component';
import { ListaruserComponent } from './components/user/listaruser/listaruser.component';
import { ListarNotificacionesComponent } from './components/notificaciones/listarnotificaciones/listarnotificaciones.component';
import { ListarhostingComponent } from './components/hosting/listarhosting/listarhosting.component';
import { ListarrevisionesComponent } from './components/revisiones/listarrevisiones/listarrevisiones.component';
import { ListRolesComponent } from './components/roles/list-roles/list-roles.component';
import { BuscartareasporidporyectoComponent } from './components/reportes/buscartareasporidporyecto/buscartareasporidporyecto.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { BuscaruserpornombreComponent } from './components/reportes/buscaruserpornombre/buscaruserpornombre.component';
import { ListartareascumpplidasComponent } from './components/reportes/listartareascumpplidas/listartareascumpplidas.component';
import { MensajesleidosComponent } from './components/reportes/mensajesleidos/mensajesleidos.component';
import { TipodehostingComponent } from './components/reportes/tipodehosting/tipodehosting.component';
import { NotificacionesportipoComponent } from './components/reportes/notificacionesportipo/notificacionesportipo.component';
import { EncontrarproyectomascaroComponent } from './components/reportes/encontrarproyectomascaro/encontrarproyectomascaro.component';
import { CantidadtareaspendientesComponent } from './components/reportes/cantidadtareaspendientes/cantidadtareaspendientes.component';
import { BuscarherramientapornombreComponent } from './components/reportes/buscarherramientaspornombre/buscarherramientaspornombre.component';
import { BuscarrolespornombreComponent } from './components/reportes/buscarrolespornombre/buscarrolespornombre.component';
import { ListarrevisionesporidproyectoComponent } from './components/reportes/listarrevisionesporidproyecto/listarrevisionesporidproyecto.component';
import { LoginComponent } from './components/login/login.component';
import { seguridadGuard } from './guard/seguridad.guard';
import { HomeComponent } from './components/home/home.component';
import { BuscarporyectosentrefechasComponent } from './components/reportes/buscarporyectosentrefechas/buscarporyectosentrefechas.component';
import { PaginaprincipalComponent } from './component/paginaprincipal/paginaprincipal.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'paginaprincipal',
    pathMatch: 'full',
  },
  
  {
    path: 'paginaprincipal',
    component: PaginaprincipalComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
    children: [
      { path: 'nuevo', component: CreaeditarolesComponent },
      { path: 'crear-rol', component: CreaeditarolesComponent },
      { path: 'ediciones/:id', component: CreaeditarolesComponent },
      { path:'listar',component:ListRolesComponent},
    ], canActivate: [seguridadGuard],
  },
  {
    path: 'herramientas',
    component: HerramientasComponent,
    children: [
      { path: 'nuevo', component: CreaditaherramientasComponent },
      { path: 'editar/:id', component: CreaditaherramientasComponent },
      { path: 'listar', component: ListarherramientasComponent },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'mensajes',
    component: MensajesComponent,
    children: [
      { path: 'nuevo', component: CreaditarmensajesComponent },
      { path: 'editar/:id', component: CreaditarmensajesComponent },
      { path:'listar',component:ListarmensajesComponent},
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
    children: [
      { path: 'nuevo', component: CreaditaproyectoComponent },
      { path: 'editar/:id', component: CreaditaproyectoComponent },
      { path: 'listar', component: ListarproyectosComponent },
      { path: ':idProyecto/tareas', component: BuscartareasporidporyectoComponent },
      { path: ':idProyecto/revisiones', component: ListarrevisionesporidproyectoComponent },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'nuevo', component: CreaditauserComponent },
      { path: 'editar/:id', component: CreaditauserComponent },
      { path:'listar',component:ListaruserComponent},
    ], canActivate: [seguridadGuard],
  },
  {
    path: 'revisiones',
    component: RevisionesComponent,
    children: [
      { path: 'nuevo', component: CreaditarevisionesComponent },
      { path: 'editar/:id', component: CreaditarevisionesComponent },
      { path:'listar',component:ListarrevisionesComponent
      },
    ],
    canActivate: [seguridadGuard],
  },
  { path: '', redirectTo: '/roles', pathMatch: 'full' },
  {
    path: 'tareas',
    component: TareasComponent,
    children: [
      { path: 'nuevo', component: CreaditatareasComponent },
      { path: 'editar/:id', component: CreaditaproyectoComponent },
      { path: 'listar', component: ListartareasComponent }
    ],
    canActivate: [seguridadGuard],
  },

  {
    path: 'hosting',
    component: HostingComponent,
    children: [
      { path: 'nuevo', component: CreaditahostingComponent },
      { path: 'editar/:id', component: CreaditahostingComponent },
      { path:'listar',component:ListarhostingComponent},
    ],
    canActivate: [seguridadGuard],
  },

  {
    path: 'notificaciones',
    component: NotificacionesComponent,
    children: [
      { path: 'nuevo', component: CreaditaNotificacionesComponent },
      { path: 'editar/:id', component: CreaditaNotificacionesComponent },
      { path:'listar',component:ListarNotificacionesComponent},
    ],
    canActivate: [seguridadGuard],
  },
  { path: '', redirectTo: '/roles', pathMatch: 'full' },
  {
    path: 'reportes',
    component: ReportesComponent,
    children: [
      { path: 'buscaruserpornombre', component: BuscaruserpornombreComponent },
      { path: 'buscartareasporidproyecto', component: BuscartareasporidporyectoComponent },
      {path : 'buscarproyectospornombrefechas', component: BuscarporyectosentrefechasComponent},
      { path: 'listartareascumplidas', component: ListartareascumpplidasComponent },
      {path: 'mensajesleidos',component:MensajesleidosComponent},
      {path: 'tipodehosting',component:TipodehostingComponent},
      {path: 'notificacionesportipo',component:NotificacionesportipoComponent},
      { path: 'tareaspendientes', component: CantidadtareaspendientesComponent },
      { path: 'proyectomascostoso', component: EncontrarproyectomascaroComponent},
      {path : 'buscarherramientaspornombre', component: BuscarherramientapornombreComponent},
      {path : 'buscarrolespornombre', component: BuscarrolespornombreComponent},
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'homes',
    component: HomeComponent,
    canActivate: [seguridadGuard], // solo construcciones, se debe agregar a cada uno
  },
];