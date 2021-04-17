import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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

  livros = ['Java', 'Angular'];
  filtro = '';

  valorAssincrono = new Promise((resolve, reject) => {
    setInterval(() => resolve('Valor assíncrono'), 2000);
  });

  constructor() {}

  ngOnInit(): void {}

  addLivro(livro: string) {
    this.livros.push(livro);
  }

  obterLivrosFiltrados() {
    if (this.livros.length === 0 || !this.filtro || this.filtro.trim() === '')
      return this.livros;
    const filterWord = this.filtro.toLowerCase();
    return this.livros.filter((word) =>
      word.toLowerCase().includes(filterWord)
    );
  }
}
