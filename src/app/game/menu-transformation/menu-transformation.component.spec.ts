import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTransformationComponent } from './menu-transformation.component';

describe('MenuTransformationComponent', () => {
  let component: MenuTransformationComponent;
  let fixture: ComponentFixture<MenuTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTransformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
