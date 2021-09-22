import { TransformationRessourceDto } from './../modelDto/transformation-ressource-dto';
import { Batiment } from './../model/batiment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransformationRessource } from '../model/transformation-ressource';

@Injectable({
  providedIn: 'root'
})
export class BatimentTransformationService {
  private headers: HttpHeaders | any = null;
  private URL: string = 'http://localhost:8080/np/api/transformation';

  constructor(private httpClient: HttpClient) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Basic ' + localStorage.getItem('token'),
      Authorization: 'Basic ' + btoa('joueur1:joueur1'),
    });
  }

  public get(id: number): Observable<Batiment> {
    // this.initHeaders();
    // return this.httpClient.get<Batiment>(`${this.URL}/${id}`,{headers:this.headers});
    return this.httpClient.get<Batiment>(`${this.URL}/${id}`);
  }

  public create(batiment: Batiment): Observable<Batiment> {
    // this.initHeaders();
    const obj = {
      nom: batiment.nom,
      pointsDefense: batiment.pointsDefense,
      ameliorable: batiment.ameliorable,
      coutBatiment: batiment.coutBatiment,
    };
    // return this.httpClient.post<Batiment>(this.URL, obj,{headers:this.headers});
    return this.httpClient.post<Batiment>(this.URL, obj);
  }

  private transformationList:TransformationRessourceDto[]=[];
  public update(batiment: Batiment): Observable<Batiment> {
    // this.initHeaders();
    // return this.httpClient.put<Batiment>(this.URL + '/' + batiment.id, Batiment,{headers:this.headers});

    this.transformationList=[]

    batiment.transformationRessouce!.forEach(e => {
      let transformationRessource:TransformationRessourceDto=new TransformationRessourceDto(e.ressourceLost,e.ressourceWin)
      this.transformationList.push(transformationRessource)
    });


    const obj = {
      id: batiment.id,
      nom: batiment.nom,
      pointsDefense: batiment.pointsDefense,
      ameliorable: batiment.ameliorable,
      coutBatiment: batiment.coutBatiment,
      transformationRessouce:this.transformationList,
    };

    console.log(obj);
    return this.httpClient.put<Batiment>(this.URL + '/' + batiment.id, obj);
  }

  public delete(id: number | undefined) {
    // this.initHeaders();
    // return this.httpClient.delete(this.URL+"/"+id,{headers:this.headers})
    return this.httpClient.delete(this.URL + '/' + id);
  }


}
