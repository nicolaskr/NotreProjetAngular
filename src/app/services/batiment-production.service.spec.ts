import { TestBed } from '@angular/core/testing';

import { BatimentProductionService } from './batiment-production.service';

describe('BatimentProductionService', () => {
  let service: BatimentProductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatimentProductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
