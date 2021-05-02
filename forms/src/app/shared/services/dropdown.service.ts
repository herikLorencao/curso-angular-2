import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from '../typings/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private httpClient: HttpClient) {}

  getEstadosBr() {
    return this.httpClient.get('assets/data/estados.json');
  }
}
