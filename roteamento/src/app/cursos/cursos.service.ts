import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  getCursos(): Array<any> {
    return [
      {
        id: 1,
        nome: 'Angular',
      },
      {
        id: 2,
        nome: 'Java',
      },
    ];
  }

  getCurso(id: number) {
    return this.getCursos().find((curso) => curso.id == id);
  }
}
