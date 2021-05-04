import { FormArray, FormControl } from '@angular/forms';

export class FormValidator {
  static requiredMinCheckbox(min = 1) {
    return (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map((campo) => campo.value)
        .reduce((total, current) => (current ? total + 1 : total), 0);
      // Por padrão tem que retornar um objeto para erro
      return totalChecked >= min ? null : { required: true };
    };
  }

  static verificaCep(control: FormControl) {
    const cep = control.value;

    if (cep && cep !== '') {
      const validacaoCep = /^[0-9]{8}$/;
      // Passando erro personalizado
      return validacaoCep.test(cep) ? null : { cepInvalido: true };
    }

    // Caso de sucesso (Required cuidará desse caso)
    return null;
  }
}
