import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [CriarCursoComponent],
  imports: [CommonModule],
  /*providers: [CursosService],*/
  exports: [CriarCursoComponent],
})
export class CriarCursoModule {}
