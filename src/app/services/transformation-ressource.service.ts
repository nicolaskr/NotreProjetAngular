import { TransformationRessource } from './../model/transformation-ressource';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformationRessourceService {

  private url: string = "http://localhost:8080/np/api/sessionressource";
  private headers: HttpHeaders | any;

  constructor(private http: HttpClient) { }

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Basic ' + localStorage.getItem('token'),
      Authorization: 'Basic ' + btoa("joueur1:joueur1")
    });
  }

  public getAll(id:number): Observable<TransformationRessource[]> {
    this.initHeaders();
    return this.http.get<TransformationRessource[]>(this.url + '/listeTransformationRessource/'+id, { headers: this.headers });
  }

  public get(id:number): Observable<TransformationRessource> {
    this.initHeaders();
    return this.http.get<TransformationRessource>(this.url + '/transformationRessource/'+id, { headers: this.headers });
  }

}
