import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDeactivatedGuard } from './guards/alunos-deactivated.guard';
import { AlunosResolver } from './guards/alunos.resolver';

const routes = [
  {
    path: '',
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      {
        path: 'novo',
        component: AlunoFormComponent,
      },
      {
        path: ':id',
        component: AlunoDetalheComponent,
        resolve: { aluno: AlunosResolver },
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivatedGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [AlunosGuard, AlunosDeactivatedGuard],
})
export class AlunosRoutingModule {}
