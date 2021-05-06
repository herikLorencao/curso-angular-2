import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { Estado } from '../shared/typings/estado';
import { FormValidator } from '../shared/utils/form-validator';
import { ValidacaoEmailService } from './services/validacao-email.service';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.scss'],
})
export class DataDrivenComponent implements OnInit {
  // estados: Estado[];
  estados: Observable<Estado[]>;
  formulario: FormGroup;
  cargos: any[];
  tecnologias: any[];
  newsletterOpcoes: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Swelte'];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private ValidacaoEmailService: ValidacaoEmailService
  ) {}

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    // this.dropdownService
    //   .getEstadosBr()
    //   .subscribe((estados) => (this.estados = estados));

    this.estados = this.dropdownService.getEstadosBr();
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOpcoes = this.dropdownService.getNewsletter();

    this.formulario = this.formBuilder.group({
      nome: [
        null,
        [Validators.required, Validators.minLength(2), Validators.maxLength(5)],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        // Bind é necessário para o validador entender o escopo do service, poderia ser injetado por construtor
        // Caso o método recebesse algum parametro
        [this.validarEmailAssincrono.bind(this)],
      ],
      confirmarEmail: [null, [FormValidator.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidator.verificaCep]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologia: [null],
      newsletter: ['s'],
      termos: [null, [Validators.required, Validators.requiredTrue]],
      frameworks: this.buildCheckboxDinamico(),
    });

    this.formulario
      .get('endereco.cep')
      .statusChanges.pipe(
        distinctUntilChanged(),
        tap((value) => console.log(value)),
        switchMap((status) =>
          status === 'VALID'
            ? this.cepService.buscarCep(
                this.formulario.get('endereco.cep').value
              )
            : EMPTY
        )
      )
      .subscribe((dados) =>
        dados ? this.adicionarValoresFormulario(dados) : {}
      );
  }

  onSubmit() {
    let formValues = Object.assign({}, this.formulario.value);

    formValues = Object.assign(formValues, {
      frameworks: formValues.frameworks
        .map((v, i) => (v ? this.frameworks[i] : null))
        .filter((v) => v != null),
    });

    console.log(formValues);

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

  aplicaCssErroCep(campo: string) {
    return {
      'form-control': true,
      'is-invalid': this.verificaCampoCep(campo),
    };
  }

  verificaCampoValidTouched(nomeCampo: string): boolean {
    const campo = this.formulario.get(nomeCampo);
    return !campo.valid && campo.touched;
  }

  buscarCep() {
    const cepInput = this.formulario.get('endereco.cep');
    this.cepService
      .buscarCep(cepInput.value)
      .subscribe((dados) => this.adicionarValoresFormulario(dados));
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

  mudarCargo() {
    this.formulario
      .get('cargo')
      .setValue({ nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' });
  }

  mudarTecnologia() {
    this.formulario.get('tecnologia').setValue(['java, ruby']);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? obj1.desc == obj2.desc : obj1 === obj2;
  }

  buildCheckboxDinamico() {
    const valoresForm = this.frameworks.map(() => new FormControl(false));
    return this.formBuilder.array(
      valoresForm,
      FormValidator.requiredMinCheckbox()
    );
  }

  verificaRequired(nomeCampo: string) {
    const campo = this.formulario.get(nomeCampo);
    return campo.hasError('required');
  }

  verificaCampoCep(nomeCampo: string) {
    const campo = this.formulario.get(nomeCampo);
    return campo.hasError('cepInvalido');
  }

  validarEmailAssincrono(formControl: FormControl) {
    return this.ValidacaoEmailService.validar(formControl.value).pipe(
      map((emailExiste) => (emailExiste ? { emailInvalido: true } : null))
    );
  }
}
