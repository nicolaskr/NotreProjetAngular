import { TestBed } from '@angular/core/testing';

import { BatimentDefenseService } from './batiment-defense.service';

describe('BatimentDefenseService', () => {
  let service: BatimentDefenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatimentDefenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
