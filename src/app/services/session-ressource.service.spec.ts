import { TestBed } from '@angular/core/testing';

import { SessionRessourceService } from './session-ressource.service';

describe('SessionRessourceService', () => {
  let service: SessionRessourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionRessourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
