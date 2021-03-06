import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoAuthCanActivateService implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    return localStorage.getItem('token') ? false : true;
  }
}
