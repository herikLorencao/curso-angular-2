import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoIndefinidoComponent } from './curso-indefinido/curso-indefinido.component';

const routes = [
  {
    path: 'cursos',
    component: CursosComponent,
  },
  {
    path: 'cursos/:id',
    component: CursoDetalheComponent,
  },
  {
    path: 'cursos/indefinido',
    component: CursoIndefinidoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class CursosRoutingModule {}
