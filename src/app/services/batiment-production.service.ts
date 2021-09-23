import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batiment } from '../model/batiment';

@Injectable({
  providedIn: 'root',
})
export class BatimentProductionService {
  private headers: HttpHeaders | any = null;
  private URL: string = 'http://localhost:8080/np/api/production';

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

  public create(batiment: Batiment): Observable<Batiment> {
    // this.initHeaders();
    const obj = {
      nom: batiment.nom,
      pointsDefense: batiment.pointsDefense,
      ameliorable: batiment.ameliorable,
      coutBatiment: batiment.coutBatiment,
      ressource: batiment.ressource,
      quantiteProduite: batiment.quantiteProduite,
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
      coutBatiment: batiment.coutBatiment,
      ressource: batiment.ressource,
      quantiteProduite: batiment.quantiteProduite,
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
