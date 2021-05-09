import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-take-util-poc',
  template: `<app-poc-base
    [valor]="valor"
    [nome]="nome"
    estilo="primary"
  ></app-poc-base>`,
})
export class TakeUtilPocComponent implements OnInit, OnDestroy {
  nome = 'Componente com Take Util';
  valor: string;
  sub$ = new Subject();

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        takeUntil(this.sub$)
      )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    this.sub$.next();
    this.sub$.complete();
    console.log(`Componente ${this.nome} destruído`);
  }
}
