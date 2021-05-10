import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../typings/curso';
import { environment } from 'src/environments/environment';
import { delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = `${environment.api}/cursos`;

  constructor(private http: HttpClient) {}

  get(id: number) {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  list() {
    return this.http.get<Curso[]>(this.API).pipe(delay(2000));
  }

  create(curso) {
    return this.http.post(this.API, curso).pipe(take(1));
  }
}
