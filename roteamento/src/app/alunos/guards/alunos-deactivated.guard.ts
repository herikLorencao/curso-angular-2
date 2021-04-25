import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { FormDeactivated } from './form-deactivated';

@Injectable({
  providedIn: 'root',
})
export class AlunosDeactivatedGuard implements CanDeactivate<FormDeactivated> {
  canDeactivate(
    component: FormDeactivated,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return component.manterForm();
  }
}
