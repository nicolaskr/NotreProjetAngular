import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Compte } from 'src/app/model/compte';
import { CompteServiceService } from 'src/app/services/compte-service.service';

@Component({
  selector: 'app-select-joueur',
  templateUrl: './select-joueur.component.html',
  styleUrls: ['./select-joueur.component.css'],
})
export class SelectJoueurComponent implements OnInit {
  comptes: Compte[] = [];
  selectedComptes: Compte[] = [];

  @Output()
  selectedComptesReady: EventEmitter<Compte[]> = new EventEmitter();

  constructor(private compteService: CompteServiceService) {}

  ngOnInit(): void {
    this.compteService.getAllJoueurs().subscribe(
      (data) => {
        this.comptes = data;
        console.log(data);
      },
      (error) => {
        console.log('error in getAllJoueur CompteService');
      }
    );
  }

  public send() {
    this.selectedComptesReady.emit(this.selectedComptes);
  }
}
