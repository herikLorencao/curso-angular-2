import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-util-poc',
  template: `<app-poc-base
    [valor]="valor"
    [nome]="nome"
    estilo="primary"
  ></app-poc-base>`,
})
export class TakeUtilPocComponent implements OnInit {
  nome = 'Componente com Take Util';
  valor: string;

  constructor() {}

  ngOnInit() {}
}
