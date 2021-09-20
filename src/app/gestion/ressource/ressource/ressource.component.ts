import { Ressource } from './../../../model/ressource';
import { Component, OnInit } from '@angular/core';
import { RessourceService } from 'src/app/services/ressource.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {

  ressources: Ressource[]=[];

  constructor(private ressourceService:RessourceService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.ressourceService.getAll().subscribe(res =>{
      this.ressources=res;
    });
  }

  // Attention: vérifier que la ressource n'est lié à aucun cout batiment ou transformation ressource, sinon interdire la suppression
  delete(id:number|undefined){
    console.log(id);

    this.ressourceService.delete(id).subscribe(res=>{
    this.list();
    });
  }

  independant(id:number|undefined):Observable<boolean>{
    return this.ressourceService.independance(id)
  }
}
