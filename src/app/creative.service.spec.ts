import { TestBed } from '@angular/core/testing';

import { CreativeService } from './creative.service';

describe('CreativeService', () => {
  let service: CreativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
