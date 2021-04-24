import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AlunosRoutingModule],
  exports: [],
})
export class AlunosModule {}
