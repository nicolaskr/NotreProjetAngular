import { TransformationRessource } from 'src/app/model/transformation-ressource';
import { TransformationRessourceDto } from './../modelDto/transformation-ressource-dto';
import { Batiment } from './../model/batiment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BatimentTransformationService {
  private headers: HttpHeaders | any = null;
  private URL: string = 'http://localhost:8080/np/api/transformation';

  private transformationList:TransformationRessourceDto[]=[];

  constructor(private httpClient: HttpClient) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Basic ' + localStorage.getItem('token'),
      Authorization: 'Basic ' + btoa('joueur1:joueur1'),
    });
  }
  public getAll(): Observable<Batiment[]> {
    // this.initHeaders();
    // return this.httpClient.get<Batiment>(`${this.URL}`,{headers:this.headers});
    return this.httpClient.get<Batiment[]>(`${this.URL}`);
  }

  public get(id: number): Observable<Batiment> {
    // this.initHeaders();
    // return this.httpClient.get<Batiment>(`${this.URL}/${id}`,{headers:this.headers});
    return this.httpClient.get<Batiment>(`${this.URL}/${id}`);
  }

  public create(batiment: Batiment, listeTransformationRessource: TransformationRessource[]): Observable<Batiment> {
    // this.initHeaders();
    this.transformationList=[]


    listeTransformationRessource.forEach(e => {
      let transformationRessource:TransformationRessourceDto=new TransformationRessourceDto(e.ressourceLost,e.ressourceWin)
      this.transformationList.push(transformationRessource)
    });

    const obj = {
      nom: batiment.nom,
      pointsDefense: batiment.pointsDefense,
      ameliorable: batiment.ameliorable,
      coutBatiment: batiment.coutBatiment,
      transformationRessouce:this.transformationList,
    };
    // return this.httpClient.post<Batiment>(this.URL, obj,{headers:this.headers});
    return this.httpClient.post<Batiment>(this.URL, obj);
  }


  public update(batiment: Batiment): Observable<Batiment> {
    // this.initHeaders();
    // return this.httpClient.put<Batiment>(this.URL + '/' + batiment.id, Batiment,{headers:this.headers});

    this.transformationList = [];

    console.log(batiment);
    console.log(batiment.transformationRessouce);
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
      transformationRessouce: this.transformationList,
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
