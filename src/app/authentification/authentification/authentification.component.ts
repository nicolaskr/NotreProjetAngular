import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api';
import { Compte } from 'src/app/model/compte';
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

  msgsCredentialIncorrect: Message[] = [];

  urlParameters: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authentificatService: AuthentificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((parameters) => {
      if (parameters.source) {
        this.urlParameters = parameters.source;
      }
    });

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

  ngOnInit(): void {
    this.msgsCredentialIncorrect = [
      {
        severity: 'info',
        summary: 'Credentials',
        detail: "Mot de passe ou nom d'utilisateur incorrect",
      },
    ];
  }

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
          let compte: Compte = new Compte(
            res.id,
            res.username,
            res.role,
            res.prenom,
            res.nom
          );
          localStorage.setItem('compte', JSON.stringify(compte));
          console.log(JSON.stringify(compte));
          if (this.urlParameters) {
            this.router.navigate(['/' + this.urlParameters]);
          } else {
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          console.log('error in sign in');
          this.formGroupAuth.setErrors({ credentialIncorrect: true });
        }
      );
  }
}
