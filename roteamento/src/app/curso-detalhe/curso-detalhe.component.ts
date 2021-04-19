import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/index';
@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: string;
  idInscription: Subscription;

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.idInscription = this.route.params.subscribe(
      (param: any) => (this.id = param['id'])
    );
  }

  ngOnDestroy() {
    this.idInscription.unsubscribe();
  }
}
