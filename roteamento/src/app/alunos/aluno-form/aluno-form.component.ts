import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { FormDeactivated } from '../guards/form-deactivated';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent implements OnInit, FormDeactivated {
  aluno: any = {};
  operacao: string = '';
  formMudou = false;
  private inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.aluno = this.alunosService.get(params.id);
        this.operacao = 'Editar';
      } else {
        this.operacao = 'Cadastrar';
      }
    });
  }

  campoEditavel(): boolean {
    return this.operacao === 'Editar';
  }

  adicionar() {
    this.alunosService.add(this.aluno);
  }

  editar() {
    this.alunosService.edit(this.aluno);
  }

  onInput() {
    this.formMudou = true;
  }

  manterForm() {
    if (this.formMudou) return confirm('Deseja mudar de página?');
    return true;
  }
}
