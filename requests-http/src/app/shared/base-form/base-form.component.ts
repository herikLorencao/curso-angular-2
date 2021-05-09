import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldError } from 'src/app/typings/field-error';
import { InputErrors } from 'src/app/typings/input-errors';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  abstract submit(values: any);

  onSubmit() {
    if (this.form.valid) this.submit(this.form.value);
  }

  onCancel() {
    this.form.reset();
  }

  handleValidCssField(fieldName: string) {
    return {
      'is-invalid': this.isInvalidField(fieldName),
      'is-valid': this.isValidField(fieldName),
    };
  }

  getErrorMessage(fieldName: string): string[] {
    const errors = this.handleFieldErrors(fieldName);

    if (errors.length === 0) return [];
    return errors.map(this.mountErrorMessageForField);
  }

  private isInvalidField(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return field.touched && !!field.errors;
  }

  private isValidField(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return field.touched || !field.errors;
  }

  private handleFieldErrors(fieldName: string): FieldError[] {
    const field = this.form.get(fieldName);
    const errors = [];

    if (!field.errors) return errors;
    const errorFieldNames = Object.keys(field.errors);
    return errorFieldNames.map((errorName) => ({
      error: errorName.toUpperCase(),
      content: field.errors[errorName],
    }));
  }

  private mountErrorMessageForField(fieldError: FieldError): string {
    const message = InputErrors[fieldError.error];
    if (!message) return 'Campo inválido';

    if (message.includes('${}')) {
      if (fieldError.content instanceof Object) {
        const keys = Object.keys(fieldError.content);
        return message.replace('${}', fieldError.content[keys[0]]);
      }
      return message.replace('${}', fieldError.content);
    }

    return message;
  }
}
