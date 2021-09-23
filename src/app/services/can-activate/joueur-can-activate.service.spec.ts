import { TestBed } from '@angular/core/testing';

import { JoueurCanActivateService } from './joueur-can-activate.service';

describe('JoueurCanActivateService', () => {
  let service: JoueurCanActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurCanActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
