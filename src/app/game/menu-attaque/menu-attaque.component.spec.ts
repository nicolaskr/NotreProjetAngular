import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAttaqueComponent } from './menu-attaque.component';

describe('MenuAttaqueComponent', () => {
  let component: MenuAttaqueComponent;
  let fixture: ComponentFixture<MenuAttaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAttaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAttaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
