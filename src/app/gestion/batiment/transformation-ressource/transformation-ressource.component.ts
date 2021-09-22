import { IdBatiment } from 'src/app/model/id-batiment';
import { RessourceService } from 'src/app/services/ressource.service';
import { TransformationRessource } from './../../../model/transformation-ressource';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ressource } from 'src/app/model/ressource';
import { Batiment } from 'src/app/model/batiment';


@Component({
  selector: 'app-transformation-ressource',
  templateUrl: './transformation-ressource.component.html',
  styleUrls: ['./transformation-ressource.component.css']
})
export class TransformationRessourceComponent implements OnInit {

  transformationRessources : TransformationRessource[]=[];
  TransformationRessource:TransformationRessource=new TransformationRessource(new Batiment("",new Ressource("")), new Ressource(""), new Ressource(""),0)
  ressources:Ressource[]=[];
  validation:Boolean=true;
  validation2:Boolean=true;

  @Output()
  outputEvent: EventEmitter<TransformationRessource[]>= new EventEmitter();

  @Input('listTransformationRessource')
  lTR:TransformationRessource[]=[];

  constructor(private ressourceService:RessourceService) { }

  ngOnInit(): void {
    this.ressourceService.getAll().subscribe(res=>{
      this.ressources=res;
      this.transformationRessources=this.lTR;
    })
  }

  ajoutTransformationRessource(){
    if(!(this.TransformationRessource.ressourceWin.nom ==="") && !(this.TransformationRessource.ressourceLost.nom ==="")){
      if(!(this.TransformationRessource.ressourceWin.nom == this.TransformationRessource.ressourceLost.nom)){
      let tr: TransformationRessource=new TransformationRessource(new Batiment("",new Ressource("")), this.TransformationRessource.ressourceLost, this.TransformationRessource.ressourceWin,0)
        this.transformationRessources.push(tr);
        this.TransformationRessource.ressourceWin=new Ressource("");
        this.TransformationRessource.ressourceLost=new Ressource("");
        this.validation=true;
        this.validation2=true;
        this.outputEvent.emit(this.transformationRessources);
      } else {
        this.validation2=false;
      }
    }
    else{
      this.validation=false;
    }
  }

  restartTransformationRessource(){
    this.transformationRessources=[];
    this.outputEvent.emit(this.transformationRessources);
  }
}
