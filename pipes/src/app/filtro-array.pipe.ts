import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
})
export class FiltroArrayPipe implements PipeTransform {
  transform(value: string[], args?: string): string[] {
    if (value.length === 0 || !args) return value;
    const filterWord = args.toLowerCase();
    return value.filter((word) => word.toLowerCase().includes(filterWord));
  }
}
