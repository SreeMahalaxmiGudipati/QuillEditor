import { TestBed } from '@angular/core/testing';

import { ElegantService } from './elegant.service';

describe('ElegantService', () => {
  let service: ElegantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElegantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
