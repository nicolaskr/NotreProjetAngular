import { BatimentAttaqueService } from './../../../services/batiment-attaque.service';
import { CoutBatiment } from './../../../model/cout-batiment';
import { Batiment } from './../../../model/batiment';
import { Component, OnInit } from '@angular/core';
import { Ressource } from 'src/app/model/ressource';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-attaque',
  templateUrl: './edit-attaque.component.html',
  styleUrls: ['./edit-attaque.component.css']
})
export class EditAttaqueComponent implements OnInit {
  batiment:Batiment=new Batiment("",new Ressource(""));

  coutBatiments:CoutBatiment[]=[];

  id:number=0;

  constructor(private ar: ActivatedRoute, private batimentAttaqueService:BatimentAttaqueService, private router:Router) {
    this.ar.params.subscribe(params => {
      if(params.id){
        this.id=params.id;
        this.batimentAttaqueService.get(params.id).subscribe(res=>{
          this.batiment=res;
        });
      }
    });
   }

  ngOnInit(): void {
  }

  save(){
    console.log(this.batiment.pointsDAttaque)
    if(this.coutBatiments!=[]){
    this.batiment.coutBatiment=this.coutBatiments;}
    if(this.batiment.id){
      this.batimentAttaqueService.update(this.batiment).subscribe(res=>{
        this.goListBatiment();
      }
      );
    }else{
      this.batimentAttaqueService.create(this.batiment).subscribe(res=>{
        this.goListBatiment();
      });
    }
  }

  goListBatiment(){
    this.router.navigate(['/gestion/batiments'])
  }

  delete(id:number|undefined){
    this.batimentAttaqueService.delete(id).subscribe(res=>{
      this.goListBatiment();
    });
  }

  receptionListCout(receptioncoutBatiments:CoutBatiment[]){
    console.log(receptioncoutBatiments);
    this.coutBatiments=receptioncoutBatiments;
  }

}
