
import { Component, Input, OnInit } from '@angular/core';

import { Ressource } from 'src/app/model/ressource';
import { CoutBatiment } from 'src/app/model2/cout-batiment';
import { Batiment } from 'src/app/model2/batiment';
import { BatimentDefenseService } from 'src/app/service2/batiment-defense.service';



@Component({
  selector: 'app-list-cout-batiment',
  templateUrl: './list-cout-batiment.component.html',
  styleUrls: ['./list-cout-batiment.component.css']
})
export class ListCoutBatimentComponent implements OnInit {

  batiment:Batiment=new Batiment("",new Ressource(""));

  coutBatiments:CoutBatiment[]=[];

  @Input('id')
  id:number=0;
  constructor(private batimentDefenseService:BatimentDefenseService) {

  }

  ngOnInit(): void {
    this.batimentDefenseService.get(this.id).subscribe(res=>{
      this.batiment=res;
    });
  }

}
