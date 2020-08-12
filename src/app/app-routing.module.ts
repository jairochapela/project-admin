import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosListComponent } from './proyectos-list/proyectos-list.component';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { ProyectoDetailComponent } from './proyecto-detail/proyecto-detail.component';

const routes: Routes = [
  {path: 'proyectos', component: ProyectosListComponent},
  {path: 'proyectos/:id', component: ProyectoDetailComponent},
  {path: 'tareas', component: TareasListComponent},
  {path: 'usuarios', component: UsuariosListComponent},
  {path: 'roles', component: RolesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
