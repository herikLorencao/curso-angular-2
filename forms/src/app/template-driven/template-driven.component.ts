import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.httpClient
      .post('https://httpbin.org/post', form.value)
      .subscribe((resp) => console.log(resp));
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

  buscarCep(cep: string, form: NgForm) {
    const cepFormatado = cep.replace(/\D/g, '');

    if (cepFormatado !== '') {
      const validacaoCep = /^[0-9]{8}$/;

      if (validacaoCep.test(cepFormatado)) {
        this.httpClient
          .get(`https://viacep.com.br/ws/${cepFormatado}/json`)
          .subscribe((dados) => this.adicionarValoresFormulario(form, dados));
      }
    }
  }

  adicionarValoresFormulario(formulario: NgForm, dados: any) {
    // Se quiser alterar o formulário inteiro
    // formulario.setValue({})

    formulario.form.patchValue({
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
