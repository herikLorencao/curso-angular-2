import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/index';
import { CursosService } from '../cursos.service';
@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number;
  idInscription: Subscription;
  curso: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.idInscription = this.route.params.subscribe((param: any) => {
      this.id = param['id'];
      this.curso = this.cursosService.getCurso(this.id);
      if (!this.curso) this.router.navigate(['cursos', 'indefinido']);
    });
  }

  ngOnDestroy() {
    this.idInscription.unsubscribe();
  }
}
