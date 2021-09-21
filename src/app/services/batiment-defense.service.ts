import { CoutBatiment } from './../model/cout-batiment';
import { Batiment } from './../model/batiment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatimentDefenseService {
  private headers:HttpHeaders|any =null;
  private URL:string='http://localhost:8080/np/api/defense';

  constructor(private httpClient:HttpClient) { }

  public initHeaders(){
    this.headers=new HttpHeaders({
      'content-Type':'application/json',
      Authorization:'Basic '+ localStorage.getItem('token'),
    });
  }

  public get(id:number):Observable<Batiment>{
    // this.initHeaders();
    // return this.httpClient.get<Batiment>(`${this.URL}/${id}`,{headers:this.headers});
    return this.httpClient.get<Batiment>(`${this.URL}/${id}`)
  }

  public create(batiment:Batiment): Observable<Batiment>{
    // this.initHeaders();
    const obj={
      nom:batiment.nom,
      pointsDefense:batiment.pointsDefense,
      ameliorable: batiment.ameliorable,
      coutBatiment:batiment.coutBatiment
    };
    // return this.httpClient.post<Batiment>(this.URL, obj,{headers:this.headers});
    return this.httpClient.post<Batiment>(this.URL, obj);
  }


  public update(batiment: Batiment): Observable<Batiment> {
    // this.initHeaders();
    // return this.httpClient.put<Batiment>(this.URL + '/' + batiment.id, Batiment,{headers:this.headers});

    const obj={
      id:batiment.id,
      nom:batiment.nom,
      pointsDefense:batiment.pointsDefense,
      ameliorable: batiment.ameliorable,
      coutBatiment:batiment.coutBatiment
    };

    console.log(obj)
    return this.httpClient.put<Batiment>(this.URL + '/' + batiment.id, obj)
  }

  public delete(id:number|undefined){
    // this.initHeaders();
    // return this.httpClient.delete(this.URL+"/"+id,{headers:this.headers})
    return this.httpClient.delete(this.URL+"/"+id)
  }
}
