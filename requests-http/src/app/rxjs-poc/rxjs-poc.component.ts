import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';

@Component({
  selector: 'app-rxjs-poc',
  templateUrl: './rxjs-poc.component.html',
  styleUrls: ['./rxjs-poc.component.scss'],
})
export class RxjsPocComponent implements OnInit {
  mostrarComponentes = true;

  constructor(private enviarValorService: EnviarValorService) {}

  ngOnInit(): void {}

  emitirValor(valor: string) {
    this.enviarValorService.emitirValor(valor);
  }

  toggleMostrarComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
