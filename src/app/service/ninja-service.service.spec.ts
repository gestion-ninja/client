import { TestBed } from '@angular/core/testing';

import { NinjaServiceService } from './ninja-service.service';

describe('NinjaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NinjaServiceService = TestBed.get(NinjaServiceService);
    expect(service).toBeTruthy();
  });
});
