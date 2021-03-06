import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NotreProjetAngular';

  constructor(private router: Router) {}

  // get admin(): boolean {
  //   return localStorage.getItem('role') === 'ROLE_ADMIN' ? true : false;
  // }

  get admin(): boolean {
    if (localStorage.getItem('compte')) {
      let obj = JSON.parse(localStorage.getItem('compte')!);
      return obj._role === 'ROLE_ADMIN' ? true : false;
    }
    return false;
  }

  get logged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
