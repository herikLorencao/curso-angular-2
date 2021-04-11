import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingStyleComponent } from './data-binding-style/data-binding-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { InputOutputPropertiesComponent } from './input-output-properties/input-output-properties.component';
import { InputOutputPropertiesComponentComponent } from './input-output-properties-component/input-output-properties-component.component';
import { OutputPropertiesComponentComponent } from './output-properties-component/output-properties-component.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBindingStyleComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InputOutputPropertiesComponent,
    InputOutputPropertiesComponentComponent,
    OutputPropertiesComponentComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
