import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'upload-file' },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'rxjs-poc',
    loadChildren: () =>
      import('./rxjs-poc/rxjs-poc.module').then((m) => m.RxjsPocModule),
  },
  {
    path: 'upload-file',
    loadChildren: () =>
      import('./upload-file/upload-file.module').then(
        (m) => m.UploadFileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
