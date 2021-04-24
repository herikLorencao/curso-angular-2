import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  private eventListener: EventListener;
  alunos: any[];

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.alunos = this.alunosService.list();
  }
}
