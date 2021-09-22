import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';
import { Partie } from '../model/partie';
import { PartieDto } from '../modelDto/partie-dto';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class PartieServiceService {
  private url: string = 'http://localhost:8080/np/api/partie';
  private headers: HttpHeaders | any = null;

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService
  ) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('token'),
    });
  }

  public getAll(): Observable<Partie[]> {
    return this.httpClient.get<Partie[]>(`${this.url}/withSession`);
  }

  public create(partie: Partie): Observable<Partie> {
    if (partie.description) {
      let partieDto = new PartieDto();
      partieDto.$description = partie.description;
      return this.httpClient.post<Partie>(
        `${this.url}/withDescription`,
        partieDto
      );
    } else {
      return this.httpClient.post<Partie>(`${this.url}`, null);
    }
  }

  public put(partie: Partie): Observable<Partie> {
    this.initHeaders;
    let partieDto = new PartieDto();
    partieDto.$id = partie.id;
    partieDto.$description = partie.description;
    partieDto.$sessions = partie.sessions;
    return this.httpClient.put<Partie>(`${this.url}/${partie.id}`, partie, {
      headers: this.headers,
    });
  }

  public patch(
    partie: Partie,
    patchMap: Map<string, string>
  ): Observable<Partie> {
    this.initHeaders;
    // console.log(patchMap);

    return this.httpClient.patch<Partie>(`${this.url}/${partie.id}`, patchMap, {
      headers: this.headers,
    });
  }

  // public patchDescription(partie: Partie, patchMap:Map<string, string>): Observable<Partie> {
  public patchDescription(partie: Partie): Observable<Partie> {
    this.initHeaders;
    // console.log(patchMap);
    const obj = { description: partie.description };
    return this.httpClient.patch<Partie>(`${this.url}/${partie.id}`, obj, {
      headers: this.headers,
    });
  }

  public delete(partie: Partie) {
    this.initHeaders;
    console.log(partie.id);
    return this.httpClient.delete(`${this.url}/${partie.id}`, {
      headers: this.headers,
    });
  }
}
