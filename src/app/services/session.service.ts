import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../model/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private url: string = "http://localhost:8080/np/api/session";
  private headers: HttpHeaders | any = null;
  constructor(private http: HttpClient) { }

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('token'),
    });
  }
  public getAll(): Observable <Session[]> {
    return this.http.get<Session[]>(this.url, { headers: this.headers });
  }

  public delete(id: number | undefined) {
    this.initHeaders();
    return this.http.delete(this.url + '/' + id, { headers: this.headers });
  }

  public get(idPartie: number, idCompte : number): Observable<Session> {
    this.initHeaders();
    return this.http.get<Session>(this.url + '/' + idPartie + '/' + idCompte, { headers: this.headers });
  }


  public update(session: Session): Observable<Session> {
    this.initHeaders();
    return this.http.put<Session>(this.url + '/' + session.compte?.id +'/' + session.partie?.id, { headers: this.headers });
  }

}
