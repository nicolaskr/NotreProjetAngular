import { TransformationRessourceService } from './../../services/transformation-ressource.service';
import { SessionRessourceService } from './../../services/session-ressource.service';
import { BatimentService } from './../../services/batiment.service';
import { Ressource } from './../../model/ressource';
import { TransformationRessource } from './../../model/transformation-ressource';
import { SessionBatimentService } from './../../services/session-batiment.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Batiment } from './../../model/batiment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'transformer-ressource',
  templateUrl: './transformer-ressource.component.html',
  styleUrls: ['./transformer-ressource.component.css']
})
export class TransformerRessourceComponent implements OnInit {

  @Input('idBatiment')
  idBatiment: number = 0;

  @Output()
  transformEvent: EventEmitter<number> = new EventEmitter();

  transformationRessources: TransformationRessource[] = [];
  choix: number = 0;

  constructor(private transformationRessourceService: TransformationRessourceService, private batimentService: BatimentService) {

  }

  ngOnInit(): void {
    this.listTransformationRessources();
  }

  listTransformationRessources() {
    this.batimentService.get(this.idBatiment).subscribe((res) => {
      this.transformationRessourceService.getAll(this.idBatiment).subscribe((res2) => {
        this.transformationRessources = res2;
      });
    });
  }

  public transformationSelectionne() {
    this.transformEvent.emit(this.choix);
  }

}
