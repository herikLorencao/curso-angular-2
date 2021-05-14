import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor(private httpClient: HttpClient) {}

  upload(files: Set<File>, url: string) {
    const formData = new FormData();
    files.forEach((file) => formData.append('file', file, file.name));

    // const httpRequest = new HttpRequest('POST', url, files);
    // reportProgress: para conseguir ver % no upload
    return this.httpClient.post<FormData>(url, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  download(url: string, fileName: string) {
    return this.httpClient.get(url, {
      responseType: 'blob' as 'json',
    });
  }

  handleDownloadFile(resp: Blob, fileName: string) {
    const file = new Blob([resp], {
      type: resp.type,
    });

    // Internet Explorer
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
    }

    const blob = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName;

    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    setInterval(() => {
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }
}
