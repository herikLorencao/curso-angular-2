import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-take-poc',
  template: `<app-poc-base
    [valor]="valor"
    [nome]="nome"
    estilo="info"
  ></app-poc-base>`,
})
export class TakePocComponent implements OnInit, OnDestroy {
  nome = 'Componente com Take';
  valor: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        take(1)
      )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    console.log(`Componente ${this.nome} destruído`);
  }
}
