import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url = 'https://loraine.training';
  cursoAngular = true;
  urlImagem = 'https://blog.trainning.com.br/wp-content/uploads/2018/06/Why-AngularJS-A1.jpg'

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1 + 1;
  }

  getCurtirCurso() {
    return true;
  }
}
