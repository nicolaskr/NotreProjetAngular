import { PageSpectateurComponent } from './../page-spectateur/page-spectateur.component';
import { Compte } from './../model/compte';
import { Partie } from './../model/partie';

import { SessionService } from './../services/session.service';
import { SessionBatiment } from './../model/session-batiment';
import { SessionRessource } from './../model/session-ressource';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Session } from '../model/session';
import { SessionBatimentService } from '../services/session-batiment.service';
import { SessionRessourceService } from '../services/session-ressource.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.css'],
})
export class PageJeuComponent implements OnInit {
  sessions: Observable<Session[]>;
  waiters: Session[] = [];

  finDeTourEvent: EventEmitter<string> = new EventEmitter();

  changementJoueur: boolean = false;

  afficherMenuConstruction: boolean = false;
  afficherMenuAmelioration: boolean = false;
  afficherMenuTransformation: boolean = false;
  afficherMenuAttaque: boolean = false;

  j1: Session | undefined;
  j2: Session | undefined;
  j3: Session | undefined;
  j4: Session | undefined;

  constructor(
    private sessionService: SessionService,
    private sessionBatService: SessionBatimentService,
    private sessionResService: SessionRessourceService
  ) {
    this.sessions = this.sessionService.getAll();
  }

  ngOnInit(): void {
    this.joueurs();
  }

  list() {
    console.log('list');
    this.sessions = this.sessionService.getAll();
  }

  joueurs() {
    this.sessionService.get(1, 2).subscribe((res) => {
      this.j1 = res;
      console.log(this.j1);
    });
    this.sessionService.get(1, 3).subscribe((res) => {
      this.j2 = res;
    });
    this.sessionService.get(1, 4).subscribe((res) => {
      this.j3 = res;
    });
    this.sessionService.get(1, 5).subscribe((res) => {
      this.j4 = res;
    });
  }

  clickFinDeTour(session: Session) {
    this.finDeTour();
    this.tirageRessource();
    this.list();

    this.finDeTourEvent.emit();
  }

  ressourceBool(nom: string, sr: SessionRessource): boolean {
    if (sr.id.ressource.nom === nom) {
      return true;
    } else {
      return false;
    }
  }

  finDeTour() {
    console.log(this.sessions);
    this.sessions.subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].tourEnCours) {
          console.log(i + 'fin de tour');
          this.sessionService.rotation(res[i]).subscribe();
          if (i == res.length - 1) {
            this.sessionService.rotation(res[0]).subscribe();
          } else {
            this.sessionService.rotation(res[i + 1]).subscribe();
          }
          this.sessionService.get;
          return;
        }
      }
    });
  }

  tirageRessource() {
    this.sessions.subscribe((res) => {
      for (var s of res) {
        if (s.tourEnCours) {
          this.sessionResService.piocher(s).subscribe((obs) => {
            console.log('pioche' + obs);
            this.changementJoueur = true;
          });
        }
      }
    });
  }

  clickConstruction() {
    this.afficherMenuConstruction = true;
    this.afficherMenuAmelioration = false;
    this.afficherMenuTransformation = false;
    this.afficherMenuAttaque = false;
  }

  clickAmelioration() {
    this.afficherMenuConstruction = false;
    this.afficherMenuAmelioration = true;
    this.afficherMenuTransformation = false;
    this.afficherMenuAttaque = false;
  }

  clickTransformation() {
    this.afficherMenuConstruction = false;
    this.afficherMenuAmelioration = false;
    this.afficherMenuTransformation = true;
    this.afficherMenuAttaque = false;
  }

  clickAttaque() {
    this.afficherMenuConstruction = false;
    this.afficherMenuAmelioration = false;
    this.afficherMenuTransformation = false;
    this.afficherMenuAttaque = true;
  }
}
