import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from 'src/app/model/compte';
import { CompteDto } from 'src/app/modelDto/compte-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private url: string = 'http://localhost:8080/np/api/compte';
  private joueurUrl: string = 'http://localhost:8080/np/api/joueur';

  constructor(private httpClient: HttpClient) {}
  public usernameIsInDataBase(username: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      `${this.url}/isUsernameInDb/${username}`
    );
  }

  public signIn(username: string, password: string): Observable<any> {
    let info = btoa(`${username}:${password}`);
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${info}`,
    });
    return this.httpClient.get(`${this.url}/authentification`, {
      headers: headers,
    });
  }

  public signUp(compteDto: CompteDto): Observable<any> {
    return this.httpClient.post(`${this.joueurUrl}/inscription`, compteDto);
  }
}
