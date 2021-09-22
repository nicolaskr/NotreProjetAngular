import { Session } from './../../model/session';
import { PartieServiceService } from './../../services/partie-service.service';
import { Partie } from './../../model/partie';
import { SessionService } from './../../services/session.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Compte } from 'src/app/model/compte';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-charger-partie',
  templateUrl: './charger-partie.component.html',
  styleUrls: ['./charger-partie.component.css'],
})
export class ChargerPartieComponent implements OnInit {
  formGroupNouvellePartie: FormGroup;
  formControlPartie: FormControl;
  boolNouvelle: boolean = false;
  sessions: Session[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) {
    this.formControlPartie = this.formBuilder.control('', [
      Validators.required,
    ]);
    this.formGroupNouvellePartie = this.formBuilder.group({
      formControlPartie: this.formControlPartie,
    });
  }

  ngOnInit(): void {
    this.partie();
  }

  get idCompte(): number {
    if (localStorage.getItem('compte')) {
      let obj = JSON.parse(localStorage.getItem('compte')!);
      return obj._id;
    }
    throw console.error('pas de partie sur ce compte');
  }

  partie() {
    this.sessionService.getByIdCompte(2).subscribe((res) => {
      console.log(res);
      this.sessions = res;
    });
  }

  submit() {
    this.router.navigate(['/pagejeu']);
  }
}
