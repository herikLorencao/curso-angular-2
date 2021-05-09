import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-poc',
  template: `<app-poc-base
    [valor]="valor"
    [nome]="nome"
    estilo="success"
  ></app-poc-base>`,
})
export class AsyncPocComponent implements OnInit {
  nome = 'Componente com async';
  valor: string;

  constructor() {}

  ngOnInit(): void {}
}
