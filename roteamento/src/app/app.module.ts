import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import routing from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, CursosComponent],
  imports: [BrowserModule, AppRoutingModule, MaterializeModule /*, routing*/],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}