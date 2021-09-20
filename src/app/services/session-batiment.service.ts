import { SessionBatiment } from './../model/session-batiment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionBatimentService {

  private url: string = "http://localhost:8080/eshop/api/sessionbatiment";
  private headers: HttpHeaders | any = null;

  constructor(private http: HttpClient) { }

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('token'),
    });
  }

  public getAll(): Observable<SessionBatiment[]> {
    return this.http.get<SessionBatiment[]>(this.url, { headers: this.headers });
  }

  public delete(id: number | undefined) {
    this.initHeaders();
    return this.http.delete(this.url + '/' + id, { headers: this.headers });
  }

  public get(id: number): Observable<SessionBatiment> {
    this.initHeaders();
    return this.http.get<SessionBatiment>(this.url + '/' + id, { headers: this.headers });
  }

  public create(sessionBatiment: SessionBatiment): Observable<SessionBatiment> {
    this.initHeaders();
    const obj = {
      session: sessionBatiment.session,
      batiment: sessionBatiment.batiment,
      pointsDeVie: sessionBatiment.pointsDeVie,
      pointsDAttaque: sessionBatiment.pointsDAttaque,
      level: sessionBatiment.level
    }
    return this.http.post<SessionBatiment>(this.url, obj, { headers: this.headers });
  }

  public update(sessionBatiment: SessionBatiment): Observable<SessionBatiment> {
    this.initHeaders();
    return this.http.put<SessionBatiment>(this.url + '/' + sessionBatiment.id, sessionBatiment, { headers: this.headers });
  }
}
