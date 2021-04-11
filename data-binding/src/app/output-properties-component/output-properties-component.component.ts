import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-properties-component.component.html',
  styleUrls: ['./output-properties-component.component.scss']/*,
  outputs: ['valor']*/
})
export class OutputPropertiesComponentComponent implements OnInit {
  @Input() valor: number;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
