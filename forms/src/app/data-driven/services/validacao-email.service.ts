import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ValidacaoEmailService {
  constructor(private httpClient: HttpClient) {}

  validar(email: string) {
    return this.httpClient.get('/assets/data/emails.json').pipe(
      // Delay para não ficar fazendo request toda hora (não funcionou como esperado)
      delay(5000),
      map((dados: { emails: any[] }) => dados.emails),
      map((dados: { email: string }[]) =>
        dados.filter((v) => v.email === email)
      ),
      map((dados: any[]) => dados.length > 0)
    );
  }
}
