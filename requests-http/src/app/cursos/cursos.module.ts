import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [CursosComponent, CursosListaComponent, CursoFormComponent],
  imports: [CommonModule, CursosRoutingModule, ReactiveFormsModule],
})
export class CursosModule {}
