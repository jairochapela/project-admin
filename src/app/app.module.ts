import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosListComponent } from './proyectos-list/proyectos-list.component';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { RolesListComponent } from './roles-list/roles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosListComponent,
    TareasListComponent,
    UsuariosListComponent,
    RolesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
