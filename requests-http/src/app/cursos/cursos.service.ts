import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud-service';
import { Curso } from '../typings/curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService extends CrudService<Curso> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, `${environment.api}/cursos`);
  }
}
