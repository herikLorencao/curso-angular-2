import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsPocComponent } from './rxjs-poc.component';

const routes: Routes = [{ path: '', component: RxjsPocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsPocRoutingModule { }
