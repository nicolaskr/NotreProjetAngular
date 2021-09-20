import { TransformationRessource } from './../model/transformation-ressource';
import { SessionBatiment } from './../model/session-batiment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batiment } from '../model/batiment';
import { Session } from '../model/session';

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
      pointsDeVie: sessionBatiment.pv,
      pointsDAttaque: sessionBatiment.ptAttaque,
      level: sessionBatiment.level
    }
    return this.http.post<SessionBatiment>(this.url, obj, { headers: this.headers });
  }

  public update(sessionBatiment: SessionBatiment): Observable<SessionBatiment> {
    this.initHeaders();
    return this.http.put<SessionBatiment>(this.url + '/' + sessionBatiment.id, sessionBatiment, { headers: this.headers });
  }

  public ameliorer(sessionBatiment: SessionBatiment): Observable<SessionBatiment> {
    this.initHeaders();
    return this.http.put<SessionBatiment>(this.url + '/' + sessionBatiment.id, { headers: this.headers });
  }

  public getBatimentsConstructibles(session: Session) {
    this.initHeaders();
    return this.http.get<Batiment[]>(this.url + '/construction/' + session, { headers: this.headers });
  }

  public getBatimentsAmeliorables(session: Session) {
    this.initHeaders();
    return this.http.get<SessionBatiment[]>(this.url + '/amelioration/' + session, { headers: this.headers });
  }

  public getBatimentsTransformation(session: Session) {
    this.initHeaders();
    return this.http.get<SessionBatiment[]>(this.url + '/transformation/' + session, { headers: this.headers });
  }

  public getListTransformationRessource(transformation: Batiment) {
    this.initHeaders();
    return this.http.get<TransformationRessource[]>(this.url + '/transformation/ressources/' + transformation, { headers: this.headers });
  }

  public getTransformationRessourceById(id: number) {
    this.initHeaders();
    return this.http.get<TransformationRessource>(this.url + '/transformation/ressources/' + id, { headers: this.headers });
  }
}
