import { Router, ActivatedRoute } from '@angular/router';
import { BatimentTransformationService } from './../services/batiment-transformation.service';
import { BatimentDefenseService } from './../services/batiment-defense.service';
import { BatimentAttaqueService } from './../services/batiment-attaque.service';
import { Batiment } from 'src/app/model/batiment';
import { BatimentProductionService } from './../services/batiment-production.service';
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
import { delay } from 'rxjs/operators';

@Component({
  selector: 'page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.css'],
})
export class PageJeuComponent implements OnInit {
  sessions: Observable<Session[]>;
  batAttaque: Batiment[] = [];
  batDef: Batiment[] = [];
  batProd: Batiment[] = [];
  batTrans: Batiment[] = [];

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
    private sessionResService: SessionRessourceService,
    private attService: BatimentAttaqueService,
    private defService: BatimentDefenseService,
    private prodService: BatimentProductionService,
    private transService: BatimentTransformationService,
    private router: Router,
    private activRoute: ActivatedRoute
  ) {
    this.activRoute.paramMap.subscribe((params) => {
      this.idPartie = Number(params.get('id'));
      this.sessions = this.sessionService.getByIdPartie(this.idPartie!);
    });
    this.sessions = this.sessionService.getByIdPartie(this.idPartie!);
  }

  ngOnInit(): void {
    this.catBatiments();

    this.sessions.subscribe((res) => {
      let nvlPartie: boolean = true;
      for (var session of res) {
        if (session.tourEnCours == true) {
          nvlPartie = false;
        }
      }
      if (nvlPartie == true) {
        let rdm = Math.floor(Math.random() * res.length);
        console.log('initialisation des ressources et de la bastide');
        this.sessionService.rotation(res[rdm]).subscribe();
        this.sessionResService.init(this.idPartie).subscribe();
      }
      this.tirageRessource();
      this.list();
    });
  }

  catBatiments(): void {
    this.attService.getAll().subscribe((res) => {
      this.batAttaque = res;
    });
    this.defService.getAll().subscribe((res) => {
      this.batDef = res;
    });
    this.prodService.getAll().subscribe((res) => {
      this.batProd = res;
    });
    this.transService.getAll().subscribe((res) => {
      this.batTrans = res;
    });
  }

  list() {
    delay(1000);
    console.log('list');
    this.sessions = this.sessionService.getByIdPartie(this.idPartie!);
    this.sessionService
      .getByIdPartie(this.idPartie!)
      .subscribe((res) => console.log(res));
  }

  clickFinDeTour(session: Session) {
    this.finDeTour();
    this.tirageRessource();
    this.finDeTourEvent.emit();
    this.finDePartie();
    this.sessions.subscribe((res) => {
      for (var session of res) {
        if (session.sessionBatiment.length <= 0) {
          this.sessionService
            .delete(session.id.partie.id!, session.id.compte.id!)
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
            console.log('pioche');
            this.changementJoueur = true;
          });
          this.sessionResService.batProduction(s).subscribe();
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

  attaque(sb: SessionBatiment): boolean {
    for (var bat of this.batAttaque) {
      if (bat.nom === sb.batiment.nom) {
        return true;
      }
    }
    return false;
  }
  production(sb: SessionBatiment): boolean {
    for (var bat of this.batProd) {
      if (bat.nom === sb.batiment.nom) {
        return true;
      }
    }
    return false;
  }
  defense(sb: SessionBatiment): boolean {
    for (var bat of this.batDef) {
      if (bat.nom === sb.batiment.nom) {
        return true;
      }
    }
    return false;
  }
  transformation(sb: SessionBatiment): boolean {
    for (var bat of this.batTrans) {
      if (bat.nom === sb.batiment.nom) {
        return true;
      }
    }
    return false;
  }
}
