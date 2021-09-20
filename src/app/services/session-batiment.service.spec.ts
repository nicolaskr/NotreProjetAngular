import { TestBed } from '@angular/core/testing';

import { SessionBatimentService } from './session-batiment.service';

describe('SessionBatimentService', () => {
  let service: SessionBatimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionBatimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
