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
import { MessageService, ConfirmationService } from 'primeng/api';
import { CompteServiceService } from 'src/app/services/compte-service.service';

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

  submitted: boolean = false;
  compte: Compte | null = null;
  selectedComptes: Compte[] = [];
  parties: Partie[] = [];
  partieInstance: Partie = new Partie();
  partieCreationDialog: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private compteService: CompteServiceService,
    private sessionService: SessionService,
    private partieService: PartieServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.formControlPartie = this.formBuilder.control('', [
      Validators.required,
    ]);
    this.formGroupNouvellePartie = this.formBuilder.group({
      formControlPartie: this.formControlPartie,
    });
  }

  ngOnInit(): void {
    this.getConnectedCompte();
    // this.partie();
  }

  get idCompte(): number {
    if (localStorage.getItem('compte')) {
      let obj = JSON.parse(localStorage.getItem('compte')!);
      return obj._id;
    }
    throw console.error('pas de partie sur ce compte');
  }

  getConnectedCompte() {
    if (this.idCompte) {
      this.compteService.getJoueurById(this.idCompte).subscribe(
        (data) => {
          this.compte = data;
          // console.log(this.compte);
          this.getSessionOfConnectedCompte();
        },
        (error) => {
          console.log('get connected compte');
        }
      );
    }
  }

  getSessionOfConnectedCompte() {
    if (this.idCompte) {
      this.sessionService.getByIdCompte(this.idCompte).subscribe(
        (data) => {
          this.sessions = data;
        },
        (error) => {
          console.log('getSessionOfConnectedCompte');
        }
      );
    }
  }

  partie() {
    this.sessionService.getByIdCompte(this.idCompte).subscribe((res) => {
      console.log(res);
      this.sessions = res;
    });
  }

  submit() {
    console.log(this.formControlPartie.value);
    this.router.navigate(['/pagejeu/' + this.formControlPartie.value]);
  }

  openNew() {
    this.partieInstance = new Partie();
    this.submitted = false;
    this.partieCreationDialog = true;
  }

  getSelectedComptes(selectedComptes: Compte[]) {
    this.selectedComptes = selectedComptes;
    // console.log(this.selectedComptes);
  }

  hideDialog() {
    this.partieCreationDialog = false;
    this.submitted = false;
  }

  savePartie() {
    this.submitted = true;
    // console.log(this.selectedComptes);
    // console.log(this.compte);
    // console.log(this.selectedComptes.indexOf(this.compte!));
    // console.log(this.containsObject());
    // if (this.selectedComptes.indexOf(this.compte!) === -1) { //does not work
    if (!this.containsObject()) {
      this.selectedComptes.push(this.compte!);
      // console.log(this.selectedComptes);
    }
    // console.log(this.selectedComptes.length === 0);
    if (this.selectedComptes.length > 1) {
      this.savePartieWithCompte();
    } else {
      this.chooseJoueurMessageService();
    }
  }

  resertAfterPartieAndSessionCreation() {
    this.selectedComptes = [];
    this.partieInstance = new Partie();
    this.partieCreationDialog = false;
  }

  savePartieWithCompte() {
    this.partieService.create(this.partieInstance).subscribe(
      (data) => {
        this.partieInstance = data;
        this.saveMessageService();
        this.saveSession();
        // this.partie();
        this.resertAfterPartieAndSessionCreation();
      },
      (error) => {
        console.log('error savePartieWithCompte');
      }
    );
  }

  saveSession() {
    // console.log('in save session');
    // console.log(this.selectedComptes);
    this.selectedComptes.forEach((compte) => {
      // console.log(this.partie);
      // console.log(compte);
      if (this.partieInstance.id && compte.id) {
        this.sessionService.post(this.partieInstance, compte).subscribe(
          (data) => {
            this.getSessionOfConnectedCompte();
            this.saveSessionMessageService();
          },
          (error) => {
            console.log('savePartieWithCompte');
          }
        );
      }
    });
  }

  savePartieWithoutCompte() {
    this.partieService.create(this.partieInstance).subscribe(
      (data) => {
        this.partieInstance = data;
        this.partie();
        this.saveMessageService();
        this.resertAfterPartieAndSessionCreation();
      },
      (error) => {
        console.log('error create PartieService');
      }
    );
  }

  saveSessionMessageService() {
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Session Created',
      life: 3000,
    });
  }

  saveMessageService() {
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Partie Created',
      life: 3000,
    });
  }

  chooseJoueurMessageService() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Choississez au moins un adversaire',
      life: 3000,
    });
  }

  containsObject(): boolean {
    var i;
    for (i = 0; i < this.selectedComptes.length; i++) {
      if (this.selectedComptes[i].id === this.compte!.id) {
        return true;
      }
    }

    return false;
  }
}
