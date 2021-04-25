import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  usuarioAutenticado = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loginEventEmitter.subscribe(
      (usuarioLogado) => (this.usuarioAutenticado = usuarioLogado)
    );
  }
}
