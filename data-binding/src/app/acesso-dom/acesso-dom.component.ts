import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acesso-dom',
  templateUrl: './acesso-dom.component.html',
  styleUrls: ['./acesso-dom.component.scss']
})
export class AcessoDomComponent implements OnInit {
  @ViewChild('contadorInput') inputElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.inputElement.nativeElement.value++;
  }

  decrement() {
    this.inputElement.nativeElement.value--;
  }
}
