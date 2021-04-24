import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent implements OnInit {
  aluno: any = {};
  operacao: string = '';
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
}
