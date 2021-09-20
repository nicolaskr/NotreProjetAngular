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

  formAmelioration: FormGroup;
  batimentAmeliore: FormControl;

  @Input('session')
  sessionActive: Session | undefined;

  batimentsAmeliorables: SessionBatiment[] = [];

  constructor(private fb: FormBuilder, private sessionBatimentService: SessionBatimentService) {
    this.batimentAmeliore = this.fb.control('', [
      Validators.required
    ]);
    this.formAmelioration = this.fb.group({
      batimentAmeliore: this.batimentAmeliore
    });
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
    let sessionBatAAmeliorer: SessionBatiment = this.batimentAmeliore.value;
    this.sessionBatimentService.ameliorer(sessionBatAAmeliorer);
  }

}
