import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TemplateDrivenModule } from './template-driven/template-driven.module';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';

@NgModule({
  declarations: [AppComponent, DataDrivenComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateDrivenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
