import { SessionRessource } from './../model/session-ressource';
import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';
import { SessionRessourceService } from '../services/session-ressource.service';
import { SessionBatimentService } from '../services/session-batiment.service';
import { Session } from '../model/session';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-spectateur',
  templateUrl: './page-spectateur.component.html',
  styleUrls: ['./page-spectateur.component.css'],
})
export class PageSpectateurComponent implements OnInit {
  sessions: Observable<Session[]>;
  waiters: Session[] = [];

  constructor(
    private SessionService: SessionService,
    private sessionBatService: SessionBatimentService,
    private sessionResService: SessionRessourceService
  ) {
    this.sessions = this.SessionService.getAll();
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.sessions = this.SessionService.getAll();
  }

  ressourceBool(nom: string, sr: SessionRessource) {
    if (sr.id.ressource.nom === nom) {
      return true;
    } else {
      return false;
    }
  }
}
