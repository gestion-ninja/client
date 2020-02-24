import { TestBed } from '@angular/core/testing';

import { RangNinjaService } from './rang-ninja.service';

describe('RangNinjaService', () => {
  let service: RangNinjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangNinjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
