import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateDrivenComponent } from './template-driven.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
@NgModule({
  declarations: [TemplateDrivenComponent, FormDebugComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [],
})
export class TemplateDrivenModule {}
