import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAmeliorationComponent } from './menu-amelioration.component';

describe('MenuAmeliorationComponent', () => {
  let component: MenuAmeliorationComponent;
  let fixture: ComponentFixture<MenuAmeliorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAmeliorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAmeliorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
