import { SessionService } from './../../services/session.service';
import { SessionBatimentService } from './../../services/session-batiment.service';
import { SessionBatiment } from './../../model/session-batiment';
import { Session } from 'src/app/model/session';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu-attaque',
  templateUrl: './menu-attaque.component.html',
  styleUrls: ['./menu-attaque.component.css'],
})
export class MenuAttaqueComponent implements OnInit {
  @Input('session')
  sessionActive: Session | undefined;

  @Output()
  attaqueEvent: EventEmitter<string> = new EventEmitter();

  batimentsAttaque: SessionBatiment[] = [];
  choixBatimentAttaque: number = 0;

  listeJoueur: Session[] = [];
  choixCible: number = 0;

  batimentsCible: SessionBatiment[] = [];
  choixBatimentCible: number = 0;

  constructor(
    private sessionBatimentService: SessionBatimentService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.listBatimentsAttaque();
  }

  listBatimentsAttaque() {
    this.sessionBatimentService
      .getBatimentsAttaque(this.sessionActive!)
      .subscribe((res) => {
        this.batimentsAttaque = res;
      });
  }

  listJoueur() {
    this.sessionService
      .getByIdPartie(this.sessionActive!.id.partie.id!)
      .subscribe((res) => {
        this.listeJoueur = res;
      });
  }

  listBatimentsCible() {
    this.sessionService
      .get(this.sessionActive!.id.partie.id!, this.choixCible)
      .subscribe((session) => {
        this.sessionBatimentService.getBySession(session).subscribe((res) => {
          this.batimentsCible = res;
        });
      });
  }

  save() {
    if (this.choixBatimentAttaque == -1) {
      if (this.choixBatimentCible == -1) {
        this.sessionBatimentService
          .attaqueAllWithAll(this.sessionActive!, this.choixCible)
          .subscribe();
      } else {
        this.sessionBatimentService
          .attaqueOneWithAll(
            this.sessionActive!,
            this.choixCible,
            this.choixBatimentCible
          )
          .subscribe();
      }
    } else {
      if (this.choixBatimentCible == -1) {
        this.sessionBatimentService
          .attaqueAllWithOne(
            this.sessionActive!,
            this.choixBatimentAttaque,
            this.choixCible
          )
          .subscribe();
      } else {
        this.sessionBatimentService
          .attaqueOneWithOne(
            this.sessionActive!,
            this.choixBatimentAttaque,
            this.choixCible,
            this.choixBatimentCible
          )
          .subscribe();
      }
    }
    this.attaqueEvent.emit();
  }
}
