import { TestBed } from '@angular/core/testing';

import { ModernService } from './modern.service';

describe('ModernService', () => {
  let service: ModernService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModernService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
