import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataDrivenComponent } from './data-driven.component';

@NgModule({
  declarations: [DataDrivenComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class DataDrivenModule {}
