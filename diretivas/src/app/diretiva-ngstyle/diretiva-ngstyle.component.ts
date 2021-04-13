import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {
  ativo: boolean = false;
  tamanhoFonte: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAtivo() {
    this.ativo = !this.ativo;
  }
}
