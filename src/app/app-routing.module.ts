import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsuarioDetalleComponent } from './usuario/usuario-detalle/usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UsuarioComponent,
    children: [
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'editar', component: UsuarioEditarComponent },
      { path: 'detalle', component: UsuarioDetalleComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
