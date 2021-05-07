import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from '../typings/estado';
import { Cidade } from '../typings/cidade';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private httpClient: HttpClient) {}

  getEstadosBr() {
    return this.httpClient.get<Estado[]>('assets/data/estados.json');
  }

  getCidadesPorEstado(estadoId: number) {
    return this.httpClient
      .get<Cidade[]>('assets/data/cidades.json')
      .pipe(
        map((cidades: Cidade[]) =>
          cidades.filter((cidade) => cidade.estado === estadoId)
        )
      );
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Júnior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' },
      { nome: 'Dev', nivel: 'Sênior', desc: 'Dev Sênior' },
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' },
      { nome: 'javascript', desc: 'Javascript' },
    ];
  }

  getNewsletter() {
    return [
      { nome: 's', desc: 'Sim' },
      { nome: 'n', desc: 'Não' },
    ];
  }
}
