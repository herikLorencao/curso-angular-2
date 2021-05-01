import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TemplateDrivenModule } from './template-driven/template-driven.module';

import { AppComponent } from './app.component';
import { DataDrivenModule } from './data-driven/data-driven.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateDrivenModule,
    DataDrivenModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
