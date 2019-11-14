import { TestBed } from '@angular/core/testing';

import { BabyshowerService } from './babyshower.service';

describe('BabyshowerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BabyshowerService = TestBed.get(BabyshowerService);
    expect(service).toBeTruthy();
  });
});
