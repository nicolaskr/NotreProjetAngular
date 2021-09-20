
import { SessionService } from './../services/session.service';
import { SessionBatiment } from './../model/session-batiment';
import { SessionRessource } from './../model/session-ressource';
import { Component, OnInit } from '@angular/core';
import { Session } from '../model/session';
import { SessionBatimentService } from '../services/session-batiment.service';
import { SessionRessourceService } from '../services/session-ressource.service';

@Component({
  selector: 'app-page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.css']
})
export class PageJeuComponent implements OnInit {

  player : Session = new Session();
  sessions : Session [] = [];
  waiters : Session [] = [];



  constructor(private sessionService : SessionService, private sessionBatService : SessionBatimentService, private sessionResService: SessionRessourceService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.sessionService.getAll().subscribe((res) =>{
      console.log(res);
      this.sessions = res;

    });
    this.importBatiments;
    this.importRessources();
    this.tour();
  }

  clickConstruction(){
    for(var s of this.sessions)
    {
      console.log("1");
      if (s.tourEnCours)
      {
        this.player=s;
      } else {
        this.waiters.push(s);
      }
    }
    console.log(this.player.sessionBatiment)
  }

  tour(){
    this.actuAttDefPlayers();
    for (let i=0;i<this.sessions.length;i++){
      console.log(this.sessions[i]);
    }
    for(var s of this.sessions)
    {
      console.log("1");
      if (s.tourEnCours)
      {
        this.player=s;
      } else {
        this.waiters.push(s);
      }
    }
    console.log(this.waiters);
    console.log(this.player);

  }

  importBatiments(){
    for (var s of this.sessions){
      this.sessionBatService.getBySession(s).subscribe((res)=>{
        s.sessionBatiment = res;
      })
    }
  }

  importRessources(){
    for (var s of this.sessions){
      this.sessionResService.getBySession(s).subscribe((res)=>{
        s.sessionRessource = res;
      })
    }
  }

  clickFinDeTour(){
    console.log(this.waiters);
    console.log(this.player);
  }

  finDeTour(){
    for(let i=0;i<(this.sessions.length);i++){
      console.log(i+'fin de tour');
      if(this.sessions[i].tourEnCours){
        this.sessions[i].tourEnCours = false;
        if(i == (this.sessions.length -1)){
          this.sessions[0].tourEnCours=true;
        }else{
          this.sessions[i+1].tourEnCours=true;
        }
      }
    }
    this.actuAttDefPlayers();
    this.importBatiments();
    this.importRessources;
  }



  actuAttDefPlayers(){
    for(var s of this.sessions){
     let att : number =0;
     let pv : number =0;
     for (var sb of s.sessionBatiment!)
     {
        pv = pv + sb.pv;
        att = att + sb.ptAttaque;
     }
     s.att=att;
     s.def = pv;
    }
  }

}
