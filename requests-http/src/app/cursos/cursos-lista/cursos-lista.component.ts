import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { Curso } from 'src/app/typings/curso';
import { CursosService } from '../cursos.service';

@Component({
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal;

  // cursos: Curso[];
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  // idCursoSelecionado: number;
  // deleteModalRef: BsModalRef;

  constructor(
    private service: CursosService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
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

  onDelete(id: number) {
    this.alertService
      .showConfirm('Remover Curso', 'Deseja remover o curso?')
      .asObservable()
      .pipe(
        take(1),
        switchMap((modalValue) =>
          modalValue ? this.service.remove(id) : EMPTY
        )
      )
      .subscribe(
        (success) => this.onRefresh(),
        (error) =>
          this.alertService.showAlertError('Não foi possível remover o curso')
      );
  }
}
