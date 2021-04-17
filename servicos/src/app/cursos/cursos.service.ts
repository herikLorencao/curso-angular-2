import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {
  cursoEmitter = new EventEmitter<string>();
  static cursoCriadoEmitter = new EventEmitter<string>();

  cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor(private logService: LogService) {}

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    this.cursos.push(curso);
    this.cursoEmitter.emit(curso);
    CursosService.cursoCriadoEmitter.emit(curso);
    this.logService.register(curso);
  }
}
