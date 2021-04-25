import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: User = {
    nome: '',
    senha: '',
  };
  usuarioAutenticado = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  realizarLogin() {
    this.authService.verificarLogin(this.usuario);
  }
}
