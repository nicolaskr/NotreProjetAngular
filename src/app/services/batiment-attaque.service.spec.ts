import { TestBed } from '@angular/core/testing';

import { BatimentAttaqueService } from './batiment-attaque.service';

describe('BatimentAttaqueService', () => {
  let service: BatimentAttaqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatimentAttaqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
