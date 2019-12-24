import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthServiceService } from '../auth-service.service';
import { map, catchError } from 'rxjs/operators';


export default function existLoginValidator(authService: AuthServiceService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return authService.checkLogin(control.value).pipe(
      map(isExist => (isExist ? null : { alreadyExists: true })),
      catchError(() => null)
    );
  }
}
