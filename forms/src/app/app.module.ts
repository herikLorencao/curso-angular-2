import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TemplateDrivenComponent, DataDrivenComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
