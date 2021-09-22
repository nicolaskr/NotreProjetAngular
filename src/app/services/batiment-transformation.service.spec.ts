import { TestBed } from '@angular/core/testing';

import { BatimentTransformationService } from './batiment-transformation.service';

describe('BatimentTransformationService', () => {
  let service: BatimentTransformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatimentTransformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
