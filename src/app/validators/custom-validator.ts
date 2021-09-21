import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { AsyncSubject, Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentfication/authentification.service';
import { debounceTime, map } from 'rxjs/operators';

export class CustomValidator {
  static authentificationService: AuthentificationService;

  public static controlFormGroupPasswordEquals(
    formGroup: AbstractControl
  ): ValidationErrors | null {
    let key1 = 'formControlPassword';
    let key2 = 'formControlPasswordConfirmation';
    if (formGroup.get(key1)?.errors) {
      return null;
    }
    let value1 = formGroup.get(key1)?.value;
    let value2 = formGroup.get(key2)?.value;
    return value1 != value2 ? { passwordConfirmatioNotEquals: true } : null;
  }

  public static controlIsUsernameInDatabase(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authentificationService
        .usernameIsInDataBase(control.value)
        .pipe(
          debounceTime(1000),
          map((res: boolean) => {
            return res ? { isPresent: true } : null;
          })
        );
    };
  }
}
