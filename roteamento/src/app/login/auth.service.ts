import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginEventEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  verificarLogin(user: User) {
    console.log(user.senha);

    if (user.nome == 'user' && user.senha == '123456') {
      this.loginEventEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.loginEventEmitter.emit(false);
    }
  }
}
