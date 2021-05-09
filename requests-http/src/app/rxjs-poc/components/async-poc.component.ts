import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-async-poc',
  template: `<app-poc-base
    [valor]="valor$ | async"
    [nome]="nome"
    estilo="success"
  ></app-poc-base>`,
})
export class AsyncPocComponent implements OnInit, OnDestroy {
  nome = 'Componente com async';
  valor$: Observable<string>;

  constructor(private service: EnviarValorService) {}

  ngOnInit(): void {
    this.valor$ = this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)));
  }

  ngOnDestroy() {
    console.log(`Componente ${this.nome} destruído`);
  }
}
