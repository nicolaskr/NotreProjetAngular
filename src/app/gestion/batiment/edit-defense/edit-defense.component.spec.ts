import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDefenseComponent } from './edit-defense.component';

describe('EditDefenseComponent', () => {
  let component: EditDefenseComponent;
  let fixture: ComponentFixture<EditDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDefenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
