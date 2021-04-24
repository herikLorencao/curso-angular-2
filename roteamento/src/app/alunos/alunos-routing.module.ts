import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

import { AlunosComponent } from './alunos.component';

const routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      {
        path: 'novo',
        component: AlunoFormComponent,
      },
      {
        path: ':id',
        component: AlunoDetalheComponent,
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AlunosRoutingModule {}
