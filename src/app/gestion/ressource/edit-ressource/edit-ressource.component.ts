import { Ressource } from './../../../model/ressource';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RessourceService } from 'src/app/services/ressource.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-ressource',
  templateUrl: './edit-ressource.component.html',
  styleUrls: ['./edit-ressource.component.css']
})
export class EditRessourceComponent implements OnInit {

  ressource:Ressource=new Ressource();
  indep:Boolean | undefined;

  constructor(private ar: ActivatedRoute, private ressourceService:RessourceService, private router:Router) {
    this.ar.params.subscribe(params => {
      if(params.id){
        this.ressourceService.get(params.id).subscribe(res=>{
          this.ressource=res;
          this.independant(this.ressource.id);
        });
      }
    });
   }

  ngOnInit(): void {
  }

  save(){
    if(this.ressource.id){
      this.ressourceService.update(this.ressource).subscribe(res=>{
        this.goListRessource();
      }
      );
    }else{
      this.ressourceService.create(this.ressource).subscribe(res=>{
        this.goListRessource();
      });
    }
  }

  goListRessource(){
    this.router.navigate(['/gestion/ressources'])
  }

  independant(id:number|undefined){
    console.log("independant")
    this.ressourceService.independance(id).subscribe(res=>{
      this.indep=res;
    })

  }

  delete(id:number|undefined){
    console.log(id);

    this.ressourceService.delete(id).subscribe(res=>{
      this.goListRessource();
    });
  }
}
