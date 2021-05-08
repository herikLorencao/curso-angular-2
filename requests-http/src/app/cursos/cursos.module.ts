import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
