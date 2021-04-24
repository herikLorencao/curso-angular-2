import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoIndefinidoComponent } from './curso-indefinido/curso-indefinido.component';

import { CursosService } from './cursos.service';

@NgModule({
  imports: [CommonModule, CursosRoutingModule],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoIndefinidoComponent,
  ],
  providers: [CursosService],
})
export class CursosModule {}
