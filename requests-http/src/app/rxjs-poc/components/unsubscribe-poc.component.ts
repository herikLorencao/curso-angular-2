import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubscribe-poc',
  template: `
    <app-poc-base
      [valor]="valor"
      [nome]="nome"
      estilo="secondary"
    ></app-poc-base>
  `,
})
export class UnsubscribePocComponent implements OnInit {
  nome = 'Componente com unsubscribe';
  valor: string;

  constructor() {}

  ngOnInit(): void {}
}
