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

  @Input('batiment')
  batiment: Batiment | undefined;

  @Output()
  transformEvent: EventEmitter<TransformationRessource> = new EventEmitter();

  choix: FormControl;
  transformationRessources: TransformationRessource[] = [];
  tr: TransformationRessource | undefined;

  constructor(private fb: FormBuilder, private sessionBatimentService: SessionBatimentService) {
    this.choix = this.fb.control('', [
      Validators.required
    ])
  }

  ngOnInit(): void {
    this.listTransformationRessources();
  }

  listTransformationRessources() {
    this.sessionBatimentService.getListTransformationRessource(this.batiment!).subscribe((res) => {
      this.transformationRessources = res;
    });
  }

  public transformationSelectionne() {
    let numero: number = this.choix.value.id;
    this.sessionBatimentService.getTransformationRessourceById(numero).subscribe((res) => {
      this.tr = res;
    })
    this.transformEvent.emit(this.tr);
  }

}
