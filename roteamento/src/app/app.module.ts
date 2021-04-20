import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import routing from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoIndefinidoComponent } from './curso-indefinido/curso-indefinido.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, CursosComponent, CursoDetalheComponent, CursoIndefinidoComponent],
  imports: [BrowserModule, AppRoutingModule /*, routing*/],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
