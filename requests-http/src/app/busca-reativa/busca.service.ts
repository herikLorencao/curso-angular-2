import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuscaService {
  readonly API_URL = 'https://api.cdnjs.com/libraries';
  fields = 'name,description,version,homepage';

  constructor(private http: HttpClient) {}

  pesquisar(termo: string) {
    const params = this.montarParametros(termo);
    return this.http.get(this.API_URL, { params });
  }

  private montarParametros(searchValue: string): HttpParams {
    let httpParams = new HttpParams();
    // o httpParams é estático por isso precisa reatribuir
    httpParams = httpParams.set('search', searchValue);
    return httpParams.set('fields', this.fields);
  }
}
