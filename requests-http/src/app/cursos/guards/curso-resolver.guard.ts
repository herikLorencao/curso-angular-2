import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from 'src/app/typings/curso';
import { CursosService } from '../cursos.service';

@Injectable({
  providedIn: 'root',
})
export class CursoResolverGuard implements Resolve<Curso> {
  constructor(private service: CursosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Curso> {
    if (route.params && route.params['id']) {
      return this.service.get(route.params['id']);
    }

    return of({
      id: null,
      nome: null,
    });
  }
}
