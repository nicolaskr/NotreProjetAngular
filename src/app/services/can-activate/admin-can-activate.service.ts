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
export class AdminCanActivateService implements CanActivate {
  constructor() {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('compte')) {
      let obj = JSON.parse(localStorage.getItem('compte')!);
      return obj._role === 'ROLE_ADMIN' ? true : false;
    }
    return false;
  }
}
