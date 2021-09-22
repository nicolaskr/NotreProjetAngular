import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationRessourceComponent } from './transformation-ressource.component';

describe('TransformationRessourceComponent', () => {
  let component: TransformationRessourceComponent;
  let fixture: ComponentFixture<TransformationRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformationRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
