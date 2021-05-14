import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Library } from 'src/app/typings/library';
import { BuscaService } from '../busca.service';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss'],
})
export class LibSearchComponent implements OnInit {
  queryField = new FormControl();
  resultados$: Observable<Library[]>;
  totalRegistros = 0;

  constructor(private service: BuscaService) {}

  ngOnInit(): void {}

  onSearch() {
    this.resultados$ = this.service.pesquisar(this.queryField.value).pipe(
      tap((res: any) => (this.totalRegistros = res.total)),
      map((res: any) => res.results),
      switchMap((res: Library[]) => of(res))
    );
  }
}
