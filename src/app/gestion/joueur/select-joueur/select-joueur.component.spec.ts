import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJoueurComponent } from './select-joueur.component';

describe('SelectJoueurComponent', () => {
  let component: SelectJoueurComponent;
  let fixture: ComponentFixture<SelectJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
