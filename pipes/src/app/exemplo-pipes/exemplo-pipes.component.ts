import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss'],
})
export class ExemploPipesComponent implements OnInit {
  livro: any = {
    title: 'Clean Code',
    rating: 4.532,
    pagesNumber: 120,
    price: 81.99,
    publishDate: new Date('2010-03-10'),
    url: 'http://cleancoder.com',
  };

  constructor() {}

  ngOnInit(): void {}
}
