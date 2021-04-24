import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
  ];

  constructor() {}

  get(id: number) {
    return this.alunos.find((aluno) => aluno.id == id);
  }

  list(): any[] {
    return this.alunos;
  }

  add(aluno: any) {
    aluno.id = Math.round(Math.random() * 100);
    this.alunos.push(aluno);
  }

  edit(aluno: any) {
    this.alunos = this.alunos.map((alunoLista: any) => {
      if (alunoLista.id == aluno.id) return aluno;
      return alunoLista;
    });
  }
}
