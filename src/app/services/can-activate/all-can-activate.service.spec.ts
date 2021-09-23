import { TestBed } from '@angular/core/testing';

import { AllCanActivateService } from './all-can-activate.service';

describe('AllCanActivateService', () => {
  let service: AllCanActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCanActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
