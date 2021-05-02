import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from '../typings/estado';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private httpClient: HttpClient) {}

  getEstadosBr() {
    return this.httpClient.get<Estado[]>('assets/data/estados.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Júnior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' },
      { nome: 'Dev', nivel: 'Sênior', desc: 'Dev Sênior' },
    ];
  }
}
