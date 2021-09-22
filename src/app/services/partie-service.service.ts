import { Partie } from './../model/partie';
import { Batiment } from './../model/batiment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartieServiceService {
  private headers: HttpHeaders | any = null;
  private URL: string = 'http://localhost:8080/np/api/partie';

  constructor(private httpClient: HttpClient) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Basic ' + localStorage.getItem('token'),
      Authorization: 'Basic ' + btoa('joueur1:joueur1'),
    });
  }

  public getAll(): Observable<Partie[]> {
    // this.initHeaders();
    // return this.httpClient.get<Batiment[]>(this.URL,{headers:this.headers});
    return this.httpClient.get<Partie[]>(this.URL);
  }
}
