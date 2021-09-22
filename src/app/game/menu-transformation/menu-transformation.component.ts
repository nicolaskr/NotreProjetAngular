import { BatimentService } from './../../services/batiment.service';
import { TransformationRessourceService } from './../../services/transformation-ressource.service';
import { Compte } from './../../model/compte';
import { Partie } from './../../model/partie';
import { SessionRessourceService } from './../../services/session-ressource.service';
import { TransformationRessource } from './../../model/transformation-ressource';
import { SessionRessource } from './../../model/session-ressource';
import { SessionBatimentService } from './../../services/session-batiment.service';
import { SessionBatiment } from 'src/app/model/session-batiment';
import { Session } from './../../model/session';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-transformation',
  templateUrl: './menu-transformation.component.html',
  styleUrls: ['./menu-transformation.component.css'],
})
export class MenuTransformationComponent implements OnInit {
  @Input('session')
  sessionActive: Session | undefined;

  batimentsTransformation: SessionBatiment[] = [];
  sessionRessources: SessionRessource[] = [];

  selectionTransformation: TransformationRessource | undefined;
  quantiteMax: number = 0;

  quantite: number = 0;
  choixTransformation: number = 0;
  choixBatiment: number = 0;

  transformationRessources: TransformationRessource[] = [];
  choixTr: number = 0;

  @Output()
  transformationEvent: EventEmitter<string> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private sessionBatimentService: SessionBatimentService,
    private sessionRessourceService: SessionRessourceService,
    private transformationRessourceService: TransformationRessourceService,
    private batimentService: BatimentService
  ) {}

  ngOnInit(): void {
    this.listBatimentsTransformation();
  }

  listBatimentsTransformation() {
    this.sessionBatimentService
      .getBatimentsTransformation(this.sessionActive!)
      .subscribe((res) => {
        this.batimentsTransformation = res;
      });
  }

  listTransformationRessources() {
    this.batimentService.get(this.choixBatiment).subscribe((res) => {
      this.transformationRessourceService.getAll(this.choixBatiment).subscribe((res2) => {
        this.transformationRessources = res2;
      });
    });
  }

  listSessionRessources() {
    this.sessionRessourceService
      .getBySession(this.sessionActive!)
      .subscribe((res) => {
        this.sessionRessources = res;
      });
  }

  maximum() {
    this.transformationRessourceService.get(this.choixTr).subscribe((res) => {
      this.choixTransformation = res.id;
      this.sessionRessourceService.getBySession(this.sessionActive!).subscribe((srSession) => {
        for (var sr of srSession) {
          if (sr.id.ressource.nom === res.ressourceLost.nom) {
            this.quantiteMax = sr.quantite;
          }
        }
      });
    });
  }

  save() {
    this.sessionRessourceService
      .transformer(this.sessionActive!, this.choixTransformation, this.quantite)
      .subscribe();
    this.transformationEvent.emit();
  }
}
