import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Compte } from 'src/app/model/compte';
import { Role } from 'src/app/model/role';
import { CompteDto } from 'src/app/modelDto/compte-dto';
import { AuthentificationService } from 'src/app/services/authentfication/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  formGroupInscription: FormGroup;
  formGroupPassword: FormGroup;
  formControlPrenom: FormControl;
  formControlNom: FormControl;
  formControlUsername: FormControl;
  formControlPassword: FormControl;
  formControlPasswordConfirmation: FormControl;

  msgsInputRequiered: Message[] = [];
  msgsMinLength: Message[] = [];
  msgsUsernameAlreadyPresent: Message[] = [];
  msgsPasswordPattern: Message[] = [];
  msgsPasswordNotEquals: Message[] = [];

  urlParameters: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((parameters) => {
      if (parameters.source) {
        this.urlParameters = parameters.source;
      }
    });

    this.formControlPrenom = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.formControlNom = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.formControlUsername = this.formBuilder.control(
      '',
      [Validators.required],
      // CustomValidator.controlIsUsernameInDatabase // n'a pas l'air de marcher avec un fonctionnement async
      this.controlIsUsernameInDatabase()
    );

    this.formControlPassword = this.formBuilder.control('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/
      ),
    ]);

    this.formControlPasswordConfirmation = this.formBuilder.control('', [
      Validators.required,
    ]);
    // this.formControlPasswordConfirmation = this.formBuilder.control(
    //   null,
    //   Validators.compose([Validators.required])
    // );

    this.formGroupPassword = this.formBuilder.group(
      {
        formControlPassword: this.formControlPassword,
        formControlPasswordConfirmation: this.formControlPasswordConfirmation,
      },
      { validators: this.controlFormGroupPasswordEquals }
      // { validators: CustomValidator.controlFormGroupPasswordEquals }
    );

    this.formGroupInscription = this.formBuilder.group({
      formControlPrenom: this.formControlPrenom,
      formControlNom: this.formControlNom,
      formControlUsername: this.formControlUsername,
      formGroupPassword: this.formGroupPassword,
    });
  }

  ngOnInit(): void {
    this.msgsInputRequiered = [
      {
        severity: 'error',
        summary: 'Requiered Error',
        detail: 'le champ est requis',
      },
    ];

    this.msgsMinLength = [
      {
        severity: 'error',
        summary: 'Min length Error',
        detail: 'A minima deux caracters',
      },
    ];

    this.msgsUsernameAlreadyPresent = [
      {
        severity: 'error',
        summary: 'Username Error',
        detail: "Ce nom d'utilisateur est deja utilise",
      },
    ];
    this.msgsPasswordPattern = [
      {
        severity: 'error',
        summary: 'Password Error',
        detail:
          '8 caracteres minimum avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractere special',
      },
    ];

    this.msgsPasswordNotEquals = [
      {
        severity: 'warn',
        summary: 'Password Warning',
        detail: 'les mots de passe ne sont pas identiques',
      },
    ];
  }

  submit() {
    let compteDto = new CompteDto(
      this.formControlUsername.value,
      this.formControlPassword.value,
      Role['ROLE_JOUEUR'],
      this.formControlPrenom.value,
      this.formControlNom.value
    );
    this.authentificationService.signUp(compteDto).subscribe((answer) => {
      if (this.urlParameters) {
        this.router.navigate(['/' + this.urlParameters]);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  controlIsUsernameInDatabase(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authentificationService
        .usernameIsInDataBase(control.value)
        .pipe(
          map((res: boolean) => {
            return res ? { isPresent: true } : null;
          })
        );
    };
  }

  controlFormGroupPasswordEquals(
    formGroup: AbstractControl
  ): ValidationErrors | null {
    let key1 = 'formControlPassword';
    let key2 = 'formControlPasswordConfirmation';
    if (formGroup.get(key1)?.errors) {
      return null;
    }
    let value1 = formGroup.get(key1)?.value;
    let value2 = formGroup.get(key2)?.value;
    let output =
      value1 != value2 ? { passwordConfirmatioNotEquals: true } : null;
    // formGroup.get(key2)!.setErrors({ passwordConfirmatioNotEquals: true });
    return output;
  }
}
