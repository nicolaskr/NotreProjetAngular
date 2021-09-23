import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';
import { Partie } from '../model/partie';
import { Session } from '../model/session';
import { SessionDto } from '../modelDto/session-dto';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private url: string = 'http://localhost:8080/np/api/session';
  private headers: HttpHeaders | any = null;
  constructor(private http: HttpClient) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Basic ' + localStorage.getItem('token'),
      Authorization: 'Basic ' + btoa('joueur1:joueur1'),
    });
  }
  public getAll(): Observable<Session[]> {
    return this.http.get<Session[]>(this.url, { headers: this.headers });
  }

  public getByIdPartie(idPartie: number): Observable<Session[]> {
    return this.http.get<Session[]>(this.url + '/' + idPartie, {
      headers: this.headers,
    });
  }
  public getByIdCompte(idCompte: number): Observable<Session[]> {
    // this.initHeaders();
    // return this.httpClient.get<Batiment[]>(this.URL,{headers:this.headers});
    return this.http.get<Session[]>(this.url + '/compte/' + idCompte);
  }

  public delete(idPartie: number, idCompte: number) {
    this.initHeaders();
    return this.http.delete(this.url + '/del/' + idPartie + '/' + idCompte, {
      headers: this.headers,
    });
  }

  public rotation(session: Session) {
    this.initHeaders();
    return this.http.put(
      this.url +
        '/roulement/' +
        session.id.partie.id +
        '/' +
        session.id.compte.id,
      { headers: this.headers }
    );
  }

  public get(idPartie: number, idCompte: number): Observable<Session> {
    this.initHeaders();
    return this.http.get<Session>(this.url + '/' + idPartie + '/' + idCompte, {
      headers: this.headers,
    });
  }

  public post(partie: Partie, compte: Compte): Observable<Session> {
    this.initHeaders();
    // console.log(partie);
    // console.log(compte);
    let sessionDto: SessionDto = new SessionDto(partie.id!, compte.id!);
    console.log(sessionDto);
    return this.http.post<Session>(`${this.url}`, sessionDto, {
      headers: this.headers,
    });
  }

  // public update(session: Session): Observable<Session> {
  //   this.initHeaders();
  //   return this.http.put<Session>(this.url + '/' + session.compte?.id +'/' + session.partie?.id, { headers: this.headers });
  // }
}
