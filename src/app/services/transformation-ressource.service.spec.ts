import { TestBed } from '@angular/core/testing';

import { TransformationRessourceService } from './transformation-ressource.service';

describe('TransformationRessourceService', () => {
  let service: TransformationRessourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformationRessourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
