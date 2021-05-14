import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
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

  ngOnInit(): void {
    this.resultados$ = this.queryField.valueChanges.pipe(
      map((value: string) => value.trim()),
      filter((value) => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value) => this.service.pesquisar(value)),
      tap((res: any) => (this.totalRegistros = res.total)),
      map((res: any) => <Library[]>res.results)
    );
  }

  onSearch() {
    this.resultados$ = this.service.pesquisar(this.queryField.value).pipe(
      tap((res: any) => (this.totalRegistros = res.total)),
      map((res: any) => res.results),
      switchMap((res: Library[]) => of(res))
    );
  }
}
