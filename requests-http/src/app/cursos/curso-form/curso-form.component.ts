import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';

@Component({
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})
export class CursoFormComponent extends BaseFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
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

  submit(values: any) {}
}
