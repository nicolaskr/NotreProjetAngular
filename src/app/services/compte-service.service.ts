import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class CompteServiceService {
  private url: string = 'http://localhost:8080/np/api/compte';
  private joueurUrl: string = 'http://localhost:8080/np/api/joueur';
  private headers: HttpHeaders | null = null;

  constructor(private httpClient: HttpClient) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('token'),
    });
  }

  public getAllJoueurs(): Observable<Compte[]> {
    return this.httpClient.get<Compte[]>(`${this.joueurUrl}`);
  }
}
