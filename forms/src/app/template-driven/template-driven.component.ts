import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

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

  constructor(
    private httpClient: HttpClient,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.httpClient
      .post('https://httpbin.org/post', form.value)
      .subscribe((resp) => {
        console.log(resp);
        form.form.reset();
      });
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
    this.cepService
      .buscarCep(cep)
      .subscribe((dados) => this.adicionarValoresFormulario(form, dados));
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
