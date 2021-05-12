import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertTypes } from '../../typings/alert-types';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { AlertComponent } from './alert.component';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private modalService: BsModalService) {}

  private showAlert(message: string, type: AlertTypes, dismissTime?: number) {
    const bsModalRef = this.modalService.show(AlertComponent);
    bsModalRef.content.message = message;
    bsModalRef.content.type = type;

    if (dismissTime) {
      setInterval(() => bsModalRef.hide(), dismissTime);
    }
  }

  showAlertError(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }

  showConfirm(
    title: string,
    message: string,
    confirmBtnLabel?: string,
    cancelBtnLabel?: string
  ) {
    const confirmModalRef = this.modalService.show(ConfirmModalComponent);
    confirmModalRef.content.title = title;
    confirmModalRef.content.message = message;

    if (confirmBtnLabel)
      confirmModalRef.content.confirmButtonLabel = confirmBtnLabel;
    if (cancelBtnLabel)
      confirmModalRef.content.cancelButtonLabel = cancelBtnLabel;

    return confirmModalRef.content.state;
  }
}
