import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
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
  bsModalRef: BsModalRef;

  constructor(
    private service: CursosService,
    private modalService: BsModalService
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
        this.handleError(
          'Erro no carregamento dos cursos. Tente novamente mais tarde.'
        );
        return EMPTY;
      })
    );

    // this.service.list().subscribe(
    //   dados => this.cursos = dados,
    //   error => console.log(error),
    // )
  }

  handleError(message: string) {
    this.bsModalRef = this.modalService.show(AlertComponent);
    this.bsModalRef.content.message = message;
    this.bsModalRef.content.type = 'danger';
  }
}
