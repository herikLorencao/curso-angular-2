import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent {
  formulario: FormGroup;

  constructor() {}

  abstract submit();

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      this.verificaCamposFormulario(this.formulario);
    }
  }

  verificaCamposFormulario(formGroup: FormGroup | FormArray) {
    console.log(formGroup);
    Object.keys(formGroup.controls).forEach((campo) => {
      const control = formGroup.get(campo);
      if (control instanceof FormGroup || control instanceof FormArray)
        this.verificaCamposFormulario(control);
      if (!control.valid) control.markAsTouched();
    });
  }

  resetar() {
    this.formulario.reset();
  }

  aplicaCssErro(campo: string) {
    return {
      'form-control': true,
      'is-invalid': this.verificaCampoValidTouched(campo),
    };
  }

  verificaCampoValidTouched(nomeCampo: string): boolean {
    const campo = this.formulario.get(nomeCampo);
    return !campo.valid && campo.touched;
  }

  verificaRequired(nomeCampo: string) {
    const campo = this.formulario.get(nomeCampo);
    return campo.hasError('required');
  }
}
