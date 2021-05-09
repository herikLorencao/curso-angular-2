import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoFormComponent } from './curso-form/curso-form.component';
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
      {
        path: 'novo',
        component: CursoFormComponent,
      },
      {
        path: 'editar/:id',
        component: CursoFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
