import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';
import { SessionRessourceService } from '../services/session-ressource.service';
import { SessionBatimentService } from '../services/session-batiment.service';
import { Session } from '../model/session';

@Component({
  selector: 'app-page-spectateur',
  templateUrl: './page-spectateur.component.html',
  styleUrls: ['./page-spectateur.component.css'],
})
export class PageSpectateurComponent implements OnInit {
  player: Session = new Session();
  sessions: Session[] = [];
  waiters: Session[] = [];

  constructor(
    private SessionService: SessionService,
    private sessionBatService: SessionBatimentService,
    private sessionResService: SessionRessourceService
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.SessionService.getAll().subscribe((res) => {
      console.log(res);
      this.sessions = res;
    });
  }
}
