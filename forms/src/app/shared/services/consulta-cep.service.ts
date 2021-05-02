import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {
  constructor(private httpClient: HttpClient) {}

  buscarCep(cep: string) {
    const cepFormatado = cep.replace(/\D/g, '');
    const validacaoCep = /^[0-9]{8}$/;

    if (cepFormatado !== '' && validacaoCep.test(cepFormatado))
      return this.httpClient.get(
        `https://viacep.com.br/ws/${cepFormatado}/json`
      );

    return of({});
  }
}
