import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Curso } from 'src/app/typings/curso';
import { CursosService } from '../cursos.service';

@Component({
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})
export class CursoFormComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: CursosService,
    private modal: AlertService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    // Nesse caso em específico o próprio Angular faz o unsubscribe
    // this.route.params
    //   .pipe(
    //     map((params) => params['id']),
    //     switchMap((id) => this.service.get(id))
    //   )
    //   .subscribe((curso) => this.atualizaDadosFormulario(curso));

    // concatMap -> ordem da requisição importa
    // mergeMap -> ordem não importa
    // exhaustMap -> executa requisições na ordem de chamada (bom para fazer login)

    const curso = <Curso>this.route.snapshot.data['curso'];

    this.form = this.formBuilder.group({
      id: [curso.id],
      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
    });
  }

  // atualizaDadosFormulario(dados: Curso) {
  //   this.form.patchValue({
  //     id: dados.id,
  //     nome: dados.nome,
  //   });
  // }

  submit(values: any) {
    this.service.create(values).subscribe(
      (success) => {
        this.location.back();
        this.modal.showAlertSuccess('Curso criado com sucesso');
      },
      (error) => this.modal.showAlertError('Erro ao cadastrar o curso')
    );
  }
}
