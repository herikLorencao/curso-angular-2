import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-poc',
  template: `<app-poc-base
    [valor]="valor"
    [nome]="nome"
    estilo="info"
  ></app-poc-base>`,
})
export class TakePocComponent implements OnInit {
  nome = 'Componente com Take';
  valor: string;

  constructor() {}

  ngOnInit() {}
}
