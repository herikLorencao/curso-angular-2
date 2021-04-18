import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

let APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/cursos',
    component: CursosComponent,
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  APP_ROUTES
);
