import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    this.cursos.push(curso);
  }
}
