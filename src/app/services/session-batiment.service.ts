import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionBatimentService {

  private url: string = "http://localhost:8080/eshop/api/sessionbatiment";
  private headers: HttpHeaders | any = null;

  constructor() { }
}
