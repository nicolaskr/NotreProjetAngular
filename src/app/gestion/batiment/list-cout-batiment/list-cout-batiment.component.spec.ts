import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoutBatimentComponent } from './list-cout-batiment.component';

describe('ListCoutBatimentComponent', () => {
  let component: ListCoutBatimentComponent;
  let fixture: ComponentFixture<ListCoutBatimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCoutBatimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoutBatimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
