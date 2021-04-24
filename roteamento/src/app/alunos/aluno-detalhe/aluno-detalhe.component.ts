import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any;
  private inscricao: Subscription;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      const alunoId = params['id'];
      this.aluno = this.alunosService.get(alunoId);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
