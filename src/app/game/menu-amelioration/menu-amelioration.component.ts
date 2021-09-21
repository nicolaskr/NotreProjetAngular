import { Compte } from './../../model/compte';
import { Partie } from './../../model/partie';
import { SessionBatimentService } from './../../services/session-batiment.service';
import { Batiment } from './../../model/batiment';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Session } from './../../model/session';
import { Component, OnInit, Input } from '@angular/core';
import { SessionBatiment } from 'src/app/model/session-batiment';

@Component({
  selector: 'app-menu-amelioration',
  templateUrl: './menu-amelioration.component.html',
  styleUrls: ['./menu-amelioration.component.css']
})
export class MenuAmeliorationComponent implements OnInit {

  @Input('session')
  sessionActive: Session | undefined;

  batimentsAmeliorables: SessionBatiment[] = [];
  choixAmelioration: number = 0;

  constructor(private sessionBatimentService: SessionBatimentService) {
  }

  ngOnInit(): void {
    this.listBatimentsAmeliorables();
  }

  listBatimentsAmeliorables() {
    this.sessionBatimentService.getBatimentsAmeliorables(this.sessionActive!).subscribe((res) => {
      this.batimentsAmeliorables = res;
    });
  }

  save() {
    this.sessionBatimentService.ameliorer(this.choixAmelioration).subscribe();
  }

}
