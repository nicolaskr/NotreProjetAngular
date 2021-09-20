import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConstructionComponent } from './menu-construction.component';

describe('MenuConstructionComponent', () => {
  let component: MenuConstructionComponent;
  let fixture: ComponentFixture<MenuConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
