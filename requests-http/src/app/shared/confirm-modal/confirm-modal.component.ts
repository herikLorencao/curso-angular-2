import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() confirmButtonLabel = 'Confirmar';
  @Input() cancelButtonLabel = 'Cancelar';

  state: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) {
    this.state = new Subject();
  }

  ngOnInit(): void {}

  onConfirm() {
    this.changeStateAndClose(true);
  }

  onCancel() {
    this.changeStateAndClose(false);
  }

  changeStateAndClose(value: boolean) {
    this.state.next(value);
    this.bsModalRef.hide();
  }
}
