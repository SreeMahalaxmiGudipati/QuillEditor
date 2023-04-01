import { TestBed } from '@angular/core/testing';

import { FriendlyService } from './friendly.service';

describe('FriendlyService', () => {
  let service: FriendlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
