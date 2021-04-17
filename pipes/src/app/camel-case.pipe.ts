import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const words = value.split(' ');
    const result = words.map((word) => this.capitalize(word));
    return result.join(' ');
  }

  private capitalize(word: string) {
    const firstLetter = word.substr(0, 1);
    const othersLetters = word.substr(1);
    return firstLetter.toUpperCase() + othersLetters.toLowerCase();
  }
}
