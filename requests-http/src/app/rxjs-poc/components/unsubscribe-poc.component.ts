import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

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
export class UnsubscribePocComponent implements OnInit, OnDestroy {
  nome = 'Componente com unsubscribe';
  valor: string;

  private sub: Subscription;

  constructor(private service: EnviarValorService) {}

  ngOnInit(): void {
    this.sub = this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log(`Componente ${this.nome} destruído`);
  }
}
