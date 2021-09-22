import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransformationRessourceComponent } from './list-transformation-ressource.component';

describe('ListTransformationRessourceComponent', () => {
  let component: ListTransformationRessourceComponent;
  let fixture: ComponentFixture<ListTransformationRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTransformationRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransformationRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
