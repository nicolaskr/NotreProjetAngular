import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerPartieComponent } from './charger-partie.component';

describe('NouvellePartieComponent', () => {
  let component: ChargerPartieComponent;
  let fixture: ComponentFixture<ChargerPartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChargerPartieComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
