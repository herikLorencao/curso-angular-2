import { Injectable, EventEmitter } from '@angular/core';
import { Aluno } from '../typings/aluno';
@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
  ];

  constructor() {}

  get(id: number): Aluno {
    return this.alunos.find((aluno) => aluno.id == id);
  }

  list(): Aluno[] {
    return this.alunos;
  }

  add(aluno: Aluno) {
    aluno.id = Math.round(Math.random() * 100);
    this.alunos.push(aluno);
  }

  edit(aluno: Aluno) {
    this.alunos = this.alunos.map((alunoLista: any) => {
      if (alunoLista.id == aluno.id) return aluno;
      return alunoLista;
    });
  }
}
