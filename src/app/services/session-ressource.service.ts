import { Observable } from 'rxjs';
import { SessionRessource } from './../model/session-ressource';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionRessourceService {

  private url: string = "http://localhost:8080/eshop/api/sessionbatiment";
  private headers: HttpHeaders | any = null;

  constructor(private http: HttpClient) { }

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('token'),
    });
  }

  public getAll(): Observable<SessionRessource[]> {
    return this.http.get<SessionRessource[]>(this.url, { headers: this.headers });
  }

  public delete(id: number | undefined) {
    this.initHeaders();
    return this.http.delete(this.url + '/' + id, { headers: this.headers });
  }

  public get(id: number): Observable<SessionRessource> {
    this.initHeaders();
    return this.http.get<SessionRessource>(this.url + '/' + id, { headers: this.headers });
  }

  public create(sessionRessource: SessionRessource): Observable<SessionRessource> {
    this.initHeaders();
    return this.http.post<SessionRessource>(this.url, sessionRessource, { headers: this.headers });
  }

  public update(sessionRessource: SessionRessource): Observable<SessionRessource> {
    this.initHeaders();
    return this.http.put<SessionRessource>(this.url + '/' + sessionRessource.id, sessionRessource, { headers: this.headers });
  }
}
