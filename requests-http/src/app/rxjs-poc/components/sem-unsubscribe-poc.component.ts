import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem-unsubscribe',
  template: `<app-poc-base
    [valor]="valor"
    [nome]="nome"
    estilo="danger"
  ></app-poc-base>`,
})
export class SemUnsubscribePocComponent implements OnInit {
  nome = 'Componente sem unsubscribe';
  valor: string;

  constructor() {}

  ngOnInit(): void {}
}
