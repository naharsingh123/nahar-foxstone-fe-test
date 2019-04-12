import { TestBed } from '@angular/core/testing';

import { OfferingsService } from './offerings.service';

describe('OfferingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferingsService = TestBed.get(OfferingsService);
    expect(service).toBeTruthy();
  });
});
