import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

  static equalsTo(otherField: string) {
    return (formControl: FormControl) => {
      if (!otherField) throw new Error('É necessário informar o campo');

      if (!formControl.root || !(<FormGroup>formControl.root).controls)
        return null;

      const field = (<FormGroup>formControl.root).get(otherField);
      return field.value === formControl.value ? null : { equalsTo: false };
    };
  }

  static getErrorMsg(
    fieldName: string,
    validatorName: string,
    validatorValue?: any
  ) {
    const config = {
      required: `${fieldName} é obrigatório`,
      minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength}`,
      maxlength: `${fieldName} precisa ter no máximo ${validatorValue.requiredLength}`,
      cepInvalido: `CEP Inválido`,
    };

    return config[validatorName];
  }
}
