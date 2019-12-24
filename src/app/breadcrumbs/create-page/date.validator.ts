import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as moment from "moment";


export default function validateDate(format = "DD/MM/YYYY"): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {

    const val = moment(control.value, format, true);

    if (!val.isValid()) {
      return { invalidDate: true };
    }

    return null;
  };
}
