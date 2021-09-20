import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerRessourceComponent } from './transformer-ressource.component';

describe('TransformerRessourceComponent', () => {
  let component: TransformerRessourceComponent;
  let fixture: ComponentFixture<TransformerRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformerRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformerRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
