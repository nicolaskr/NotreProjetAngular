import { Ressource } from './../model/ressource';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RessourceService {
  private headers: HttpHeaders | any = null;
  private URL: string = 'http://localhost:8080/np/api/ressource';

  constructor(private httpClient: HttpClient) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'Basic ' + localStorage.getItem('token'),
      Authorization: 'Basic ' + btoa('joueur1:joueur1'),
    });
  }

  public getAll(): Observable<Ressource[]> {
    // this.initHeaders();
    // return this.httpClient.get<Ressource[]>(this.URL,{headers:this.headers});
    return this.httpClient.get<Ressource[]>(this.URL);
  }

  public get(id: number): Observable<Ressource> {
    // this.initHeaders();
    // return this.httpClient.get<Ressource>(`${this.URL}/${id}`,{headers:this.headers});
    return this.httpClient.get<Ressource>(`${this.URL}/${id}`);
  }

  public independance(id: number | undefined): Observable<boolean> {
    // this.initHeaders();
    // return this.httpClient.get<Ressource>(`${this.URL}/${id}`,{headers:this.headers});
    return this.httpClient.get<boolean>(this.URL + '/independant/' + id);
  }

  public delete(id: number | undefined) {
    // this.initHeaders();
    // return this.httpClient.delete(this.URL+"/"+id,{headers:this.headers})
    return this.httpClient.delete(this.URL + '/' + id);
  }

  public create(ressource: Ressource): Observable<Ressource> {
    // this.initHeaders();
    const obj = {
      nom: ressource.nom,
    };
    // return this.httpClient.post<Ressource>(this.URL, obj,{headers:this.headers});
    return this.httpClient.post<Ressource>(this.URL, obj);
  }


  public update(ressource: Ressource): Observable<Ressource> {
    // this.initHeaders();
    // return this.httpClient.put<Ressource>(this.URL + '/' + ressource.id, ressource,{headers:this.headers});
    return this.httpClient.put<Ressource>(
      this.URL + '/' + ressource.id,
      ressource
    );
  }
}
