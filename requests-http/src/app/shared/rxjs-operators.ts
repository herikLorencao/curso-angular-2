import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<Object>) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}

export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress)
      cb((event.loaded / event.total) * 100);
  });
}
