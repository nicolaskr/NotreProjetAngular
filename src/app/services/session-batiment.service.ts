import { CoutBatiment } from './../model/cout-batiment';
import { BatimentService } from './batiment.service';
import { SessionBatiment } from './../model/session-batiment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../model/session';
import { Batiment } from '../model/batiment';

@Injectable({
  providedIn: 'root',
})
export class SessionBatimentService {
  private url: string = 'http://localhost:8080/np/api/sessionbatiment';
  private headers: HttpHeaders | any = null;

  constructor(
    private http: HttpClient,
    private batimentService: BatimentService
  ) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Basic ' + localStorage.getItem('token'),
      Authorization: 'Basic ' + btoa('joueur1:joueur1'),
    });
  }

  public getAll(): Observable<SessionBatiment[]> {
    return this.http.get<SessionBatiment[]>(this.url, {
      headers: this.headers,
    });
  }

  public delete(id: number | undefined) {
    this.initHeaders();
    return this.http.delete(this.url + '/' + id, { headers: this.headers });
  }

  public get(id: number): Observable<SessionBatiment> {
    this.initHeaders();
    return this.http.get<SessionBatiment>(this.url + '/' + id, {
      headers: this.headers,
    });
  }

  public construire(session: Session, id: number): Observable<SessionBatiment> {
    this.initHeaders();
    return this.http.post<SessionBatiment>(
      this.url +
        '/construction/' +
        session.id?.partie?.id +
        '/' +
        session.id?.compte?.id +
        '/' +
        id,
      { headers: this.headers }
    );
  }

  public update(sessionBatiment: SessionBatiment): Observable<SessionBatiment> {
    this.initHeaders();
    return this.http.put<SessionBatiment>(
      this.url + '/' + sessionBatiment.id,
      sessionBatiment,
      { headers: this.headers }
    );
  }

  public getBySession(session: Session): Observable<SessionBatiment[]> {
    this.initHeaders();
    return this.http.get<SessionBatiment[]>(
      this.url + '/' + session.id?.partie?.id + '/' + session.id?.compte?.id,
      { headers: this.headers }
    );
  }

  public ameliorer(id: number): Observable<SessionBatiment> {
    this.initHeaders();
    return this.http.put<SessionBatiment>(this.url + '/amelioration/' + id, {
      headers: this.headers,
    });
  }

  public getBatimentsConstructibles(session: Session) {
    this.initHeaders();
    return this.http.get<Batiment[]>(
      this.url +
        '/construction/' +
        session.id?.partie?.id +
        '/' +
        session.id?.compte?.id,
      { headers: this.headers }
    );
  }

  public getBatimentsAmeliorables(session: Session) {
    this.initHeaders();
    return this.http.get<SessionBatiment[]>(
      this.url +
        '/amelioration/' +
        session.id?.partie?.id +
        '/' +
        session.id?.compte?.id,
      { headers: this.headers }
    );
  }

  public getBatimentsTransformation(session: Session) {
    this.initHeaders();
    return this.http.get<SessionBatiment[]>(
      this.url +
        '/transformation/' +
        session.id?.partie?.id +
        '/' +
        session.id?.compte?.id,
      { headers: this.headers }
    );
  }
}
