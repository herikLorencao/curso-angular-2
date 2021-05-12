import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs/operators';
import { Resource } from '../typings/resource';

export class CrudService<T extends Resource> {
  constructor(protected http: HttpClient, private api: string) {}

  get(id: number) {
    return this.http.get<T>(`${this.api}/${id}`).pipe(take(1));
  }

  list() {
    return this.http.get<T[]>(this.api).pipe(delay(2000));
  }

  save(resource: T) {
    if (resource.id) return this.update(resource);
    return this.create(resource);
  }

  remove(id: number) {
    return this.http.delete(`${this.api}/${id}`).pipe(take(1));
  }

  private create(resource: T) {
    return this.http.post(this.api, resource).pipe(take(1));
  }

  private update(resource: T) {
    return this.http.put(`${this.api}/${resource.id}`, resource).pipe(take(1));
  }
}
