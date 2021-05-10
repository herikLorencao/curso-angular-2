import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { Curso } from 'src/app/typings/curso';
import { CursosService } from '../cursos.service';

@Component({
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  // cursos: Curso[];
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.service.list().subscribe((dados) => (this.cursos = dados));
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      // tap(),
      // map(),
      catchError((error) => {
        // console.error(error);
        // this.error$.next(true);
        this.handleError('Erro no carregamento dos cursos');
        return EMPTY;
      })
    );

    // this.service.list().subscribe(
    //   dados => this.cursos = dados,
    //   error => console.log(error),
    // )
  }

  handleError(message: string) {
    this.alertService.showAlertError(message);
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }
}
