import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.scss'],
})
export class ReceberCursoComponent implements OnInit {
  curso: string;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.cursoEmitter.subscribe(
      (cursoAdicionado) => (this.curso = cursoAdicionado)
    );
  }
}
