import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      nome: [null],
      email: [null],
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.httpClient
      .post('https://httpbin.org/post', this.formulario.value)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.resetar();
        },
        (erro) => alert('Ocorreu um erro')
      );
  }

  resetar() {
    this.formulario.reset();
  }
}
