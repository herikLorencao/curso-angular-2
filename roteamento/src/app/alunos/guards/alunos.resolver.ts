import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { Aluno } from 'src/app/typings/aluno';
import { AlunosService } from '../alunos.service';

@Injectable({
  providedIn: 'root',
})
export class AlunosResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Aluno> {
    console.log('Resolver router');
    const id = route.params['id'];
    return of(this.alunosService.get(id));
  }
}
