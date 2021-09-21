import { CoutBatiment } from './../../../model/cout-batiment';
import { Ressource } from 'src/app/model/ressource';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RessourceService } from 'src/app/services/ressource.service';
import { IdBatiment } from 'src/app/model/id-batiment';

@Component({
  selector: 'app-cout-batiment',
  templateUrl: './cout-batiment.component.html',
  styleUrls: ['./cout-batiment.component.css']
})
export class CoutBatimentComponent implements OnInit {

  ressources:Ressource[]=[];
  idbatiment : IdBatiment= new IdBatiment((new Ressource("")));
  coutBatiment:CoutBatiment=new CoutBatiment(new IdBatiment(new Ressource("")));
  coutBatiments:CoutBatiment[]=[];
  validation:Boolean=true;

  @Output()
  outputEvent: EventEmitter<CoutBatiment[]>= new EventEmitter();

  constructor(private ressourceService:RessourceService) { }

  ngOnInit(): void {
    this.ressourceService.getAll().subscribe(res=>{
      this.ressources=res;
    })
  }

  ajoutCout(){
    if(this.coutBatiment.$quantite && !(this.coutBatiment.$ressource.$ressource.nom ==="")){
      if(this.coutBatiment.$quantite>0){
        let idcb: IdBatiment=new IdBatiment(this.coutBatiment.$ressource.$ressource)
        let cb:CoutBatiment=new CoutBatiment(idcb, this.coutBatiment.$quantite);
        this.coutBatiments.push(cb);
        this.coutBatiment.$ressource=new IdBatiment(new Ressource(""));
        this.coutBatiment.$quantite=0;
        this.validation=true;

        this.outputEvent.emit(this.coutBatiments);
      }
    }
    else{
      this.validation=false;
    }
  }

  restartListCout(){
    this.coutBatiments=[];
    this.outputEvent.emit(this.coutBatiments);
  }

}
