import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentfication/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent implements OnInit {
  formGroupAuth: FormGroup;
  formControlUsername: FormControl;
  formControlPassword: FormControl;
  formControlRememberMe: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private authentificatService: AuthentificationService
  ) {
    this.formControlUsername = this.formBuilder.control(
      '',
      Validators.required
    );

    this.formControlPassword = this.formBuilder.control(
      '',
      Validators.required
    );

    this.formControlRememberMe = this.formBuilder.control('');

    this.formGroupAuth = this.formBuilder.group({
      formControlUsername: this.formControlUsername,
      formControlPassword: this.formControlPassword,
      formControlRememberMe: this.formControlRememberMe,
    });
  }

  ngOnInit(): void {}

  submit() {
    this.authentificatService
      .signIn(this.formControlUsername.value, this.formControlPassword.value)
      .subscribe(
        (res) => {
          localStorage.setItem(
            'token',
            btoa(
              this.formControlUsername.value +
                ':' +
                this.formControlPassword.value
            )
          );
          localStorage.setItem('username', res.username);
        },
        (error) => {
          console.log('error in sign in');
        }
      );
  }
}
