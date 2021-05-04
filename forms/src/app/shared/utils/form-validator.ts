import { FormArray } from '@angular/forms';

export class FormValidator {
  static requiredMinCheckbox(min = 1) {
    return (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map((campo) => campo.value)
        .reduce((total, current) => (current ? total + 1 : total), 0);
      // Por padrão tem que retornar um objeto se for valido
      return totalChecked >= min ? null : { required: true };
    };
  }
}
