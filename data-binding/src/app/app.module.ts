import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingStyleComponent } from './data-binding-style/data-binding-style.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBindingStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
