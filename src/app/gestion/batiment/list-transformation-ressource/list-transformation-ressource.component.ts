import { BatimentTransformationService } from './../../../services/batiment-transformation.service';
import { Component, Input, OnInit } from '@angular/core';
import { Batiment } from 'src/app/model/batiment';
import { Ressource } from 'src/app/model/ressource';

@Component({
  selector: 'app-list-transformation-ressource',
  templateUrl: './list-transformation-ressource.component.html',
  styleUrls: ['./list-transformation-ressource.component.css']
})
export class ListTransformationRessourceComponent implements OnInit {

  batiment:Batiment=new Batiment("",new Ressource(""));

  @Input('id')
  id:number=0;

  constructor(private batimentTransformationService:BatimentTransformationService) { }

  ngOnInit(): void {
    this.batimentTransformationService.get(this.id).subscribe(res=>{
      this.batiment=res;
      console.log(this.batiment)
    });
  }

}
