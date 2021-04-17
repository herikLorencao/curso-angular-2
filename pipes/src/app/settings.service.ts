import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private PORTUGUESE_LOCALE = 'pt-BR';

  constructor() {}

  getLocale() {
    return this.PORTUGUESE_LOCALE;
  }
}
