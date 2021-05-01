import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataDrivenComponent } from './data-driven.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DataDrivenComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule],
})
export class DataDrivenModule {}
