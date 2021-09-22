import { RessourceService } from 'src/app/services/ressource.service';
import { BatimentProductionService } from './../../../services/batiment-production.service';
import { CoutBatiment } from './../../../model/cout-batiment';

import { Batiment } from './../../../model/batiment';
import { Component, OnInit } from '@angular/core';
import { Ressource } from 'src/app/model/ressource';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-production',
  templateUrl: './edit-production.component.html',
  styleUrls: ['./edit-production.component.css']
})
export class EditProductionComponent implements OnInit {

  batiment:Batiment=new Batiment("",new Ressource(""));

  coutBatiments:CoutBatiment[]=[];
  ressources:Ressource[]=[];

  id:number=0;

  constructor(private ar: ActivatedRoute, private batimentProductionService:BatimentProductionService, private ressourceService:RessourceService, private router:Router) {
    this.ar.params.subscribe(params => {
      if(params.id){
        this.id=params.id;
        this. batimentProductionService.get(params.id).subscribe(res=>{
          this.batiment=res;
          console.log(this.batiment)
        });
      }
    });
   }

  ngOnInit(): void {
    this.ressourceService.getAll().subscribe(res=>{
      this.ressources=res;
    })
  }

  save(){
    console.log(this.coutBatiments)
    if(this.coutBatiments!=[]){
      console.log("in")
    this.batiment.coutBatiment=this.coutBatiments;}
    if(this.batiment.id){
      this. batimentProductionService.update(this.batiment).subscribe(res=>{
        this.goListBatiment();
      }
      );
    }else{
      this. batimentProductionService.create(this.batiment).subscribe(res=>{
        this.goListBatiment();
      });
    }
  }

  goListBatiment(){
    this.router.navigate(['/gestion/batiments'])
  }

  delete(id:number|undefined){
    this. batimentProductionService.delete(id).subscribe(res=>{
      this.goListBatiment();
    });
  }

  receptionListCout(receptioncoutBatiments:CoutBatiment[]){
    console.log(receptioncoutBatiments);
    this.coutBatiments=receptioncoutBatiments;
  }



}
