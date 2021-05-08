import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    children: [
      {
        path: '',
        component: CursosListaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
