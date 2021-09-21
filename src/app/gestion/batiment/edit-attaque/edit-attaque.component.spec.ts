import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttaqueComponent } from './edit-attaque.component';

describe('EditAttaqueComponent', () => {
  let component: EditAttaqueComponent;
  let fixture: ComponentFixture<EditAttaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAttaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
