import { BatimentService } from './../../services/batiment.service';
import { Compte } from './../../model/compte';
import { Partie } from './../../model/partie';
import { Batiment } from './../../model/batiment';
import { SessionBatimentService } from './../../services/session-batiment.service';
import { SessionBatiment } from './../../model/session-batiment';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Session } from 'src/app/model/session';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-menu-construction',
  templateUrl: './menu-construction.component.html',
  styleUrls: ['./menu-construction.component.css'],
})
export class MenuConstructionComponent implements OnInit {
  @Input('session')
  sessionActive: Session | undefined;

  batimentsConstructibles: Batiment[] = [];
  choixBatiment: number = 0;
  @Output()
  constructionEvent: EventEmitter<string> = new EventEmitter();

  constructor(
    private sessionBatimentService: SessionBatimentService,
    private batimentService: BatimentService
  ) {}

  ngOnInit(): void {
    this.listBatimentsConstructibles();
  }

  listBatimentsConstructibles() {
    this.sessionBatimentService
      .getBatimentsConstructibles(this.sessionActive!)
      .subscribe((res) => {
        this.batimentsConstructibles = res;
        console.log(res);
      });
  }

  save() {
    this.sessionBatimentService
      .construire(this.sessionActive!, this.choixBatiment)
      .subscribe();
    this.constructionEvent.emit();
  }
}
