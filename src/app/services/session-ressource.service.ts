import { Compte } from './../model/compte';
import { Partie } from './../model/partie';
import { Observable } from 'rxjs';
import { SessionRessource } from './../model/session-ressource';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../model/session';
import { TransformationRessource } from '../model/transformation-ressource';

@Injectable({
  providedIn: 'root',
})
export class SessionRessourceService {
  private url: string = 'http://localhost:8080/np/api/sessionressource';
  private headers: HttpHeaders | any = null;

  constructor(private http: HttpClient) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Basic ' + localStorage.getItem('token'),
      Authorization: 'Basic ' + localStorage.getItem('token'),
    });
  }

  public getAll(): Observable<SessionRessource[]> {
    return this.http.get<SessionRessource[]>(this.url, {
      headers: this.headers,
    });
  }

  public getBySession(session: Session): Observable<SessionRessource[]> {
    this.initHeaders();
    return this.http.get<SessionRessource[]>(
      this.url + '/' + session.id?.partie!.id + '/' + session.id?.compte!.id,
      { headers: this.headers }
    );
  }

  public piocher(session: Session): Observable<SessionRessource[]> {
    this.initHeaders();
    return this.http.get<SessionRessource[]>(
      this.url +
        '/piocher/' +
        session.id?.partie?.id +
        '&' +
        session.id?.compte?.id /*,
      { headers: this.headers }*/
    );
  }

  public batProduction(session: Session){
    this.initHeaders();
    return this.http.get(this.url +'/productionRessource/'+session.id.partie.id +'&'+session.id.compte.id, { headers: this.headers });
  }

  public delete(id: number | undefined) {
    this.initHeaders();
    return this.http.delete(this.url + '/' + id, { headers: this.headers });
  }

  public get(id: number): Observable<SessionRessource> {
    this.initHeaders();
    return this.http.get<SessionRessource>(this.url + '/' + id, {
      headers: this.headers,
    });
  }

  public init(idPartie: number) {
    this.initHeaders();
    return this.http.post(this.url + '/initPartie/' + idPartie, {
      headers: this.headers,
    });
  }

  public create(
    sessionRessource: SessionRessource
  ): Observable<SessionRessource> {
    this.initHeaders();
    return this.http.post<SessionRessource>(this.url, sessionRessource, {
      headers: this.headers,
    });
  }

  // public update(sessionRessource: SessionRessource): Observable<SessionRessource> {
  //   this.initHeaders();
  //   return this.http.put<SessionRessource>(this.url + '/' + sessionRessource.id, sessionRessource, { headers: this.headers });
  // }

  public transformer(session: Session, id: number, qte: number) {
    this.initHeaders();
    return this.http.post(
      this.url +
        '/transformationRessource/' +
        session.id?.partie?.id +
        '/' +
        session.id?.compte?.id +
        '/' +
        id +
        '/' +
        qte,
      { headers: this.headers }
    );
  }
}
