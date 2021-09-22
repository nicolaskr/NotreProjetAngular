import { Batiment } from './../model/batiment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatimentAttaqueService {
  private headers: HttpHeaders | any = null;
  private URL: string = 'http://localhost:8080/np/api/attaque';

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
      pointsDAttaque: batiment.pointsDAttaque,
      coutBatiment: batiment.coutBatiment,
    };
    // return this.httpClient.post<Batiment>(this.URL, obj,{headers:this.headers});
    return this.httpClient.post<Batiment>(this.URL, obj);
  }

  public update(batiment: Batiment): Observable<Batiment> {
    // this.initHeaders();
    // return this.httpClient.put<Batiment>(this.URL + '/' + batiment.id, Batiment,{headers:this.headers});

    const obj = {
      id: batiment.id,
      nom: batiment.nom,
      pointsDefense: batiment.pointsDefense,
      ameliorable: batiment.ameliorable,
      pointsDAttaque: batiment.pointsDAttaque,
      coutBatiment: batiment.coutBatiment,
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
