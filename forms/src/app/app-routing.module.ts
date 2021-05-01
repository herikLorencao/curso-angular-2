import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {
    path: 'template-driven',
    component: TemplateDrivenComponent,
  },
  {
    path: 'data-driven',
    component: DataDrivenComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data-driven',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
