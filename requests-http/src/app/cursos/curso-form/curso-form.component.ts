import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
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
    private location: Location
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
    });
  }

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
