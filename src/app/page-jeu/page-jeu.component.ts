import { SessionRessource } from './../model/session-ressource';
import { Component, OnInit } from '@angular/core';
import { Session } from '../model/session';

@Component({
  selector: 'app-page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.css']
})
export class PageJeuComponent implements OnInit {

  sessions : Session [] = [];
  SessionRessource : SessionRessource [] =[];



  constructor() { }

  ngOnInit(): void {


  }


}
