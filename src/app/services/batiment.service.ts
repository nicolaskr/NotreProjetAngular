import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatimentService {

  private url: string = "http://localhost:8080/np/api/sessionbatiment";
  private headers: HttpHeaders | any = null;

  constructor() { }


}
