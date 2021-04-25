import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../typings/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioLogado = false;

  loginEventEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  verificarLogin(user: User) {
    if (user.nome == 'user' && user.senha == '123456') {
      this.loginEventEmitter.emit(true);
      this.usuarioLogado = true;
      this.router.navigate(['/']);
    } else {
      this.usuarioLogado = false;
      this.loginEventEmitter.emit(false);
    }
  }

  get usuarioLoginAtivado() {
    return this.usuarioLogado;
  }
}
