import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valorInicial: number = 0;
  cicloRemovido: boolean = false;

  mudarValor() {
    this.valorInicial++;
  }

  removerCiclo() {
    this.cicloRemovido = true;
  }
}
