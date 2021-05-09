import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cursos' },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  { path: 'rxjs-poc', loadChildren: () => import('./rxjs-poc/rxjs-poc.module').then(m => m.RxjsPocModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
