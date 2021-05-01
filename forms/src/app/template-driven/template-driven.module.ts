import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { TemplateDrivenComponent } from './template-driven.component';
@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule],
  exports: [],
})
export class TemplateDrivenModule {}
