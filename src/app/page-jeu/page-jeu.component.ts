import { Compte } from './../model/compte';
import { Partie } from './../model/partie';

import { SessionService } from './../services/session.service';
import { SessionBatiment } from './../model/session-batiment';
import { SessionRessource } from './../model/session-ressource';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
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

  idPartie: number = 1;

  finDeTourEvent: EventEmitter<string> = new EventEmitter();

  changementJoueur: boolean = false;
  boolFinDePartie: boolean = false;

  afficherMenuConstruction: boolean = false;
  afficherMenuAmelioration: boolean = false;
  afficherMenuTransformation: boolean = false;
  afficherMenuAttaque: boolean = false;

  constructor(
    private sessionService: SessionService,
    private sessionBatService: SessionBatimentService,
    private sessionResService: SessionRessourceService
  ) {
    this.sessions = this.sessionService.getByIdPartie(this.idPartie);
  }

  ngOnInit(): void {
    this.list();
    this.tirageRessource();
  }

  list() {
    console.log('list');
    this.sessions = this.sessionService.getByIdPartie(this.idPartie);
    this.sessionService
      .getByIdPartie(this.idPartie)
      .subscribe((res) => console.log(res));
  }

  clickFinDeTour(session: Session) {
    this.finDeTour();
    this.tirageRessource();
    this.finDeTourEvent.emit();
    this.finDePartie();
    this.sessions.subscribe((res) => {
      for (var session of res) {
        if (session.def <= 0) {
          this.sessionService
            .delete(session.id.partie.id, session.id.compte.id)
            .subscribe();
        }
      }
    });
    this.list();
  }

  ressourceBool(nom: string, sr: SessionRessource): boolean {
    if (sr.id.ressource.nom === nom) {
      return true;
    } else {
      return false;
    }
  }

  finDePartie() {
    this.sessions.subscribe((res) => {
      for (var session of res) {
        for (var sb of session.sessionBatiment) {
          if (sb.batiment.nom === 'Merveille' && sb.level == 5) {
            this.boolFinDePartie = true;
          }
        }
      }
      if (res.length == 1) {
        this.boolFinDePartie = true;
      }
    });
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
