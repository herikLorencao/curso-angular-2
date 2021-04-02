import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[] = ['Java', 'Angular', 'Ext JS'];

  constructor() {
    this.nomePortal = 'https://loiane.training'
  }

  ngOnInit() {}
}
