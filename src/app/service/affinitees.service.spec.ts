import { TestBed } from '@angular/core/testing';

import { AffiniteesService } from './affinitees.service';

describe('AffiniteesService', () => {
  let service: AffiniteesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffiniteesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
