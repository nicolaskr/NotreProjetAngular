import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutBatimentComponent } from './cout-batiment.component';

describe('CoutBatimentComponent', () => {
  let component: CoutBatimentComponent;
  let fixture: ComponentFixture<CoutBatimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutBatimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutBatimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
