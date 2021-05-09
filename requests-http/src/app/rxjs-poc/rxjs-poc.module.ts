import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsPocRoutingModule } from './rxjs-poc-routing.module';
import { RxjsPocComponent } from './rxjs-poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { UnsubscribePocComponent } from './components/unsubscribe-poc.component';
import { SemUnsubscribePocComponent } from './components/sem-unsubscribe-poc.component';
import { AsyncPocComponent } from './components/async-poc.component';
import { TakeUtilPocComponent } from './components/take-util-poc.component';
import { TakePocComponent } from './components/take-poc.component';

@NgModule({
  declarations: [
    RxjsPocComponent,
    PocBaseComponent,
    UnsubscribePocComponent,
    SemUnsubscribePocComponent,
    AsyncPocComponent,
    TakeUtilPocComponent,
    TakePocComponent,
  ],
  imports: [CommonModule, RxjsPocRoutingModule],
})
export class RxjsPocModule {}
