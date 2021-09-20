import { Batiment } from './../../model/batiment';
import { SessionBatimentService } from './../../services/session-batiment.service';
import { SessionBatiment } from './../../model/session-batiment';
import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/model/session';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-construction',
  templateUrl: './menu-construction.component.html',
  styleUrls: ['./menu-construction.component.css']
})
export class MenuConstructionComponent implements OnInit {

  formConstruction: FormGroup;
  batimentConstruit: FormControl;

  @Input('session')
  sessionActive: Session | undefined;

  batimentsConstructibles: Batiment[] = [];

  constructor(private fb: FormBuilder, private sessionBatimentService: SessionBatimentService) {
    this.batimentConstruit = this.fb.control('', [
      Validators.required
    ]);
    this.formConstruction = this.fb.group({
      batimentConstruit: this.batimentConstruit
    });
  }

  ngOnInit(): void {
    this.listBatimentsConstructibles();
  }

  listBatimentsConstructibles() {
    this.sessionBatimentService.getBatimentsConstructibles(this.sessionActive!).subscribe((res) => {
      this.batimentsConstructibles = res;
    });
  }

  save() {
    let batAConstruire: Batiment = this.batimentConstruit.value;
    let sessionBatimentAConstruire: SessionBatiment = new SessionBatiment(batAConstruire.def, batAConstruire.att, this.sessionActive!, batAConstruire, 1);
    this.sessionBatimentService.create(sessionBatimentAConstruire);
  }

}
