import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function isNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const reg = /^\d+$/;

    if(!reg.test(control.value)) {
      return { invalidLength: true };
    }
    return null;
  };
}
