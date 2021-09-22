import { BatimentTransformationService } from './../../../services/batiment-transformation.service';
import { CoutBatiment } from './../../../model/cout-batiment';

import { Batiment } from './../../../model/batiment';
import { Component, OnInit } from '@angular/core';
import { Ressource } from 'src/app/model/ressource';
import { ActivatedRoute, Router } from '@angular/router';
import { TransformationRessource } from 'src/app/model/transformation-ressource';

@Component({
  selector: 'app-edit-transformation',
  templateUrl: './edit-transformation.component.html',
  styleUrls: ['./edit-transformation.component.css']
})
export class EditTransformationComponent implements OnInit {

  batiment:Batiment=new Batiment("",new Ressource(""));

  coutBatiments:CoutBatiment[]=[];

  listTransformationRessource:TransformationRessource[]=[];

  id:number=0;

  constructor(private ar: ActivatedRoute, private batimentTransformationService:BatimentTransformationService, private router:Router) {
    this.ar.params.subscribe(params => {
      if(params.id){
        this.id=params.id;
        this.batimentTransformationService.get(params.id).subscribe(res=>{
          this.batiment=res;
        });
      }
    });
   }

  ngOnInit(): void {
  }

  save(){
    console.log(this.coutBatiments)
    if(this.coutBatiments!=[]){
      this.batiment.coutBatiment=this.coutBatiments;
    }
    if(this.listTransformationRessource!=[]){
      this.batiment.transformationRessouce=this.listTransformationRessource;
      console.log("ok")
      console.log(this.batiment)
      console.log("good")
    }
    if(this.batiment.id){
        this.batimentTransformationService.update(this.batiment).subscribe(res=>{
          this.goListBatiment();
        }
        );
      }else{
        this.batimentTransformationService.create(this.batiment).subscribe(res=>{
          this.goListBatiment();
        });
    }
  }

  goListBatiment(){
    this.router.navigate(['/gestion/batiments'])
  }

  delete(id:number|undefined){
    this.batimentTransformationService.delete(id).subscribe(res=>{
      this.goListBatiment();
    });
  }

  receptionListCout(receptioncoutBatiments:CoutBatiment[]){
    this.coutBatiments=receptioncoutBatiments;
  }

  receptionListTransformationRessource(receptionListTransformationRessource:TransformationRessource[]){
    this.listTransformationRessource=receptionListTransformationRessource;
    console.log(this.listTransformationRessource)
    console.log(this.batiment)
  }

}
