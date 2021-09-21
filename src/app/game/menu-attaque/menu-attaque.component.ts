import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-attaque',
  templateUrl: './menu-attaque.component.html',
  styleUrls: ['./menu-attaque.component.css'],
})
export class MenuAttaqueComponent implements OnInit {
  @Output()
  attaqueEvent: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  save() {
    this.attaqueEvent.emit();
  }
}
