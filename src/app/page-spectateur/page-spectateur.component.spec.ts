import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpectateurComponent } from './page-spectateur.component';

describe('PageSpectateurComponent', () => {
  let component: PageSpectateurComponent;
  let fixture: ComponentFixture<PageSpectateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSpectateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSpectateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
