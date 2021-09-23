import { Component, OnInit } from '@angular/core';
import {TabViewModule} from 'primeng/tabview';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
