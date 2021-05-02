import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.scss'],
})
export class DataDrivenComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.httpClient
        .post('https://httpbin.org/post', this.formulario.value)
        .subscribe(
          (resp) => {
            console.log(resp);
            this.resetar();
          },
          (erro) => alert('Ocorreu um erro')
        );
    } else {
      this.verificaCamposFormulario(this.formulario);
    }
  }

  verificaCamposFormulario(formGroup: FormGroup) {
    console.log(formGroup);
    Object.keys(formGroup.controls).forEach((campo) => {
      const control = formGroup.get(campo);
      if (control instanceof FormGroup) this.verificaCamposFormulario(control);
      if (!control.valid) control.markAsDirty();
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
    return (!campo.valid && campo.touched) || campo.dirty;
  }

  buscarCep() {
    const cepInput = this.formulario.get('endereco.cep');
    const cepFormatado = cepInput.value.replace(/\D/g, '');

    if (cepFormatado !== '') {
      const validacaoCep = /^[0-9]{8}$/;

      if (validacaoCep.test(cepFormatado)) {
        this.httpClient
          .get(`https://viacep.com.br/ws/${cepFormatado}/json`)
          .subscribe((dados) => this.adicionarValoresFormulario(dados));
      }
    }
  }

  adicionarValoresFormulario(dados: any) {
    // Se quiser alterar o formulário inteiro
    // formulario.setValue({})

    this.formulario.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }
}
