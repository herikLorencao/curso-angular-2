import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.usuario);
  }

  verificaCampoValidTouched(campo: NgForm): boolean {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: NgForm) {
    return {
      'form-control': true,
      'is-invalid': this.verificaCampoValidTouched(campo),
    };
  }
}
