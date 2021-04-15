import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.scss']
})
export class DiretivaCustomizadaComponent implements OnInit {
  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
