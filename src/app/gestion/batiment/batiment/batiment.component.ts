import { Batiment } from './../../../model/batiment';
import { Component, OnInit } from '@angular/core';
import { BatimentService } from 'src/app/services/batiment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.css']
})
export class BatimentComponent implements OnInit {
  batiments: Batiment[]=[];
  btotal:boolean=true;
  battaque:boolean=false;
  bdefense:boolean=false;
  bproduction:boolean=false;
  btransformation:boolean=false;


  constructor(private batimentService:BatimentService, private router:Router) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.batimentService.getAll().subscribe(res =>{
      this.batiments=res;
      this.btotal=true;
      this.battaque=false;
      this.bdefense=false;
      this.bproduction=false;
      this.btransformation=false;
    });
  }

  listAttaque(){
    this.batimentService.getAllAttaque().subscribe(res =>{
      this.batiments=res;
      this.btotal=false;
      this.battaque=true;
      this.bdefense=false;
      this.bproduction=false;
      this.btransformation=false;
    });
  }

  listDefense(){
    this.batimentService.getAllDefense().subscribe(res =>{
      this.batiments=res;
      this.btotal=false;
      this.battaque=false;
      this.bdefense=true;
      this.bproduction=false;
      this.btransformation=false;
    });
  }
  listProduction(){
    this.batimentService.getAllProduction().subscribe(res =>{
      this.batiments=res;
      this.btotal=false;
      this.battaque=false;
      this.bdefense=false;
      this.bproduction=true;
      this.btransformation=false;
    });
  }
  listTransformation(){
    this.batimentService.getAllTransformation().subscribe(res =>{
      this.batiments=res;
      this.btotal=false;
      this.battaque=false;
      this.bdefense=false;
      this.bproduction=false;
      this.btransformation=true;
    });
  }

  tous(){
    if(this.btotal){
      return "nav-link active";
    }
    return "nav-link";
  }

  attaque(){
    if(this.battaque){
      return "nav-link active";
    }
    return "nav-link";
  }
  defense(){
    if(this.bdefense){
      return "nav-link active";
    }
    return "nav-link";
  }
  production(){
    if(this.bproduction){
      return "nav-link active";
    }
    return "nav-link";
  }
  transformation(){
    if(this.btransformation){
      return "nav-link active";
    }
    return "nav-link";
  }

  redirect(id:number|undefined){
    if(this.battaque){
      this.router.navigate(['gestion/batiments/attaque/edit',id])
    }
    if(this.bdefense){
      this.router.navigate(['gestion/batiments/defense/edit',id])
    }
    if(this.bproduction){
      this.router.navigate(['gestion/batiments/production/edit',id])
    }
    if(this.btransformation){
      this.router.navigate(['gestion/batiments/transformation/edit',id])
    }
  }
}
