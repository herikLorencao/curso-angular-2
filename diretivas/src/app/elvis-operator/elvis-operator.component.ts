import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.scss']
})
export class ElvisOperatorComponent implements OnInit {

  tarefa: any = {
    description: 'Nome da tarefa',
    admin: null,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
