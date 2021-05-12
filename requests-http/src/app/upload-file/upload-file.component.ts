import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  constructor(private componentRef: ElementRef) {}

  ngOnInit() {}

  onChange(event) {
    const label = <HTMLElement>(
      this.componentRef.nativeElement.querySelector('label')
    );
    const files = <FileList>event['srcElement']['files'];
    const fileNames = [];

    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
    }

    label.innerText = fileNames.join(', ');
  }
}
