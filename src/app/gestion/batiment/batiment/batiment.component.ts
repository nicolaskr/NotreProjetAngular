import { Batiment } from './../../../model/batiment';
import { Component, OnInit } from '@angular/core';
import { BatimentService } from 'src/app/services/batiment.service';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.css']
})
export class BatimentComponent implements OnInit {
  batiments: Batiment[]=[];
  battaque:boolean=false;
  bdefense:boolean=false;
  bproduction:boolean=false;
  btransformation:boolean=false;


  constructor(private batimentService:BatimentService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.batimentService.getAll().subscribe(res =>{
      this.batiments=res;
      this.battaque=false;
      this.bdefense=false;
      this.bproduction=false;
      this.btransformation=false;
    });
  }

  listAttaque(){
    this.batimentService.getAllAttaque().subscribe(res =>{
      this.batiments=res;
      this.battaque=true;
      this.bdefense=false;
      this.bproduction=false;
      this.btransformation=false;
    });
  }

  listDefense(){
    this.batimentService.getAllDefense().subscribe(res =>{
      this.batiments=res;
      this.battaque=false;
      this.bdefense=true;
      this.bproduction=false;
      this.btransformation=false;
    });
  }
  listProduction(){
    this.batimentService.getAllProduction().subscribe(res =>{
      this.batiments=res;
      this.battaque=false;
      this.bdefense=false;
      this.bproduction=true;
      this.btransformation=false;
    });
  }
  listTransformation(){
    this.batimentService.getAllTransformation().subscribe(res =>{
      this.batiments=res;
      this.battaque=false;
      this.bdefense=false;
      this.bproduction=false;
      this.btransformation=true;
    });
  }
}
