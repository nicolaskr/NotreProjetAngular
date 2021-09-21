import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get logged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  get username(): string | null {
    if (localStorage.getItem('compte')) {
      let obj = JSON.parse(localStorage.getItem('compte')!);
      return obj._username;
    }
    return null;
  }
}
