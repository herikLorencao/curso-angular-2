import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-sem-unsubscribe',
  template: `<app-poc-base
    [valor]="valor"
    [nome]="nome"
    estilo="danger"
  ></app-poc-base>`,
})
export class SemUnsubscribePocComponent implements OnInit, OnDestroy {
  nome = 'Componente sem unsubscribe';
  valor: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit(): void {
    this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    console.log(`Componente ${this.nome} destruído`);
  }
}
