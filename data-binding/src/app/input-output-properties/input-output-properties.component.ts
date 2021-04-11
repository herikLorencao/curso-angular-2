import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.scss']
})
export class InputOutputPropertiesComponent implements OnInit {
  nome: string = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

}
