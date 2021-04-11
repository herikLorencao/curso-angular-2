import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-properties-component',
  templateUrl: './input-output-properties-component.component.html',
  styleUrls: ['./input-output-properties-component.component.scss']/**
  inputs: ['nomeCurso: nome']
  */
})
export class InputOutputPropertiesComponentComponent implements OnInit {
  @Input('nome') nomeCurso: string;

  constructor() { }

  ngOnInit(): void {
  }

}
