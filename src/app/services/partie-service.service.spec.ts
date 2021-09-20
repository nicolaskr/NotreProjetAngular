import { TestBed } from '@angular/core/testing';

import { PartieServiceService } from './partie-service.service';

describe('PartieServiceService', () => {
  let service: PartieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
