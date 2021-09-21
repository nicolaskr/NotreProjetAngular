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
import { Component, OnInit, Input } from '@angular/core';

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

  constructor(
    private fb: FormBuilder,
    private sessionBatimentService: SessionBatimentService,
    private sessionRessourceService: SessionRessourceService,
    private transformationRessourceService: TransformationRessourceService
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

  listSessionRessources() {
    this.sessionRessourceService
      .getBySession(this.sessionActive!)
      .subscribe((res) => {
        this.sessionRessources = res;
      });
  }

  maximum(id: number) {
    this.transformationRessourceService.get(id).subscribe((res) => {
      console.log(res);
      this.choixTransformation = res.id;
      let tr = res;
      for (var sr of this.sessionRessources) {
        if (sr.id.ressource.nom === tr.ressourceLost.nom) {
          this.quantiteMax = sr.quantite;
        }
      }
    });
  }

  save() {
    this.sessionRessourceService.transformer(
      this.sessionActive!,
      this.choixTransformation,
      this.quantite
    ).subscribe();
  }
}
