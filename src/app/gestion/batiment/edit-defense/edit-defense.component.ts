import { CoutBatiment } from './../../../model/cout-batiment';
import { BatimentDefenseService } from './../../../services/batiment-defense.service';
import { Batiment } from './../../../model/batiment';
import { Component, OnInit } from '@angular/core';
import { Ressource } from 'src/app/model/ressource';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-defense',
  templateUrl: './edit-defense.component.html',
  styleUrls: ['./edit-defense.component.css']
})
export class EditDefenseComponent implements OnInit {
  batiment:Batiment=new Batiment("",new Ressource(""));

  coutBatiments:CoutBatiment[]=[];

  id:number=0;

  constructor(private ar: ActivatedRoute, private batimentDefenseService:BatimentDefenseService, private router:Router) {
    this.ar.params.subscribe(params => {
      if(params.id){
        this.id=params.id;
        this.batimentDefenseService.get(params.id).subscribe(res=>{
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
      console.log("in")
    this.batiment.coutBatiment=this.coutBatiments;}
    if(this.batiment.id){
      this.batimentDefenseService.update(this.batiment).subscribe(res=>{
        this.goListBatiment();
      }
      );
    }else{
      this.batimentDefenseService.create(this.batiment).subscribe(res=>{
        this.goListBatiment();
      });
    }
  }

  goListBatiment(){
    this.router.navigate(['/gestion/batiments'])
  }

  delete(id:number|undefined){
    this.batimentDefenseService.delete(id).subscribe(res=>{
      this.goListBatiment();
    });
  }

  receptionListCout(receptioncoutBatiments:CoutBatiment[]){
    console.log(receptioncoutBatiments);
    this.coutBatiments=receptioncoutBatiments;
  }


}
