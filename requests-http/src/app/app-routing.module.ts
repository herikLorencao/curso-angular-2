import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'busca-reativa' },
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
  {
    path: 'busca-reativa',
    loadChildren: () =>
      import('./busca-reativa/busca-reativa.module').then(
        (m) => m.BuscaReativaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
