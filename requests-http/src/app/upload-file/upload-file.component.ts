import {
  HttpEvent,
  HttpEventType,
  HttpUploadProgressEvent,
} from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filterResponse, uploadProgress } from '../shared/rxjs-operators';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit, OnDestroy {
  files: Set<File>;
  uploadSubscription$: Subscription;
  percentageUpload = 0;

  constructor(
    private componentRef: ElementRef,
    private uploadService: UploadFileService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.uploadSubscription$.unsubscribe();
  }

  onChange(event) {
    const label = <HTMLElement>(
      this.componentRef.nativeElement.querySelector('label')
    );
    const files = event['srcElement']['files'];
    const fileNames = [];

    this.files = new Set();

    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
      this.files.add(files[i]);
    }

    label.innerText = fileNames.join(', ');
  }

  uploadFile() {
    if (this.files && this.files.size > 0) {
      const serverUrl = '/api/upload';
      // No caso por ter CORS o take(1) não vai funcionar
      this.uploadSubscription$ = this.uploadService
        .upload(this.files, serverUrl)
        .pipe(
          uploadProgress((progress) => (this.percentageUpload = progress)),
          filterResponse()
        )
        .subscribe((resp) => console.log('Upload concluído'));
    }
  }

  download() {
    const serverUrl = '/api/download';
    this.uploadService
      .download(serverUrl, 'example.txt')
      .subscribe((resp: any) =>
        this.uploadService.handleDownloadFile(resp, 'example.txt')
      );
  }
}
