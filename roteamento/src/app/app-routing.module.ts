import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./alunos/alunos.module').then((module) => module.AlunosModule),
  },
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./cursos/cursos.module').then((module) => module.CursosModule),
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /*, { useHash: true }*/)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
