import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransformationComponent } from './edit-transformation.component';

describe('EditTransformationComponent', () => {
  let component: EditTransformationComponent;
  let fixture: ComponentFixture<EditTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
