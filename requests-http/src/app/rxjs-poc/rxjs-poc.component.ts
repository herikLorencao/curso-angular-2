import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-poc',
  templateUrl: './rxjs-poc.component.html',
  styleUrls: ['./rxjs-poc.component.scss'],
})
export class RxjsPocComponent implements OnInit {
  mostrarComponentes = true;

  constructor() {}

  ngOnInit(): void {}

  emitirValor(valor: string) {}

  toggleMostrarComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
