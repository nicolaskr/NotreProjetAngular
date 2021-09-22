import { CoutBatiment } from './../../../model/cout-batiment';
import { Ressource } from 'src/app/model/ressource';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  @Input('coutBatiments')
  CBsRecu:CoutBatiment[]=[];
  constructor(private ressourceService:RessourceService) { }

  ngOnInit(): void {
    this.ressourceService.getAll().subscribe(res=>{
      this.ressources=res;
      this.coutBatiments=this.CBsRecu;
    })
  }

  ajoutCout(){
    if(this.coutBatiment.$quantite && !(this.coutBatiment.$id.$ressource.nom ==="")){
      if(this.coutBatiment.$quantite>0){
        let idcb: IdBatiment=new IdBatiment(this.coutBatiment.$id.$ressource)
        let cb:CoutBatiment=new CoutBatiment(idcb, this.coutBatiment.$quantite);
        this.coutBatiments.push(cb);
        this.coutBatiment.$id=new IdBatiment(new Ressource(""));
        this.coutBatiment.$quantite=0;
        this.validation=true;

        this.outputEvent.emit(this.coutBatiments);
      }
      else{
        this.validation=false;
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
