import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batiment } from '../model2/batiment';

@Injectable({
  providedIn: 'root'
})
export class BatimentDefenseService {

  private headers: HttpHeaders | any = null;
  private URL: string = 'http://localhost:8080/np/api/batiment';

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
}
